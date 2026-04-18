# Villa Higuericas Guide

Web estática para huéspedes de una villa en `Calle Dalia 31, Pilar de la Horadada`.

## Abrir la web

Abre [`index.html`](/Users/e045989/villa-higuericas-guide/index.html) en el navegador o sirve la carpeta con cualquier servidor estático.

## Qué editar primero

Toda la información editable está en [`site-data.js`](/Users/e045989/villa-higuericas-guide/site-data.js):

- Nombre y contraseña del Wi-Fi.
- Horarios reales de check-in y check-out.
- Teléfonos y nombres de anfitriones.
- Instrucciones exactas de jacuzzi, piscina y barbacoa según el equipamiento real.
- Fotos reales de la propiedad para la portada.
- Enlaces reales a listas compartidas de Google Maps si quieres usarlas.

## Idiomas

La web ahora soporta:

- `🌍 Auto`: usa el idioma del navegador y resuelve a español o inglés.
- `🇪🇸 ES`: fuerza español.
- `🇬🇧 EN`: fuerza inglés.

La elección manual se guarda en `localStorage` del navegador.

## Sustituir fotos

1. Guarda tus fotos en `/Users/e045989/villa-higuericas-guide/assets/`.
2. Para la foto principal que me has pasado, usa exactamente este nombre: `/Users/e045989/villa-higuericas-guide/assets/hero-villa-cover.jpg`.
3. Cambia o amplía las rutas del bloque `property.photos` en `site-data.js` si añades más imágenes.
4. Las tres primeras fotos se usan en la portada.
5. Si quieres más fotos para reutilizarlas en otras secciones, añade más objetos al array.

## Estructura

- `index.html`: estructura principal.
- `styles.css`: diseño responsive.
- `site-data.js`: contenido editable.
- `app.js`: renderizado simple y botones.
- `generated-places.js`: datos generados para la sección `To enjoy`.

## Google Maps As Source Of Truth

La lista guardada de Google Maps puede seguir siendo la fuente de verdad operativa, pero no se usa directamente en el runtime de la web.

El flujo preparado ahora es:

- `scripts/sync-google-maps-list.mjs`: intenta extraer un snapshot estable de la lista compartida.
- `data/places.snapshot.json`: último snapshot válido generado desde Google Maps.
- `data/places.overrides.json`: categorías, favoritos y copy corto para la web.
- `scripts/build-generated-places.mjs`: mezcla snapshot + overrides y genera `generated-places.js`.

### Workflows

- `.github/workflows/sync-google-maps-list.yml`
  Sincroniza la lista manualmente o en horario programado y actualiza el snapshot.

- `.github/workflows/deploy-pages.yml`
  Construye `generated-places.js` a partir del último snapshot disponible y despliega en GitHub Pages.

Importante:

- Si el scrapeo de Google Maps falla, la web puede seguir desplegándose con el último snapshot válido.
- La parte más frágil del sistema es `sync-google-maps-list.mjs`, porque Google Maps no ofrece una API oficial para listas guardadas compartidas.
