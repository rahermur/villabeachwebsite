const STORAGE_KEY = "villa-guide-language";

const { shared, translations, localeOptions } = window.siteData;
const pageShell = document.getElementById("pageShell");
const accessGate = document.getElementById("accessGate");
const accessForm = document.getElementById("accessForm");
const accessInput = document.getElementById("accessCode");
const accessToggle = document.getElementById("accessToggle");
const accessError = document.getElementById("gateError");
const logoutButton = document.getElementById("logoutButton");
const languageTrigger = document.getElementById("languageTrigger");
const detailSheet = document.getElementById("detailSheet");
const detailSheetClose = document.getElementById("detailSheetClose");
const generatedPlacesData = window.generatedPlacesData;

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

const showGate = () => {
  accessGate.hidden = false;
  requestAnimationFrame(() => accessGate.classList.add("is-visible"));
};

const hideGate = () => {
  accessGate.classList.remove("is-visible");
  window.setTimeout(() => {
    if (!accessGate.classList.contains("is-visible")) {
      accessGate.hidden = true;
    }
  }, 180);
};

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
          const className = link.icon
            ? `action-icon-button${link.icon === "whatsapp" ? " action-icon-button--whatsapp" : ""}`
            : link.style === "sea"
              ? "button button--sea"
              : "ghost-button";
          const iconMarkup =
            link.icon === "phone"
              ? `<span aria-hidden="true">☎</span>`
              : link.icon === "whatsapp"
                ? `<span class="action-icon-button__whatsapp" aria-hidden="true">
                    <svg viewBox="0 0 32 32" role="presentation" focusable="false">
                      <path fill="currentColor" d="M16 3.2c-7.07 0-12.8 5.63-12.8 12.57 0 2.2.59 4.35 1.7 6.23L3.2 28.8l7-1.83a12.96 12.96 0 0 0 5.8 1.38c7.07 0 12.8-5.63 12.8-12.57S23.07 3.2 16 3.2Z"/>
                      <path fill="#ffffff" d="M10.67 9.03c-.36 0-.73.17-.96.44-.41.47-1.55 1.52-1.55 3.73 0 2.2 1.58 4.31 1.8 4.6.22.3 3.03 4.84 7.4 6.59 1.05.42 1.9.68 2.55.86 1.07.3 2.04.26 2.8.16.86-.12 2.63-1.07 3-2.1.37-1.04.37-1.93.26-2.1-.11-.18-.41-.3-.85-.51-.45-.2-2.64-1.3-3.05-1.46-.4-.15-.7-.23-.99.24-.3.47-1.15 1.46-1.42 1.76-.26.29-.52.33-.97.11-.44-.22-1.88-.68-3.57-2.16-1.32-1.16-2.2-2.58-2.46-3.02-.26-.43-.03-.67.2-.9.22-.22.45-.52.67-.78.22-.26.3-.44.44-.74.15-.3.07-.56-.04-.78-.11-.22-.99-2.43-1.35-3.33-.29-.68-.58-.7-.85-.71h-.71Z"/>
                    </svg>
                  </span>`
                : "";
          const labelMarkup = link.icon
            ? `<span class="sr-only">${link.label}</span>`
            : link.label;
          return `<a class="${className}" href="${href}" ${
            external ? 'target="_blank" rel="noreferrer"' : ""
          } aria-label="${escapeHtml(link.label)}">${iconMarkup}${labelMarkup}</a>`;
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

const escapeHtml = (value = "") =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const createLogoStrip = (logos = []) => {
  if (!logos.length) return "";
  return `
    <div class="logo-strip">
      ${logos
        .map(
          (logo) =>
            `<span class="logo-pill logo-pill--${logo.id}">${escapeHtml(logo.label)}</span>`
        )
        .join("")}
    </div>
  `;
};

