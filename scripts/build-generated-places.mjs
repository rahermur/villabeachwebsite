import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const snapshotPath = path.join(ROOT, "data", "places.snapshot.json");
const overridesPath = path.join(ROOT, "data", "places.overrides.json");
const outputPath = path.join(ROOT, "generated-places.js");

const snapshot = JSON.parse(await fs.readFile(snapshotPath, "utf8"));
const overrides = JSON.parse(await fs.readFile(overridesPath, "utf8"));

const placeMap = new Map(snapshot.places.map((place) => [place.id, place]));

const categoryLabels = {
  es: {
    restaurants: "Restaurants",
    cafes: "Cafeterías",
    bars: "Bar / chiringuito",
    "ice-cream": "Ice Cream",
    supermarkets: "Supermarkets",
    shopping: "Shopping",
    sports: "Sports & adventures",
    tourism: "Turismo",
    padel: "Pádel",
    golf: "Golf",
    parks: "Zonas infantiles",
    attractions: "Parques de atracciones"
  },
  en: {
    restaurants: "Restaurants",
    cafes: "Cafes",
    bars: "Bar / beach club",
    "ice-cream": "Ice Cream",
    supermarkets: "Supermarkets",
    shopping: "Shopping",
    sports: "Sports & adventures",
    tourism: "Tourism",
    padel: "Padel",
    golf: "Golf",
    parks: "Kids areas",
    attractions: "Attraction parks"
  }
};

const categoryEmoji = {
  restaurants: "🍽️",
  cafes: "☕",
  bars: "🍹",
  supermarkets: "🛒",
  shopping: "🛍️",
  sports: "💪",
  tourism: "🧭",
  parks: "🛝",
  attractions: "🎡"
};

const parentCategoryMap = {
  restaurants: "restaurants",
  cafes: "restaurants",
  bars: "restaurants",
  "ice-cream": "restaurants",
  supermarkets: "supermarkets",
  shopping: "shopping",
  sports: "sports",
  tourism: "sports",
  padel: "sports",
  golf: "sports",
  parks: "parks",
  attractions: "parks"
};

const subgroupMeta = {
  es: {
    restaurants: "🍽️ Restaurantes",
    cafes: "☕ Cafeterías",
    bars: "🍹 Bar y chiringuito",
    "ice-cream": "🍦 Helados y dulce",
    supermarkets: "🛒 Supermercados",
    shopping: "🛍️ Compras y centros",
    sports: "💪 Deportes y aventura",
    tourism: "🧭 Turismo y visitas",
    padel: "🎾 Pádel",
    golf: "⛳ Golf",
    parks: "🛝 Zonas infantiles",
    attractions: "🎡 Parques de atracciones"
  },
  en: {
    restaurants: "🍽️ Restaurants",
    cafes: "☕ Cafes",
    bars: "🍹 Bars and beach clubs",
    "ice-cream": "🍦 Ice cream and sweets",
    supermarkets: "🛒 Supermarkets",
    shopping: "🛍️ Shopping and malls",
    sports: "💪 Sports and adventures",
    tourism: "🧭 Tourism and visits",
    padel: "🎾 Padel",
    golf: "⛳ Golf",
    parks: "🛝 Kids areas",
    attractions: "🎡 Attraction parks"
  }
};

const resolveBaseCategory = (place) => overrides.places?.[place.id]?.category || place.category;
const resolveParentCategory = (place) => parentCategoryMap[resolveBaseCategory(place)] || resolveBaseCategory(place);
const normalize = (value = "") =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const resolveSubgroup = (place) => {
  const overrideSubgroup = overrides.places?.[place.id]?.subgroup;
  if (overrideSubgroup) return overrideSubgroup;

  const baseCategory = resolveBaseCategory(place);
  if (baseCategory !== "parks") return baseCategory;

  const haystack = normalize([place.name, place.note, place.address].filter(Boolean).join(" "));
  if (
    /(atraccion|atracciones|amusement park|theme park|water park|aquapark|parque acuatico|fairground|feria|arcade|go kart|karting|fun park|adventure park|tirolina|zipline)/.test(
      haystack
    )
  ) {
    return "attractions";
  }

  return "parks";
};

const categoryOrder = overrides.categoryOrder.filter((categoryId) =>
  snapshot.places.some((place) => resolveParentCategory(place) === categoryId)
);

const home = snapshot.source.home;
const mapEmbed =
  home?.lat && home?.lng
    ? `https://www.google.com/maps?q=${home.lat},${home.lng}&z=13&output=embed`
    : "https://www.google.com/maps?q=Calle%20Dalia%2031%2C%20Pilar%20de%20la%20Horadada&output=embed";

const toRadians = (value) => (value * Math.PI) / 180;

const haversineKm = (fromLat, fromLng, toLat, toLng) => {
  const earthRadiusKm = 6371;
  const dLat = toRadians(toLat - fromLat);
  const dLng = toRadians(toLng - fromLng);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(fromLat)) * Math.cos(toRadians(toLat)) * Math.sin(dLng / 2) ** 2;
  return 2 * earthRadiusKm * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

const estimateTravel = (distanceKm) => {
  const routedWalkingKm = distanceKm * 1.22;
  const routedDrivingKm = distanceKm * 1.12;
  const walkingMinutes = Math.max(1, Math.round((routedWalkingKm / 4.8) * 60));
  const drivingMinutes = Math.max(1, Math.round((routedDrivingKm / 32) * 60));
  const isWalkFriendly = walkingMinutes <= 30;

  return {
    distanceKm,
    walkingMinutes,
    drivingMinutes,
    distanceLabel: `${distanceKm.toFixed(1)} km · ${isWalkFriendly ? `🚶 ~${walkingMinutes} min` : `🚗 ~${drivingMinutes} min`}`
  };
};

