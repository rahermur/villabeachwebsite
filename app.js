const STORAGE_KEY = "villa-guide-language";

const { shared, translations, localeOptions } = window.siteData;
const pageShell = document.getElementById("pageShell");
const accessGate = document.getElementById("accessGate");
const accessForm = document.getElementById("accessForm");
const accessInput = document.getElementById("accessCode");
const accessError = document.getElementById("gateError");
const logoutButton = document.getElementById("logoutButton");
const detailSheet = document.getElementById("detailSheet");
const detailSheetClose = document.getElementById("detailSheetClose");

const getByPath = (obj, path) =>
  path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);

const resolveHref = (link) => {
  if (link.href) return link.href;
  if (link.hrefKey) return shared.links[link.hrefKey];
  return "#";
};

const resolveTemplate = (text = "") =>
  text
    .replaceAll("[COMPLETAR_HORA_CHECKIN]", shared.property.checkInTime)
    .replaceAll("[COMPLETAR_HORA_CHECKOUT]", shared.property.checkOutTime)
    .replaceAll("[COMPLETAR_NOMBRE_WIFI]", shared.property.wifi.network)
    .replaceAll("[COMPLETAR_PASSWORD_WIFI]", shared.property.wifi.password);

const textToParagraphs = (text = "") =>
  resolveTemplate(text)
    .split("\n")
    .map((line) => `<p>${line}</p>`)
    .join("");