const renderCards = (targetId, items, options = {}) => {
  const { wideEveryThird = false, showTags = false } = options;
  const target = document.getElementById(targetId);
  target.innerHTML = items
    .map((item, index) => {
      const forceWide = item.layout === "half";
      const wideClass = forceWide || (wideEveryThird && index % 3 === 0) ? " card--wide" : "";
      const toneClass = index % 2 === 0 ? " card--soft-sea" : " card--soft-sand";
      const list = item.listKey ? currentCopy.property[item.listKey] : item.list || [];
      const copyValue = item.copyValueKey
        ? resolveTemplate(String(getByPath(shared.property, item.copyValueKey)))
        : item.copyValue;
      const copyButton = copyValue
        ? `<button class="mini-fact__copy card__copy-button" type="button" data-copy-value="${copyValue}">${getCopyLabels().copy}</button>`
        : "";
      const detailButton = item.sheetKey
        ? `<button class="ghost-button card__detail-button" type="button" data-sheet-key="${item.sheetKey}">${item.sheetLabel || currentCopy.ui.viewMoreLabel}</button>`
        : "";

      return `
        <article class="card${wideClass}${toneClass}">
          <h3>${item.title}</h3>
          ${textToParagraphs(item.text)}
          ${list.length ? `<ul>${list.map((entry) => `<li>${entry}</li>`).join("")}</ul>` : ""}
          ${createLogoStrip(item.logos)}
          ${showTags ? createTags(item.tags) : ""}
          <div class="card__links">${copyButton}${detailButton}${createLinks(item.links)}</div>
        </article>
      `;
    })
    .join("");
  attachCopyButtons();
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
    .map((item) => {
      const list = item.listKey ? currentCopy.property[item.listKey] : item.list || [];
      return `
        <details class="house-accordion"${item.id ? ` id="house-${item.id}"` : ""}>
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
            ${createLinks(item.links)}
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

  const emergencyAccordions = document.getElementById("emergencyAccordions");
  emergencyAccordions.innerHTML = currentCopy.content.emergencyAccordions
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
  emergencyAccordions.hidden = !currentCopy.content.emergencyAccordions.length;
};

const renderFoodSection = () => {
  const foodData = generatedPlacesData?.[currentLocale]
    ? generatedPlacesData[currentLocale]
    : {
        foodIntro: currentCopy.content.foodIntro,
        foodFeatured: currentCopy.content.foodFeatured,
        foodCategories: currentCopy.content.foodCategories
      };
  renderFeaturePanel(
    "foodIntro",
    foodData.foodIntro.title,
    foodData.foodIntro.body,
    [],
    foodData.foodIntro.tags,
    foodData.foodIntro.links
  );

  document.getElementById("foodGroups").innerHTML = foodData.foodCategories
    .map((item) => {
      const category = item;
      const subgroups = category.subgroups || [{ title: "", items: category.items || [] }];
      return `
        <details class="food-group">
          <summary class="food-group__summary">
            <div>
              <h3>${category.emoji || "📍"} ${category.title}</h3>
              <p>${category.description}</p>
            </div>
            <span class="house-accordion__icon" aria-hidden="true">+</span>
          </summary>
          <div class="food-group__content">
            ${subgroups
              .map((subgroup) => {
                const subgroupItems = [...subgroup.items].sort((a, b) => {
                  const featuredDelta = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
                  if (featuredDelta !== 0) return featuredDelta;

                  const aDistance = Number.isFinite(a.distanceKm) ? a.distanceKm : Number.POSITIVE_INFINITY;
                  const bDistance = Number.isFinite(b.distanceKm) ? b.distanceKm : Number.POSITIVE_INFINITY;
                  if (aDistance !== bDistance) return aDistance - bDistance;

                  const closedDelta = Number(Boolean(a.temporarilyClosed)) - Number(Boolean(b.temporarilyClosed));
                  if (closedDelta !== 0) return closedDelta;

                  return a.title.localeCompare(b.title);
                });

                return `
                  <section class="food-subgroup">
                    ${subgroup.title ? `<h4 class="food-subgroup__title">${subgroup.title}</h4>` : ""}
                    <ul class="food-bullet-list">
                    ${subgroupItems
              .map((entry) => {
                const addressDetail = entry.details?.find((detail) =>
                  detail.label.includes("Dirección") || detail.label.includes("Address")
                );
                        const noteDetail = entry.details?.find((detail) =>
                          detail.label.includes("Nota") || detail.label.includes("Note")
                        );
                const mapsHref = entry.links?.[0]?.href || "#";
                const showTags = category.id !== "food-restaurants" && entry.tags?.length;
                const featuredLabel = currentCopy.ui.featuredLabel || (currentLocale === "es" ? "Destacado" : "Top pick");

                return `
                  <li class="food-bullet-item">
                    <div class="food-bullet-header">
                      <strong>${entry.title}</strong>
                      ${entry.distanceLabel ? `<span class="food-bullet-distance">${escapeHtml(entry.distanceLabel)}</span>` : ""}
                      ${entry.featured ? `<span class="food-bullet-featured">${featuredLabel}</span>` : ""}
                      ${entry.temporarilyClosed ? `<span class="food-bullet-status">${escapeHtml(entry.statusLabel)}</span>` : ""}
                    </div>
                            ${showTags ? createTags(entry.tags) : ""}
                            ${noteDetail ? `<p class="food-bullet-note">${noteDetail.value}</p>` : ""}
                            ${
                              addressDetail
                                ? `<a class="food-bullet-link" href="${mapsHref}" target="_blank" rel="noreferrer">📍 ${addressDetail.value}</a>`
                                : ""
                            }
                          </li>
                        `;
                      })
                      .join("")}
                    </ul>
                  </section>
                `;
              })
              .join("")}
          </div>
        </details>
      `;
    })
    .join("");
};

const setPhoto = (targetId, photo) => {
  const locale = currentLocale in translations ? currentLocale : "en";
  document.getElementById(targetId).innerHTML = `<img src="${photo.src}" alt="${photo.alt[locale]}" />`;
};

const detectLocale = () => {
  const browserLocale = (navigator.language || "en").toLowerCase();
  return Object.keys(translations).find((locale) => locale !== "auto" && browserLocale.startsWith(locale)) || "en";
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

let isLanguageMenuOpen = false;

const renderLanguageControls = () => {
  const controls = document.getElementById("languageControls");
  const optionKeys = Object.keys(localeOptions).filter((key) => key !== "auto");
  controls.hidden = !isLanguageMenuOpen;
  languageTrigger?.setAttribute("aria-expanded", String(isLanguageMenuOpen));
  if (languageTrigger) {
    const activeKey = languagePreference === "auto" ? currentLocale : languagePreference;
    const activeOption = localeOptions[activeKey];
    languageTrigger.innerHTML = `
      <span class="language-switcher__trigger-copy">
        <span class="language-switcher__label" id="languageLabel">${currentCopy.ui.languageLabel}</span>
        <span class="language-switcher__value" aria-hidden="true">${activeOption.flag}</span>
      </span>
    `;
  }
  controls.innerHTML = optionKeys
    .map((optionKey) => {
      const option = localeOptions[optionKey];
      const label = `${option.flag} ${option.label}`;
      const isActive = languagePreference === optionKey;
      return `<button class="language-button${isActive ? " is-active" : ""}" data-language="${optionKey}" type="button">${label}</button>`;
    })
    .join("");

  controls.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      languagePreference = button.dataset.language;
      localStorage.setItem(STORAGE_KEY, languagePreference);
      isLanguageMenuOpen = false;
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
  pageShell.hidden = false;
  hideGate();
  document.body.classList.remove("is-locked");
};

const lockGuide = () => {
  sessionStorage.removeItem(shared.auth.sessionKey);
  showGate();
  pageShell.hidden = true;
  detailSheet.hidden = true;
  accessInput.value = "";
  accessInput.type = "password";
  accessError.hidden = true;
  if (accessToggle) {
    accessToggle.classList.remove("is-visible");
    accessToggle.setAttribute("aria-label", currentCopy.ui.gate.showCode);
  }
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

const getCopyLabels = () =>
  currentLocale === "es"
    ? { copy: "Copiar", copied: "Copiada" }
    : { copy: "Copy", copied: "Copied" };

const attachCopyButtons = () => {
  const labels = getCopyLabels();

  document.querySelectorAll("[data-copy-value]").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.dataset.copyValue;
      if (!value) return;

      try {
        await navigator.clipboard.writeText(value);
        button.textContent = labels.copied;
        button.classList.add("is-copied");
        window.setTimeout(() => {
          button.textContent = labels.copy;
          button.classList.remove("is-copied");
        }, 1400);
      } catch {
        button.textContent = labels.copied;
        window.setTimeout(() => {
          button.textContent = labels.copy;
        }, 1400);
      }
    });
  });
};

const attachDetailButtons = () => {
  document.querySelectorAll("[data-sheet-key]").forEach((button) => {
    button.addEventListener("click", () => openDetailSheet(button.dataset.sheetKey));
  });
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
      const isWifiPassword = fact.valueKey === "wifi.password";
      const labels = getCopyLabels();
      return `
        <div class="mini-fact">
          <span>${fact.label}</span>
          <div class="mini-fact__value-row">
            <strong>${value}</strong>
            ${
              isWifiPassword
                ? `<button class="mini-fact__copy" type="button" data-copy-value="${value}">${labels.copy}</button>`
                : ""
            }
          </div>
        </div>
      `;
    })
    .join("");
  attachCopyButtons();

  setPhoto("heroPhotoMain", shared.property.photos[0]);
  setPhoto("heroPhotoTop", shared.property.photos[1]);
  setPhoto("heroPhotoBottom", shared.property.photos[2]);
  document.getElementById("accessGateMedia").innerHTML = `<img src="${shared.property.photos[0].src}" alt="" />`;

  document.getElementById("quickNav").innerHTML = [
    ["checkin", currentCopy.ui.nav.checkin],
    ["rules", currentCopy.ui.nav.rules],
    ["house", currentCopy.ui.nav.house],
    ["food", currentCopy.ui.nav.food],
    ["hosts", currentCopy.ui.nav.hosts],
    ["emergencies", currentCopy.ui.nav.emergencies],
  ]
    .map(([href, label]) => `<a href="#${href}">${label}</a>`)
    .join("");

  renderCards("checkInCards", currentCopy.content.checkInCards);

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
          ${createLinks(section.links)}
          ${
            section.sheetKey
              ? `<div class="card__links"><button class="ghost-button card__detail-button" type="button" data-sheet-key="${section.sheetKey}">${
                  section.sheetLabel || currentCopy.ui.viewMoreLabel
                }</button></div>`
              : ""
          }
        </article>
      `
    )
    .join("");
  attachDetailButtons();

  renderFoodSection();
  renderCards("hostCards", currentCopy.content.hostContacts, { wideEveryThird: true, showTags: true });
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

accessToggle?.addEventListener("click", () => {
  const shouldShow = accessInput.type === "password";
  accessInput.type = shouldShow ? "text" : "password";
  accessToggle.classList.toggle("is-visible", shouldShow);
  accessToggle.setAttribute("aria-label", shouldShow ? currentCopy.ui.gate.hideCode : currentCopy.ui.gate.showCode);
});

logoutButton.addEventListener("click", () => {
  lockGuide();
});

languageTrigger?.addEventListener("click", (event) => {
  event.stopPropagation();
  isLanguageMenuOpen = !isLanguageMenuOpen;
  renderLanguageControls();
});

document.addEventListener("click", (event) => {
  if (!isLanguageMenuOpen) return;
  if (languageTrigger?.contains(event.target) || document.getElementById("languageControls")?.contains(event.target)) return;
  isLanguageMenuOpen = false;
  renderLanguageControls();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isLanguageMenuOpen) {
    isLanguageMenuOpen = false;
    renderLanguageControls();
  }
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