const getCategoryMeta = (categoryId, locale) => overrides.categoryMeta[categoryId]?.[locale];

const makeItem = (place, locale) => {
  const override = overrides.places?.[place.id] || {};
  const categoryId = resolveBaseCategory(place);
  const travelEstimate =
    home?.lat && home?.lng && place.lat && place.lng
      ? estimateTravel(haversineKm(home.lat, home.lng, place.lat, place.lng))
      : null;
  const detailItems = [
    place.note
      ? { label: locale === "es" ? "✨ Nota" : "✨ Note", value: place.note }
      : null,
    place.address
      ? { label: locale === "es" ? "📍 Dirección" : "📍 Address", value: place.address }
      : null
  ].filter(Boolean);

  return {
    title: override.title?.[locale] || place.name,
    text: override.text?.[locale] || "",
    details: detailItems,
    featured: overrides.featuredIds.includes(place.id),
    distanceKm: travelEstimate?.distanceKm ?? null,
    walkingMinutes: travelEstimate?.walkingMinutes ?? null,
    drivingMinutes: travelEstimate?.drivingMinutes ?? null,
    distanceLabel: travelEstimate?.distanceLabel || "",
    temporarilyClosed: Boolean(place.temporarilyClosed),
    statusLabel: place.temporarilyClosed
      ? locale === "es"
        ? "⚠️ Cerrado temporalmente"
        : "⚠️ Temporarily closed"
      : "",
    tags:
      override.tags?.[locale] || [
        `${categoryEmoji[categoryId] || "📍"} ${categoryLabels[locale][categoryId] || categoryId}`
      ].filter(Boolean),
    links: [{ label: locale === "es" ? "Abrir en Maps" : "Open in Maps", href: place.mapsUrl }]
  };
};

const subgroupOrder = [
  "restaurants",
  "bars",
  "cafes",
  "ice-cream",
  "supermarkets",
  "shopping",
  "sports",
  "tourism",
  "padel",
  "golf",
  "parks",
  "attractions"
];

const makeCategories = (locale) =>
  categoryOrder.map((categoryId) => {
    const meta = overrides.categoryMeta[categoryId];
    const categoryPlaces = snapshot.places
      .filter((place) => resolveParentCategory(place) === categoryId)
      .map((place) => ({ place, subgroupId: resolveSubgroup(place) }));

    const subgroups = subgroupOrder
      .filter((subgroupId) => categoryPlaces.some((entry) => entry.subgroupId === subgroupId))
      .map((subgroupId) => ({
        id: subgroupId,
        title: subgroupMeta[locale][subgroupId] || subgroupId,
        items: categoryPlaces
          .filter((entry) => entry.subgroupId === subgroupId)
          .map((entry) => makeItem(entry.place, locale))
      }));

    return {
      id: `food-${categoryId}`,
      title: meta.title[locale],
      emoji: categoryEmoji[categoryId] || "📍",
      eyebrow: meta.eyebrow[locale],
      description: meta.description[locale],
      subgroups
    };
  });

const generated = {
  meta: {
    sourceUrl: overrides.listUrl,
    listTitle: snapshot.source.title,
    lastSyncedAt: snapshot.source.lastSyncedAt,
    totalPlaces: snapshot.source.totalPlaces,
    directListEmbedAvailable: false
  },
  es: {
    foodIntro: {
      title: "Lista compartida de Google Maps",
      body:
        "Esta sección resume la lista compartida del anfitrión en Google Maps y la ordena por bloques más simples como Restaurants, Supermarkets, Shopping, Sports & adventures o Zonas infantiles.\nLa llamada principal es abrir la lista completa en Google Maps, guardarla en tu cuenta y usar este resumen web solo como atajo rápido durante la estancia.\nLas distancias y tiempos se muestran como referencia aproximada desde la villa.",
      tags: ["Google Maps", `${snapshot.source.totalPlaces} lugares guardados`],
      links: [
        { label: "🗺️ Abrir y guardar lista en Google Maps", href: overrides.listUrl },
        { label: "Turismo Pilar de la Horadada", href: "https://www.visitpilardelahoradada.com/" }
      ]
    },
    foodFeatured: [],
    foodCategories: makeCategories("es"),
    foodMapEmbed: mapEmbed
  },
  en: {
    foodIntro: {
      title: "Shared Google Maps list",
      body:
        "This section summarises the host's shared Google Maps list and reorders it into simpler groups such as Restaurants, Supermarkets, Shopping, Sports & adventures or Kids areas.\nThe main action is to open the full list in Google Maps, save it to your account and use this web summary only as a quick reference during the stay.\nDistances and travel times are shown as approximate references from the villa.",
      tags: ["Google Maps", `${snapshot.source.totalPlaces} saved places`],
      links: [
        { label: "🗺️ Open and save list in Google Maps", href: overrides.listUrl },
        { label: "Pilar de la Horadada tourism", href: "https://www.visitpilardelahoradada.com/" }
      ]
    },
    foodFeatured: [],
    foodCategories: makeCategories("en"),
    foodMapEmbed: mapEmbed
  }
};

const output = `window.generatedPlacesData = ${JSON.stringify(generated, null, 2)};\n`;
await fs.writeFile(outputPath, output, "utf8");
