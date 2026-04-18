const data = window.siteData;

const textToParagraphs = (text) =>
  text.split("\n").map((line) => `<p>${line}</p>`).join("");

const createLinks = (links = []) => {
  if (!links.length) return "";

  return `
    <div class="action-list">
      ${links
        .map(
          (link) =>
            `<a class="ghost-button" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
        )
        .join("")}
    </div>
  `;
};

const createTags = (tags = []) => {
  if (!tags.length) return "";
  return `
    <div class="card__meta">
      ${tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
    </div>
  `;
};

const renderCards = (targetId, items, wideEveryThird = false) => {
  const target = document.getElementById(targetId);
  target.innerHTML = items
    .map((item, index) => {
      const wideClass = wideEveryThird && index % 3 === 0 ? " card--wide" : "";
      const toneClass = index % 2 === 0 ? " card--soft-sea" : " card--soft-sand";
      return `
        <article class="card${wideClass}${toneClass}">
          <h3>${item.title}</h3>
          ${textToParagraphs(item.text)}
          ${item.list ? `<ul>${item.list.map((entry) => `<li>${entry}</li>`).join("")}</ul>` : ""}
          ${createTags(item.tags)}
          <div class="card__links">${createLinks(item.links)}</div>
        </article>
      `;
    })
    .join("");
};

const renderFeaturePanel = (targetId, title, body, list, tags = [], links = []) => {
  const target = document.getElementById(targetId);
  target.innerHTML = `
    <div>
      <p class="eyebrow">Resumen</p>
      <h3 class="feature-panel__headline">${title}</h3>
      ${textToParagraphs(body)}
      ${list?.length ? `<ul>${list.map((entry) => `<li>${entry}</li>`).join("")}</ul>` : ""}
      ${createTags(tags)}
      <div class="card__links">${createLinks(links)}</div>
    </div>
  `;
};

const setPhoto = (targetId, photo) => {
  document.getElementById(targetId).innerHTML = `<img src="${photo.src}" alt="${photo.alt}" />`;
};

document.getElementById("heroTitle").textContent = data.hero.title;
document.getElementById("heroDescription").textContent = data.hero.description;
document.getElementById("addressText").textContent = data.property.address;
document.getElementById("addressHint").textContent = data.property.addressHint;

document.getElementById("heroActions").innerHTML = data.hero.actions
  .map((action) => {
    const className = action.style === "sea" ? "button button--sea" : "ghost-button";
    return `<a class="${className}" href="${action.href}" ${
      action.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""
    }>${action.label}</a>`;
  })
  .join("");

document.getElementById("heroFacts").innerHTML = data.hero.facts
  .map(
    (fact) => `
      <div class="mini-fact">
        <span>${fact.label}</span>
        <strong>${fact.value}</strong>
      </div>
    `
  )
  .join("");

setPhoto("heroPhotoMain", data.property.photos[0]);
setPhoto("heroPhotoTop", data.property.photos[1]);
setPhoto("heroPhotoBottom", data.property.photos[2]);

document.getElementById("quickNav").innerHTML = [
  ["checkin", "Check-in"],
  ["checkout", "Check-out"],
  ["house", "Casa"],
  ["rules", "Normas"],
  ["maps", "Mapa"],
  ["food", "Comer y hacer"],
  ["family", "Niños"],
  ["contacts", "Ayuda"],
]
  .map(([href, label]) => `<a href="#${href}">${label}</a>`)
  .join("");

renderFeaturePanel(
  "checkInPanel",
  "Llegada sin estrés",
  `Hora orientativa: ${data.property.checkIn.time}\nConfirma con el anfitrión el método exacto de acceso antes del viaje.`,
  data.property.checkIn.details,
  ["Llegada", "Acceso"],
  [
    {
      label: "Abrir ubicación",
      href: "https://www.google.com/maps/search/?api=1&query=Calle+Dalia+31%2C+Pilar+de+la+Horadada",
    },
  ]
);

renderCards("checkInCards", [
  {
    title: "Antes de salir hacia la villa",
    text:
      "Ten a mano el teléfono del anfitrión, revisa el punto exacto de llegada y confirma si necesitas código, llave o asistencia.",
    tags: ["Preparación"],
  },
  {
    title: "Si llegas tarde",
    text:
      "Si prevés llegar más tarde de lo acordado, avisa cuanto antes. Esto evita incidencias con llaves, limpieza o entrega de acceso.",
    tags: ["Importante"],
  },
  {
    title: "Reconocer la casa",
    text:
      "Usa el bloque de mapas para ver la posición exacta, la calle y el entorno inmediato antes de la llegada.",
    tags: ["Mapa", "Street View"],
    links: [
      {
        label: "Ir al mapa",
        href: "#maps",
      },
    ],
  },
]);

renderFeaturePanel(
  "checkOutPanel",
  "Salida sencilla",
  `Hora orientativa: ${data.property.checkOut.time}\nLa idea es dejar la casa preparada para el siguiente huésped sin prisas de última hora.`,
  data.property.checkOut.details,
  ["Salida", "Checklist"]
);

renderCards("checkOutCards", [
  {
    title: "Cocina y basura",
    text:
      "Deja la cocina recogida, saca la basura si es posible y evita dejar restos de carbón o comida en exterior.",
    tags: ["Cierre"],
  },
  {
    title: "Climatización y seguridad",
    text:
      "Antes de irte, revisa aire acondicionado, luces, puertas, ventanas, toldos y cualquier elemento exterior sensible al viento.",
    tags: ["Seguridad"],
  },
  {
    title: "Llaves y mandos",
    text:
      "Devuelve llaves, mandos o códigos exactamente como te indique el anfitrión para evitar recargos o incidencias.",
    tags: ["Entrega"],
  },
]);

renderCards("houseCards", [
  {
    title: "Wi-Fi",
    text: `Red: ${data.property.wifi.network}\nContraseña: ${data.property.wifi.password}`,
    tags: ["Internet"],
  },
  {
    title: "Uso del jacuzzi",
    text: "Instrucciones generales de seguridad. Ajustar al equipo real de la vivienda si fuese necesario.",
    list: data.property.jacuzzi,
    tags: ["Jacuzzi"],
  },
  {
    title: "Uso de la piscina",
    text: "Consejos básicos para un uso seguro y sin incidencias.",
    list: data.property.pool,
    tags: ["Piscina"],
  },
  {
    title: "Barbacoa de carbón",
    text: "Recomendaciones para usarla de forma segura y limpia.",
    list: data.property.bbq,
    tags: ["Exterior", "Carbón"],
  },
  {
    title: "Aviso importante",
    text: data.notes.completion,
    tags: ["Revisar antes de publicar"],
  },
], true);

renderFeaturePanel(
  "rulesPanel",
  "Normas de la casa",
  data.property.houseRules.intro,
  [],
  ["Convivencia", "Importante"]
);

document.getElementById("rulesCards").innerHTML = data.property.houseRules.sections
  .map(
    (section) => `
      <article class="rule-card">
        <h3>${section.title}</h3>
        ${section.text ? textToParagraphs(section.text) : ""}
        ${section.list?.length ? `<ul>${section.list.map((entry) => `<li>${entry}</li>`).join("")}</ul>` : ""}
      </article>
    `
  )
  .join("");

renderCards("foodCards", [...data.restaurants, ...data.activities], true);
renderCards("familyCards", [
  {
    title: "Playa apta para familias",
    text:
      "Las Higuericas destaca por su acceso cómodo, zona infantil y paseo de madera, útil si viajas con niños pequeños.",
    tags: ["Playa", "Niños"],
    links: [
      {
        label: "Ver información oficial",
        href: "https://www.visitpilardelahoradada.com/es/disfruta_pilar_horadada/playas_calas/playa/2-playa-las-higuericas",
      },
    ],
  },
  {
    title: "Ideas sencillas para días tranquilos",
    text:
      "Paseo marítimo al atardecer, juegos de arena, helado en la zona del puerto y rutas cortas en bici o patinete.",
    tags: ["Paseo", "Familia"],
  },
  {
    title: "Más planes infantiles",
    text:
      "La oficina de turismo recopila propuestas para familias durante todo el año. Es una buena referencia si el tiempo cambia o quieres alternar playa y paseo.",
    tags: ["Turismo", "Todo el año"],
    links: [
      {
        label: "Ver guía infantil",
        href: "https://www.visitpilardelahoradada.com/es/que_ver_hacer/ninyos",
      },
    ],
  },
]);
renderCards("contactCards", data.contacts, true);

document.getElementById("mapsEmbed").src = data.maps.embed;
document.getElementById("locationSummary").innerHTML = `
  <h3>${data.maps.summary.title}</h3>
  ${textToParagraphs(data.maps.summary.text)}
  ${createTags(data.maps.summary.tags)}
  <div class="card__links">${createLinks(data.maps.summary.links)}</div>
`;

document.getElementById("streetViewCard").innerHTML = `
  <div class="streetview-preview">
    <strong>${data.maps.streetView.title}</strong>
    <span>Acceso visual a la calle y a la fachada.</span>
  </div>
  ${textToParagraphs(data.maps.streetView.text)}
  <div class="card__links">${createLinks(data.maps.streetView.links)}</div>
`;

renderCards("mapsCards", [...data.location, ...data.maps.essentials, ...data.maps.lists], true);
