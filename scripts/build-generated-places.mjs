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
    golf: "Golf",
    "ice-cream": "Ice Cream",
    supermarkets: "Supermarkets",
    shopping: "Shopping",
    sports: "Sports",
    parks: "Parks",
    health: "Health",
    pharmacy: "Pharmacy"
  },
  en: {
    restaurants: "Restaurants",
    golf: "Golf",
    "ice-cream": "Ice Cream",
    supermarkets: "Supermarkets",
    shopping: "Shopping",
    sports: "Sports",
    parks: "Parks",
    health: "Health",
    pharmacy: "Pharmacy"
  }
};

const categoryEmoji = {
  restaurants: "🍽️",
  golf: "⛳",
  "ice-cream": "🍦",
  supermarkets: "🛒",
  shopping: "🛍️",
  sports: "🎾",
  parks: "🌳",
  health: "🏥",
  pharmacy: "💊"
};

const categoryOrder = overrides.categoryOrder.filter((categoryId) =>
  snapshot.places.some((place) => (overrides.places?.[place.id]?.category || place.category) === categoryId)
);

const home = snapshot.source.home;
const mapEmbed =
  home?.lat && home?.lng
    ? `https://www.google.com/maps?q=${home.lat},${home.lng}&z=13&output=embed`
    : "https://www.google.com/maps?q=Calle%20Dalia%2031%2C%20Pilar%20de%20la%20Horadada&output=embed";

const getCategoryMeta = (categoryId, locale) => overrides.categoryMeta[categoryId]?.[locale];

const makeItem = (place, locale) => {
  const override = overrides.places?.[place.id] || {};
  const categoryId = override.category || place.category;
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
    tags:
      override.tags?.[locale] || [
        `${categoryEmoji[categoryId] || "📍"} ${categoryLabels[locale][categoryId] || categoryId}`
      ].filter(Boolean),
    links: [{ label: locale === "es" ? "Abrir en Maps" : "Open in Maps", href: place.mapsUrl }]
  };
};

const makeCategories = (locale) =>
  categoryOrder.map((categoryId) => {
    const meta = overrides.categoryMeta[categoryId];
    const items = snapshot.places
      .filter((place) => (overrides.places?.[place.id]?.category || place.category) === categoryId)
      .map((place) => makeItem(place, locale));

    return {
      id: `food-${categoryId}`,
      title: meta.title[locale],
      emoji: categoryEmoji[categoryId] || "📍",
      eyebrow: meta.eyebrow[locale],
      description: meta.description[locale],
      items
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
        "Esta sección resume la lista compartida del anfitrión en Google Maps y la ordena por categorías como Restaurants, Golf, Ice Cream o Shopping.\nLa llamada principal es abrir la lista completa en Google Maps, guardarla en tu cuenta y usar este resumen web solo como atajo rápido durante la estancia.",
      tags: ["Google Maps", `${snapshot.source.totalPlaces} lugares guardados`],
      links: [{ label: "🗺️ Abrir y guardar lista en Google Maps", href: overrides.listUrl }]
    },
    foodFeatured: [],
    foodCategories: makeCategories("es"),
    foodMapEmbed: mapEmbed
  },
  en: {
    foodIntro: {
      title: "Shared Google Maps list",
      body:
        "This section summarises the host's shared Google Maps list and reorders it into categories such as Restaurants, Golf, Ice Cream or Shopping.\nThe main action is to open the full list in Google Maps, save it to your account and use this web summary only as a quick reference during the stay.",
      tags: ["Google Maps", `${snapshot.source.totalPlaces} saved places`],
      links: [{ label: "🗺️ Open and save list in Google Maps", href: overrides.listUrl }]
    },
    foodFeatured: [],
    foodCategories: makeCategories("en"),
    foodMapEmbed: mapEmbed
  }
};

const output = `window.generatedPlacesData = ${JSON.stringify(generated, null, 2)};\n`;
await fs.writeFile(outputPath, output, "utf8");