const createLinks = (links = []) => {
  if (!links.length) return "";

  return `
    <div class="action-list">
      ${links
        .map((link) => {
          const href = resolveHref(link);
          const external = href.startsWith("http");
          return `<a class="ghost-button" href="${href}" ${
            external ? 'target="_blank" rel="noreferrer"' : ""
          }>${link.label}</a>`;
        })
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
      const forceWide = item.layout === "half";
      const wideClass = forceWide || (wideEveryThird && index % 3 === 0) ? " card--wide" : "";
      const toneClass = index % 2 === 0 ? " card--soft-sea" : " card--soft-sand";
      const list = item.listKey ? currentCopy.property[item.listKey] : item.list || [];
      const detailButton = item.sheetKey
        ? `<button class="ghost-button card__detail-button" type="button" data-sheet-key="${item.sheetKey}">${item.sheetLabel || currentCopy.ui.viewMoreLabel}</button>`
        : "";

      return `
        <article class="card${wideClass}${toneClass}">
          <h3>${item.title}</h3>
          ${textToParagraphs(item.text)}
          ${list.length ? `<ul>${list.map((entry) => `<li>${entry}</li>`).join("")}</ul>` : ""}
          ${createTags(item.tags)}
          <div class="card__links">${detailButton}${createLinks(item.links)}</div>
        </article>
      `;
    })
    .join("");
};

const renderFeaturePanel = (targetId, title, body, list, tags = [], links = []) => {
  const target = document.getElementById(targetId);
  target.innerHTML = `
    <div>
      <p class="eyebrow">${currentCopy.ui.summaryEyebrow}</p>
      <h3 class="feature-panel__headline">${title}</h3>
      ${textToParagraphs(body)}
      ${list?.length ? `<ul>${list.map((entry) => `<li>${entry}</li>`).join("")}</ul>` : ""}
      ${createTags(tags)}
      <div class="card__links">${createLinks(links)}</div>
    </div>
  `;
};

const renderHouseSection = () => {
  renderCards("houseCards", currentCopy.content.houseBasics);

  document.getElementById("houseAccordions").innerHTML = currentCopy.content.houseAccordions
    .map((item, index) => {
      const list = item.listKey ? currentCopy.property[item.listKey] : item.list || [];
      return `
        <details class="house-accordion"${index === 0 ? " open" : ""}>
          <summary class="house-accordion__summary">
            <div>
              <p class="eyebrow">${item.eyebrow || currentCopy.sections.house.eyebrow}</p>
              <h3>${item.title}</h3>
              <p>${item.summary}</p>
            </div>
            <span class="house-accordion__icon" aria-hidden="true">+</span>
          </summary>
          <div class="house-accordion__content">
            ${textToParagraphs(item.text)}
            ${list.length ? `<ul>${list.map((entry) => `<li>${entry}</li>`).join("")}</ul>` : ""}
          </div>
        </details>
      `;
    })
    .join("");
};

const renderEmergencySection = () => {
  document.getElementById("emergencySummary").innerHTML = currentCopy.content.emergencySummary
    .map(
      (item) => `
        <article class="emergency-callout">
          <div class="emergency-callout__copy">
            <h3>${item.title}</h3>
            ${textToParagraphs(item.text)}
          </div>
          <div class="card__links">${createLinks(item.links)}</div>
        </article>
      `
    )
    .join("");

  document.getElementById("emergencyAccordions").innerHTML = currentCopy.content.emergencyAccordions
    .map(
      (item) => `
        <details class="emergency-accordion">
          <summary class="emergency-accordion__summary">
            <div>
              <h3>${item.title}</h3>
              <p>${item.summary}</p>
            </div>
            <span class="house-accordion__icon" aria-hidden="true">+</span>
          </summary>
          <div class="emergency-accordion__content">
            ${item.text ? textToParagraphs(item.text) : ""}
            ${item.list?.length ? `<ul>${item.list.map((entry) => `<li>${entry}</li>`).join("")}</ul>` : ""}
            <div class="card__links">${createLinks(item.links)}</div>
          </div>
        </details>
      `
    )
    .join("");
};

const setPhoto = (targetId, photo) => {
  const locale = currentLocale in translations ? currentLocale : "en";
  document.getElementById(targetId).innerHTML = `<img src="${photo.src}" alt="${photo.alt[locale]}" />`;
};

const detectLocale = () => {
  const browserLocale = (navigator.language || "en").toLowerCase();
  return browserLocale.startsWith("es") ? "es" : "en";
};

const getSavedPreference = () => localStorage.getItem(STORAGE_KEY) || "auto";
const getSessionAccess = () => sessionStorage.getItem(shared.auth.sessionKey) === "granted";
const getEffectiveLocale = (preference) => (preference === "auto" ? detectLocale() : preference);

const formatSelectedLanguage = (preference) => {
  if (preference === "auto") {
    return currentCopy.ui.activeLanguageAuto.replace("%s", translations[currentLocale].ui.activeLanguage);
  }
  return translations[preference].ui.activeLanguage;
};

const renderLanguageControls = () => {
  const controls = document.getElementById("languageControls");
  controls.innerHTML = ["auto", "es", "en"]
    .map((optionKey) => {
      const option = localeOptions[optionKey];
      const label =
        optionKey === "auto"
          ? `${option.flag} ${currentCopy.ui.autoLabel}`
          : `${option.flag} ${option.label}`;
      const isActive = languagePreference === optionKey;
      return `<button class="language-button${isActive ? " is-active" : ""}" data-language="${optionKey}" type="button">${label}</button>`;
    })
    .join("");

  controls.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      languagePreference = button.dataset.language;
      localStorage.setItem(STORAGE_KEY, languagePreference);
      render();
    });
  });
};

const applySectionLabels = () => {
  const map = {
    heroEyebrow: currentCopy.ui.heroEyebrow,
    addressLabel: currentCopy.ui.sectionLabels.address,
    checkinEyebrow: currentCopy.sections.checkin.eyebrow,
    checkinTitle: currentCopy.sections.checkin.title,
    houseEyebrow: currentCopy.sections.house.eyebrow,
    houseTitle: currentCopy.sections.house.title,
    rulesEyebrow: currentCopy.sections.rules.eyebrow,
    rulesTitle: currentCopy.sections.rules.title,
    foodEyebrow: currentCopy.sections.food.eyebrow,
    foodTitle: currentCopy.sections.food.title,
    hostsEyebrow: currentCopy.sections.hosts.eyebrow,
    hostsTitle: currentCopy.sections.hosts.title,
    emergenciesEyebrow: currentCopy.sections.emergencies.eyebrow,
    emergenciesTitle: currentCopy.sections.emergencies.title,
    languageLabel: currentCopy.ui.languageLabel,
    logoutButton: currentCopy.ui.logoutLabel,
    gateEyebrow: currentCopy.ui.gate.eyebrow,
    gateTitle: currentCopy.ui.gate.title,
    gateDescription: currentCopy.ui.gate.description,
    gateInputLabel: currentCopy.ui.gate.inputLabel,
    gateSubmit: currentCopy.ui.gate.submit,
    gateHint: currentCopy.ui.gate.hint,
    gateError: currentCopy.ui.gate.error,
  };

  Object.entries(map).forEach(([id, value]) => {
    document.getElementById(id).textContent = value;
  });
};

const sha256Hex = async (value) => {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
};

const unlockGuide = () => {
  sessionStorage.setItem(shared.auth.sessionKey, "granted");
  accessGate.hidden = true;
  pageShell.hidden = false;
  document.body.classList.remove("is-locked");
};

const lockGuide = () => {
  sessionStorage.removeItem(shared.auth.sessionKey);
  accessGate.hidden = false;
  pageShell.hidden = true;
  detailSheet.hidden = true;
  accessInput.value = "";
  accessError.hidden = true;
  document.body.classList.add("is-locked");
};

const openDetailSheet = (sheetKey) => {
  const sheet = currentCopy.content.infoSheets?.[sheetKey];
  if (!sheet) return;

  document.getElementById("detailSheetEyebrow").textContent = sheet.eyebrow || currentCopy.sections.checkin.eyebrow;
  document.getElementById("detailSheetTitle").textContent = sheet.title;
  document.getElementById("detailSheetContent").innerHTML = `
    ${textToParagraphs(sheet.text)}
    ${sheet.list?.length ? `<ul>${sheet.list.map((entry) => `<li>${entry}</li>`).join("")}</ul>` : ""}
    ${createLinks(sheet.links)}
  `;
  detailSheet.hidden = false;
  document.body.classList.add("is-locked");
};

const closeDetailSheet = () => {
  detailSheet.hidden = true;
  if (getSessionAccess()) {
    document.body.classList.remove("is-locked");
  }
};

const render = () => {
  currentLocale = getEffectiveLocale(languagePreference);
  currentCopy = translations[currentLocale];

  document.documentElement.lang = currentCopy.meta.htmlLang;
  document.title = currentCopy.meta.title;
  document.querySelector('meta[name="description"]').setAttribute("content", currentCopy.meta.description);

  applySectionLabels();
  renderLanguageControls();

  document.getElementById("heroTitle").textContent = currentCopy.hero.title;
  document.getElementById("heroDescription").textContent = currentCopy.hero.description;
  document.getElementById("addressText").textContent = shared.address;
  document.getElementById("addressHint").textContent = currentCopy.hero.addressHint;

  document.getElementById("heroActions").innerHTML = currentCopy.hero.actions
    .map((action) => {
      const className = action.style === "sea" ? "button button--sea" : "ghost-button";
      const href = resolveHref(action);
      return `<a class="${className}" href="${href}" ${
        href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""
      }>${action.label}</a>`;
    })
    .join("");

  document.getElementById("heroFacts").innerHTML = currentCopy.hero.facts
    .map((fact) => {
      const value = fact.valueKey ? resolveTemplate(String(getByPath(shared.property, fact.valueKey))) : fact.value;
      return `
        <div class="mini-fact">
          <span>${fact.label}</span>
          <strong>${value}</strong>
        </div>
      `;
    })
    .join("");

  setPhoto("heroPhotoMain", shared.property.photos[0]);
  setPhoto("heroPhotoTop", shared.property.photos[1]);
  setPhoto("heroPhotoBottom", shared.property.photos[2]);

  document.getElementById("quickNav").innerHTML = [
    ["checkin", currentCopy.ui.nav.checkin],
    ["house", currentCopy.ui.nav.house],
    ["rules", currentCopy.ui.nav.rules],
    ["hosts", currentCopy.ui.nav.hosts],
    ["food", currentCopy.ui.nav.food],
    ["emergencies", currentCopy.ui.nav.emergencies],
  ]
    .map(([href, label]) => `<a href="#${href}">${label}</a>`)
    .join("");

  renderCards("checkInCards", currentCopy.content.checkInCards);
  document.querySelectorAll("[data-sheet-key]").forEach((button) => {
    button.addEventListener("click", () => openDetailSheet(button.dataset.sheetKey));
  });

  renderHouseSection();

  renderFeaturePanel(
    "rulesPanel",
    currentCopy.sections.rules.title,
    currentCopy.property.houseRules.intro,
    [],
    []
  );

  document.getElementById("rulesCards").innerHTML = currentCopy.property.houseRules.sections
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

  renderCards("foodCards", [...currentCopy.content.restaurants, ...currentCopy.content.activities], true);
  renderCards("hostCards", currentCopy.content.hostContacts, true);
  renderEmergencySection();
};

let languagePreference = getSavedPreference();
let currentLocale = getEffectiveLocale(languagePreference);
let currentCopy = translations[currentLocale];

accessForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const candidate = accessInput.value.trim();
  const candidateHash = await sha256Hex(candidate);

  if (candidateHash === shared.auth.codeHash) {
    unlockGuide();
    return;
  }

  accessError.hidden = false;
  accessInput.select();
});

logoutButton.addEventListener("click", () => {
  lockGuide();
});

detailSheetClose.addEventListener("click", closeDetailSheet);
detailSheet.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-close-detail")) {
    closeDetailSheet();
  }
});

render();

if (getSessionAccess()) {
  unlockGuide();
} else {
  lockGuide();
}
