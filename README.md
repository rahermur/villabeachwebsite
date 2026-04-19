# Villa Higuericas Guide

Static guest guide for a villa in `Calle Dalia 31, Pilar de la Horadada`.

## Run locally

Open [index.html](/Users/e045989/villa-higuericas-guide/index.html) directly in a browser, or serve the folder with any static server.

Example:

```bash
cd /Users/e045989/villa-higuericas-guide
python3 -m http.server 8123
```

## Main files

- [index.html](/Users/e045989/villa-higuericas-guide/index.html): page structure
- [styles.css](/Users/e045989/villa-higuericas-guide/styles.css): responsive styles
- [site-data.js](/Users/e045989/villa-higuericas-guide/site-data.js): editable content and translations
- [site-data.locales.js](/Users/e045989/villa-higuericas-guide/site-data.locales.js): extra locale layer for the expanded language set and generated places labels
- [app.js](/Users/e045989/villa-higuericas-guide/app.js): rendering, interactions, language switching, access gate
- [generated-places.js](/Users/e045989/villa-higuericas-guide/generated-places.js): generated recommendations data

## What to edit first

Most content changes should happen in [site-data.js](/Users/e045989/villa-higuericas-guide/site-data.js):

- Wi-Fi name and password
- Check-in and check-out details
- Host and support contact details
- Pool, hot tub and barbecue instructions
- House rules and pet policy
- Google Maps shared list link
- Hero photos and property copy

## Languages

The guide supports:

- Spanish (`es`)
- English (`en`)
- German (`de`)
- Dutch (`nl`)
- Swedish (`sv`)
- Polish (`pl`)
- Russian (`ru`)
- Danish (`da`)
- Norwegian (`no`)

Language behaviour:

- first visit uses automatic browser detection
- the UI shows a compact language dropdown instead of fixed language pills
- the dropdown shows the current effective language with a flag
- manual selection is stored in `localStorage`

Implementation notes:

- base Spanish and English content lives in [site-data.js](/Users/e045989/villa-higuericas-guide/site-data.js)
- the additional locale layer lives in [site-data.locales.js](/Users/e045989/villa-higuericas-guide/site-data.locales.js)
- recommendation headings and category labels for generated places are also extended there

## Photos

Store property images in `/Users/e045989/villa-higuericas-guide/assets/`.

Current expectations:

- the main cover image is `/Users/e045989/villa-higuericas-guide/assets/hero-villa-cover.jpg`
- the first images in `property.photos` are reused in the hero
- extra images can be added to the same array in [site-data.js](/Users/e045989/villa-higuericas-guide/site-data.js)

## Google Maps sync pipeline

The shared Google Maps list is treated as an external source, but the website does not read it directly at runtime.

Prepared flow:

- [scripts/sync-google-maps-list.mjs](/Users/e045989/villa-higuericas-guide/scripts/sync-google-maps-list.mjs): syncs a stable snapshot from the shared list
- [data/places.snapshot.json](/Users/e045989/villa-higuericas-guide/data/places.snapshot.json): latest synced raw snapshot
- [data/places.overrides.json](/Users/e045989/villa-higuericas-guide/data/places.overrides.json): editorial overrides, favourites and grouping
- [scripts/build-generated-places.mjs](/Users/e045989/villa-higuericas-guide/scripts/build-generated-places.mjs): combines snapshot + overrides into generated data
- [generated-places.js](/Users/e045989/villa-higuericas-guide/generated-places.js): browser-ready output used by the guide

## GitHub Actions

- [.github/workflows/sync-google-maps-list.yml](/Users/e045989/villa-higuericas-guide/.github/workflows/sync-google-maps-list.yml)
  Refreshes the Google Maps snapshot and rebuilds generated places.

- [.github/workflows/deploy-pages.yml](/Users/e045989/villa-higuericas-guide/.github/workflows/deploy-pages.yml)
  Syncs the list, rebuilds generated places and deploys the site to GitHub Pages.

## Notes

- If Google Maps scraping fails, the site can still deploy using the latest valid snapshot already committed in the repo.
- The most fragile part of the project is the Google Maps sync script, because Google does not provide an official API for shared saved lists.
- `generated-places.js` is a build artifact and should be regenerated after changes to the snapshot or overrides.
- If you add a new supported language, update both [site-data.locales.js](/Users/e045989/villa-higuericas-guide/site-data.locales.js) and any generated-places locale labels defined there.
