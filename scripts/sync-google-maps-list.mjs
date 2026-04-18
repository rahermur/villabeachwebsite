import fs from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const snapshotPath = path.join(ROOT, "data", "places.snapshot.json");
const LIST_URL =
  process.env.GOOGLE_MAPS_LIST_URL || "https://maps.app.goo.gl/6kiRLdhaMThJCQia9";
const BASE_URL = "https://www.google.es";

const slugify = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const decodeHtml = (value = "") => value.replaceAll("&amp;", "&");
const stripPayloadPrefix = (text) => text.replace(/^\)\]\}'\n/, "");
const curlGet = (url) =>
  execFileSync("curl", ["-L", url], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"]
  });

const inferCategory = ({ name = "", note = "", address = "" }) => {
  const haystack = `${name} ${note} ${address}`.toLowerCase();

  if (haystack.includes("home") || haystack.includes("c. dalia")) return "home";
  if (haystack.includes("farmacia")) return "pharmacy";
  if (haystack.includes("hospital") || haystack.includes("cap de pilar")) return "health";
  if (haystack.includes("golf")) return "golf";
  if (haystack.includes("ice cream") || haystack.includes("helader")) return "ice-cream";
  if (haystack.includes("padel") || haystack.includes("gym")) return "sports";
  if (
    haystack.includes("supermarket") ||
    haystack.includes("mercadona") ||
    haystack.includes("aldi") ||
    haystack.includes("manper")
  ) {
    return "supermarkets";
  }
  if (
    haystack.includes("shopping center") ||
    haystack.includes("centro comercial") ||
    haystack.includes("bazar") ||
    haystack.includes("hiperasia")
  ) {
    return "shopping";
  }
  if (
    haystack.includes("infantil") ||
    haystack.includes("playground") ||
    haystack.includes("parque")
  ) {
    return "parks";
  }

  return "restaurants";
};

const getListPayloadUrl = async () => {
  const html = curlGet(LIST_URL);
  const match = html.match(/<link href="([^"]*\/maps\/preview\/entitylist\/getlist[^"]+)"/i);

  if (!match?.[1]) {
    throw new Error("Could not find the structured Google Maps list endpoint in the page.");
  }

  return new URL(decodeHtml(match[1]), BASE_URL).toString();
};

const toMapsUrl = (place) => {
  const query = [place.name, place.address].filter(Boolean).join(", ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
};

const payloadUrl = await getListPayloadUrl();
const rawPayload = stripPayloadPrefix(curlGet(payloadUrl));
const parsedPayload = JSON.parse(rawPayload);
const root = parsedPayload[0];

if (!Array.isArray(root?.[8])) {
  throw new Error("The Google Maps payload format has changed and no places array was found.");
}

const dedupe = new Map();

for (const item of root[8]) {
  const details = item?.[1] || [];
  const name = item?.[2]?.trim();
  const note = item?.[3]?.trim() || "";
  const address = details?.[4] || details?.[2] || "";
  const lat = details?.[5]?.[2] ?? null;
  const lng = details?.[5]?.[3] ?? null;

  if (!name) continue;

  const key = slugify(`${name}-${address}`);
  if (dedupe.has(key)) continue;

  const place = {
    id: slugify(name),
    name,
    note,
    address,
    lat,
    lng,
    category: inferCategory({ name, note, address })
  };

  place.mapsUrl = toMapsUrl(place);
  dedupe.set(key, place);
}

const allPlaces = Array.from(dedupe.values());
const homePlace = allPlaces.find((place) => place.category === "home");
const places = allPlaces.filter((place) => place.category !== "home");

if (!places.length) {
  throw new Error("No places could be extracted from the Google Maps list payload.");
}

const snapshot = {
  source: {
    type: "google-maps-saved-list",
    url: LIST_URL,
    payloadUrl,
    lastSyncedAt: new Date().toISOString(),
    title: root[4] || "",
    description: root[5] || "",
    totalPlaces: places.length,
    home:
      homePlace && homePlace.lat && homePlace.lng
        ? {
            name: homePlace.name,
            address: homePlace.address,
            lat: homePlace.lat,
            lng: homePlace.lng
          }
        : null
  },
  places
};

await fs.writeFile(snapshotPath, JSON.stringify(snapshot, null, 2) + "\n", "utf8");
