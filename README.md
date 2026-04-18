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
