(function extendSiteData() {
  const siteData = window.siteData;
  const generatedPlacesData = window.generatedPlacesData;

  if (!siteData) return;

  const clone = (value) => JSON.parse(JSON.stringify(value));

  const mergeLocale = (base, patch) => {
    if (patch === undefined) return clone(base);
    if (Array.isArray(base)) {
      return base.map((item, index) => mergeLocale(item, patch?.[index]));
    }
    if (base && typeof base === "object") {
      const result = { ...base };
      Object.keys(patch || {}).forEach((key) => {
        result[key] = key in base ? mergeLocale(base[key], patch[key]) : clone(patch[key]);
      });
      return result;
    }
    return patch;
  };

  Object.assign(siteData.localeOptions, {
    fr: { code: "fr", flag: "🇫🇷", label: "Français" },
    de: { code: "de", flag: "🇩🇪", label: "Deutsch" },
    nl: { code: "nl", flag: "🇳🇱", label: "Nederlands" },
    sv: { code: "sv", flag: "🇸🇪", label: "Svenska" },
    pl: { code: "pl", flag: "🇵🇱", label: "Polski" },
    ru: { code: "ru", flag: "🇷🇺", label: "Русский" },
    da: { code: "da", flag: "🇩🇰", label: "Dansk" },
    no: { code: "no", flag: "🇳🇴", label: "Norsk" }
  });

  const localePatches = {
    fr: {
      property: {
        jacuzzi: [
          "Se doucher avant de l'utiliser et remettre la couverture lorsqu'il n'est pas utilisé.",
          "Ne pas introduire de sable ni d'objets en verre dans le jacuzzi.",
          "Ne pas manipuler le panneau technique, les filtres ou les réglages du traitement de l'eau.",
          "Ne pas dépasser 38°C et éviter les longues sessions lorsque l'eau est très chaude.",
          "Si vous êtes enceinte ou si vous souffrez d'hypertension, d'insuffisance respiratoire ou d'autres problèmes de santé, consultez votre médecin avant d'utiliser le jacuzzi."
        ]
      },
      meta: {
        title: "Guide de la villa | Higuericas Beach",
        description: "Guide numérique pour les voyageurs d'une villa située Calle Dalia 31, Pilar de la Horadada.",
        htmlLang: "fr"
      },
      ui: {
        languageLabel: "Langue",
        selectedLanguageLabel: "Sélectionné",
        logoutLabel: "Déconnexion",
        activeLanguage: "Français",
        activeLanguageAuto: "Automatique (%s)",
        featuredLabel: "À ne pas manquer",
        nav: { checkin: "Arrivée", house: "Villa", rules: "Règles", food: "Plans", hosts: "Contact", emergencies: "Aide" },
        sectionLabels: { address: "Adresse" },
        gate: {
          title: "Accès privé",
          description: "Saisissez votre code invité pour voir le guide complet de la villa.",
          inputLabel: "Code d'accès",
          showCode: "Afficher le code",
          hideCode: "Masquer le code",
          submit: "Entrer",
          hint: "Si vous ne l'avez pas, demandez-le à l'hôte.",
          error: "Code incorrect. Veuillez réessayer."
        },
        viewMoreLabel: "Voir le détail"
      },
      sections: {
        checkin: { eyebrow: "Arrivée", title: "Arrivée et départ" },
        house: { eyebrow: "Intérieur et extérieur", title: "Tout dans la villa" },
        rules: { eyebrow: "Séjour", title: "Règles de la maison" },
        food: { eyebrow: "Profiter", title: "Recommandations" },
        hosts: { eyebrow: "Hôtes", title: "Contact" },
        emergencies: { eyebrow: "Urgence", title: "Aide rapide" }
      },
      hero: {
        description: "Bienvenue à la villa. Ce guide rassemble l'essentiel pour l'arrivée, le départ, l'utilisation de la maison et les informations pratiques sur la région pour un séjour serein au bord de la mer.",
        actions: [
          { label: "Comment venir", hrefKey: "mapsRoute", style: "sea" },
          { label: "Contacter l'hôte", href: "#hosts" },
          { label: "Favoris dans Maps", hrefKey: "hostList" }
        ],
        facts: [
          { label: "Check-in", valueKey: "checkInTime" },
          { label: "Check-out", valueKey: "checkOutTime" },
          { label: "Wi‑Fi", valueKey: "wifi.network" },
          { label: "Mot de passe Wi‑Fi", valueKey: "wifi.password" }
        ],
        addressHint: "À quelques minutes à pied de Playa de las Higuericas et facilement accessible en voiture."
      },
      content: {
        checkInCards: [
          {
            title: "🛬 Arrivée",
            text: "Coordonnez votre arrivée avec l'hôte à partir de 15h00.\nSi possible, effectuez le check-in en ligne avant le voyage via le lien personnel reçu par e-mail ou message.\nLe plus pratique pour rejoindre la villa est généralement de venir en voiture ou en taxi.\nLors du check-in, les règles de la maison peuvent être rappelées et toutes les questions peuvent être clarifiées."
          },
          {
            title: "🧳 Départ",
            text: "L'heure de départ de référence est fixée à 12h00.\nSi vous avez besoin d'un départ tardif, demandez-le à l'avance.\nIl n'est pas nécessaire de rencontrer l'hôte en personne pour rendre les clés : il suffit de prévenir que vous quittez la villa et de suivre les consignes convenues.",
            list: [
              "🍽️ Laissez la cuisine rangée et sortez les déchets si possible.",
              "💡 Éteignez les lumières et la climatisation, puis fermez portes et fenêtres.",
              "📩 Prévenez l'hôte lorsque vous quittez le logement."
            ]
          }
        ],
        houseBasics: [
          {
            title: "📶 Wi‑Fi",
            text: "Réseau : [COMPLETAR_NOMBRE_WIFI]\nMot de passe : [COMPLETAR_PASSWORD_WIFI]",
            list: ["💡 La connexion est de 1 Gb et devrait être assez stable, sauf si vous êtes très loin du routeur."]
          },
          {
            title: "📺 TV / streaming",
            text: "Vous pouvez ajouter vos propres comptes Netflix, Prime Video, Disney+ ou d'autres plateformes de streaming pendant le séjour.",
            list: ["🔐 Pensez à vous déconnecter de tous vos comptes avant le départ."]
          }
        ],
        houseAccordions: [
          { title: "🏊 Piscine", eyebrow: "Extérieur", summary: "Conseils rapides pour utiliser la piscine en toute sécurité.", text: "Avant de l'utiliser, vérifiez que la zone est dégagée et surveillez toujours les enfants." },
          { title: "♨️ Jacuzzi", eyebrow: "Détente", summary: "Conseils simples pour une utilisation confortable et sûre du jacuzzi.", text: "Le jacuzzi doit être utilisé avec soin et rester fermé lorsqu'il n'est pas utilisé." },
          { title: "🔥 Barbecue", eyebrow: "Repas en extérieur", summary: "Comment l'allumer et le laisser en sécurité après usage.", text: "Utilisez le barbecue calmement, sans accélérants, et laissez toujours les braises complètement éteintes à la fin." }
        ],
        hostContacts: [
          { title: "Hôte principal 1", text: "Nom : Stacey\nTéléphone / WhatsApp : 613869407" },
          { title: "Hôte principal 2", text: "Nom : Sergio\nTéléphone / WhatsApp : 680957414" },
          { title: "Contact de soutien", text: "Nom : Ana\nTéléphone / WhatsApp : 678267650\nÀ utiliser si les hôtes principaux ne répondent pas ou si vous avez besoin d'aide pendant le séjour." }
        ],
        emergencySummary: [{ title: "🚨 112", text: "Numéro d'urgence général, gratuit et disponible 24h/24.\nPolice, ambulance et pompiers." }],
        emergencyAccordions: [
          { title: "🏥 Assistance médicale", summary: "Hôpital et centre de santé les plus proches.", text: "Hôpital universitaire de Torrevieja\nC. Madrid, s/n, 03186 Torrevieja, Alicante.\nHôpital général avec urgences 24h/24.\nÀ environ 15 à 20 minutes en voiture de Playa de las Higuericas.\n\nCentre de santé de Pilar de la Horadada\nCalle Vicente Blasco Ibanez s/n, 03190 Pilar de la Horadada, Alicante.\nSoins primaires et urgences de base en journée.\nÀ quelques minutes de la villa." },
          { title: "💊 Pharmacie et pharmacie de garde", summary: "Pharmacie la plus proche et quoi faire si vous avez besoin d'une pharmacie ouverte 24h/24.", text: "Farmacia Playa Las Higuericas Lda. M del Mar Lorenzo Banon.\nEnviron 450 m à pied depuis la villa.\n\nEn Espagne, les pharmacies ouvertes 24h/24 fonctionnent par rotation, donc la pharmacie disponible peut changer chaque jour.\nUtilisez le lien de la pharmacie de garde ou demandez à l'hôte ou au centre de santé." },
          { title: "🏡 Dans la villa", summary: "Éléments de sécurité essentiels et précautions importantes.", text: "La villa dispose d'équipements de base pour réagir à un incident dans le logement.", list: ["🧯 Extincteur dans une zone visible et accessible.", "🧰 Trousse de premiers secours dans l'armoire de l'entrée.", "👶 Les enfants doivent toujours être surveillés dans les zones extérieures, près de la piscine et du jacuzzi.", "🙏 Une utilisation responsable est essentielle pour éviter les accidents dans une maison de vacances avec piscine et espaces extérieurs."] }
        ]
      }
    },
    de: {
      property: {
        jacuzzi: [
          "Vor der Nutzung duschen und die Abdeckung schließen, wenn der Whirlpool nicht benutzt wird.",
          "Keinen Sand oder Glasgegenstände in den Whirlpool bringen.",
          "Weder das Technikpanel noch Filter oder Wasserchemie-Einstellungen berühren.",
          "38°C nicht überschreiten und längere Sitzungen vermeiden, wenn das Wasser sehr heiß ist.",
          "Wenn du schwanger bist oder unter Bluthochdruck, Atemproblemen oder anderen gesundheitlichen Beschwerden leidest, sprich bitte vor der Nutzung mit deinem Arzt."
        ]
      },
      meta: {
        title: "Villa-Guide | Higuericas Beach",
        description: "Digitale Gäste-Guide für eine Villa in der Calle Dalia 31, Pilar de la Horadada.",
        htmlLang: "de"
      },
      ui: {
        languageLabel: "Sprache",
        selectedLanguageLabel: "Ausgewählt",
        logoutLabel: "Abmelden",
        activeLanguage: "Deutsch",
        activeLanguageAuto: "Automatisch (%s)",
        featuredLabel: "Empfohlen",
        nav: { checkin: "Ankunft", house: "Villa", rules: "Regeln", food: "Tipps", hosts: "Kontakt", emergencies: "Hilfe" },
        sectionLabels: { address: "Adresse" },
        gate: {
          title: "Privater Zugang",
          description: "Gib deinen Gästecode ein, um den vollständigen Villa-Guide zu sehen.",
          inputLabel: "Zugangscode",
          showCode: "Code anzeigen",
          hideCode: "Code ausblenden",
          submit: "Betreten",
          hint: "Falls du ihn nicht hast, frage den Gastgeber.",
          error: "Falscher Code. Bitte versuche es erneut."
        },
        viewMoreLabel: "Details anzeigen"
      },
      sections: {
        checkin: { eyebrow: "Ankunft", title: "Ankunft & Abreise" },
        house: { eyebrow: "Innen & außen", title: "Alles in der Villa" },
        rules: { eyebrow: "Aufenthalt", title: "Hausregeln" },
        food: { eyebrow: "Vor Ort", title: "Empfehlungen" },
        hosts: { eyebrow: "Gastgeber", title: "Kontakt" },
        emergencies: { eyebrow: "Notfall", title: "Schnelle Hilfe" }
      },
      hero: {
        description: "Willkommen in der Villa. Dieser Guide bündelt alles Wichtige für Ankunft, Abreise, die Nutzung des Hauses und praktische lokale Hinweise für einen entspannten Aufenthalt am Meer.",
        actions: [
          { label: "Route zur Villa", hrefKey: "mapsRoute", style: "sea" },
          { label: "Gastgeber kontaktieren", href: "#hosts" },
          { label: "Maps-Favoriten", hrefKey: "hostList" }
        ],
        facts: [
          { label: "Check-in", valueKey: "checkInTime" },
          { label: "Check-out", valueKey: "checkOutTime" },
          { label: "WLAN", valueKey: "wifi.network" },
          { label: "WLAN-Passwort", valueKey: "wifi.password" }
        ],
        addressHint: "Nur wenige Minuten zu Fuß von Playa de las Higuericas entfernt, gut mit dem Auto erreichbar."
      },
      content: {
        checkInCards: [
          {
            title: "🛬 Ankunft",
            text: "Stimme deine Ankunft ab 15:00 Uhr mit dem Gastgeber ab.\nErledige möglichst vor der Reise den Online-Check-in über den persönlichen Link, den du vorab per E-Mail oder Nachricht erhalten hast.\nAm bequemsten erreichst du die Villa mit dem eigenen Auto oder einem Taxi.\nBeim Check-in können die Hausregeln erklärt und offene Fragen geklärt werden."
          },
          {
            title: "🧳 Abreise",
            text: "Die reguläre Abreise ist bis 12:00 Uhr vorgesehen.\nFalls du einen Late Check-out brauchst, frage bitte vorher an.\nEine persönliche Schlüsselübergabe ist nicht nötig: Gib einfach Bescheid, wenn du die Villa verlässt, und folge den vereinbarten Hinweisen.",
            list: [
              "🍽️ Küche ordentlich hinterlassen und wenn möglich den Müll entsorgen.",
              "💡 Licht und Klimaanlage ausschalten und Türen und Fenster schließen.",
              "📩 Dem Gastgeber Bescheid geben, wenn ihr die Villa verlasst."
            ]
          }
        ],
        houseBasics: [
          {
            title: "📶 WLAN",
            text: "Netzwerk: [COMPLETAR_NOMBRE_WIFI]\nPasswort: [COMPLETAR_PASSWORD_WIFI]",
            list: ["💡 Die Verbindung hat 1 Gb und ist in der Regel sehr stabil, außer wenn du weit vom Router entfernt bist."]
          },
          {
            title: "📺 TV / Streaming",
            text: "Du kannst während des Aufenthalts deine eigenen Netflix-, Prime Video-, Disney+ oder andere Streaming-Konten hinzufügen.",
            list: ["🔐 Bitte vor dem Check-out überall wieder abmelden."]
          }
        ],
        houseAccordions: [
          { title: "🏊 Pool", eyebrow: "Außenbereich", summary: "Kurze Hinweise für eine sichere und einfache Nutzung des Pools.", text: "Vor der Nutzung bitte prüfen, dass der Bereich frei ist, und Kinder immer beaufsichtigen." },
          { title: "♨️ Whirlpool", eyebrow: "Entspannung", summary: "Einfache Hinweise für eine komfortable und sichere Nutzung des Whirlpools.", text: "Der Whirlpool sollte sorgfältig genutzt und geschlossen bleiben, wenn er nicht verwendet wird." },
          { title: "🔥 Grill", eyebrow: "Draußen essen", summary: "Wie man ihn anzündet und danach sicher hinterlässt.", text: "Den Grill ruhig und ohne Brandbeschleuniger verwenden und die Kohlen am Ende vollständig löschen." }
        ],
        hostContacts: [
          { title: "Hauptgastgeber 1", text: "Name: Stacey\nTelefon / WhatsApp: 613869407" },
          { title: "Hauptgastgeber 2", text: "Name: Sergio\nTelefon / WhatsApp: 680957414" },
          { title: "Ersatzkontakt", text: "Name: Ana\nTelefon / WhatsApp: 678267650\nDiesen Kontakt bitte nutzen, wenn die Hauptgastgeber nicht antworten oder du während des Aufenthalts Unterstützung brauchst." }
        ],
        emergencySummary: [{ title: "🚨 112", text: "Allgemeiner Notruf, kostenlos und rund um die Uhr erreichbar.\nPolizei, Rettungsdienst und Feuerwehr." }],
        emergencyAccordions: [
          { title: "🏥 Medizinische Hilfe", summary: "Nächstes Krankenhaus und Gesundheitszentrum.", text: "Universitätskrankenhaus Torrevieja\nC. Madrid, s/n, 03186 Torrevieja, Alicante.\nAllgemeines Krankenhaus mit 24h-Notaufnahme.\nEtwa 15 bis 20 Minuten mit dem Auto von Playa de las Higuericas entfernt.\n\nGesundheitszentrum Pilar de la Horadada\nCalle Vicente Blasco Ibanez s/n, 03190 Pilar de la Horadada, Alicante.\nHausarztversorgung und einfache Tagesnotfälle.\nNur wenige Minuten von der Villa entfernt." },
          { title: "💊 Apotheke und Notdienst", summary: "Nächste Apotheke und was bei Bedarf außerhalb der Öffnungszeiten zu tun ist.", text: "Farmacia Playa Las Higuericas Lda. M del Mar Lorenzo Banon.\nEtwa 450 m zu Fuß von der Villa.\n\nIn Spanien arbeiten Notdienstapotheken im Rotationssystem. Welche Apotheke gerade Dienst hat, kann sich täglich ändern.\nNutze den Notdienst-Link oder frage den Gastgeber bzw. das Gesundheitszentrum." },
          { title: "🏡 In der Villa", summary: "Wichtige Sicherheitsmittel und Vorsichtsmaßnahmen.", text: "Die Villa verfügt über grundlegende Mittel, um auf einen Vorfall in der Unterkunft zu reagieren.", list: ["🧯 Feuerlöscher an einer gut sichtbaren und zugänglichen Stelle.", "🧰 Erste-Hilfe-Set im Schrank im Eingangsbereich.", "👶 Kinder müssen in Außenbereichen, am Pool und am Whirlpool immer beaufsichtigt werden.", "🙏 Verantwortungsvolle Nutzung ist wichtig, um Unfälle in einem Ferienhaus mit Pool und Außenbereichen zu vermeiden."] }
        ]
      }
    },
    nl: {
      property: {
        jacuzzi: [
          "Douche vóór gebruik en houd de afdekking gesloten wanneer de jacuzzi niet wordt gebruikt.",
          "Breng geen zand of glazen voorwerpen in de jacuzzi.",
          "Raak het technische paneel, de filters of de waterbehandelingsinstellingen niet aan.",
          "Ga niet boven 38°C en vermijd lange sessies wanneer het water erg warm is.",
          "Als je zwanger bent of last hebt van hoge bloeddruk, ademhalingsproblemen of andere gezondheidsklachten, raadpleeg dan je arts voordat je de jacuzzi gebruikt."
        ]
      },
      meta: { title: "Villa-gids | Higuericas Beach", description: "Digitale gastenhandleiding voor een villa aan Calle Dalia 31, Pilar de la Horadada.", htmlLang: "nl" },
      ui: {
        languageLabel: "Taal", selectedLanguageLabel: "Geselecteerd", logoutLabel: "Afmelden", activeLanguage: "Nederlands", activeLanguageAuto: "Automatisch (%s)", featuredLabel: "Aanrader",
        nav: { checkin: "Aankomst", house: "Villa", rules: "Regels", food: "Tips", hosts: "Contact", emergencies: "Hulp" },
        sectionLabels: { address: "Adres" },
        gate: { title: "Privétoegang", description: "Voer je gastcode in om de volledige villagids te bekijken.", inputLabel: "Toegangscode", showCode: "Code tonen", hideCode: "Code verbergen", submit: "Binnen", hint: "Als je die niet hebt, vraag het aan de host.", error: "Onjuiste code. Probeer het opnieuw." },
        viewMoreLabel: "Details bekijken"
      },
      sections: {
        checkin: { eyebrow: "Aankomst", title: "Aankomst & vertrek" }, house: { eyebrow: "Binnen & buiten", title: "Alles in de villa" }, rules: { eyebrow: "Verblijf", title: "Huisregels" }, food: { eyebrow: "In de buurt", title: "Aanbevelingen" }, hosts: { eyebrow: "Hosts", title: "Contact" }, emergencies: { eyebrow: "Nood", title: "Snelle hulp" }
      },
      hero: {
        description: "Welkom in de villa. Deze gids bundelt alles wat belangrijk is voor aankomst, vertrek, gebruik van het huis en praktische lokale informatie voor een ontspannen verblijf aan zee.",
        actions: [{ label: "Route naar de villa", hrefKey: "mapsRoute", style: "sea" }, { label: "Host contacteren", href: "#hosts" }, { label: "Maps-favorieten", hrefKey: "hostList" }],
        facts: [{ label: "Check-in", valueKey: "checkInTime" }, { label: "Check-out", valueKey: "checkOutTime" }, { label: "Wifi", valueKey: "wifi.network" }, { label: "Wifi-wachtwoord", valueKey: "wifi.password" }],
        addressHint: "Op korte loopafstand van Playa de las Higuericas en gemakkelijk bereikbaar met de auto."
      },
      content: {
        checkInCards: [
          {
            title: "🛬 Aankomst",
            text: "Stem je aankomst af met de host vanaf 15:00 uur.\nVul indien mogelijk vóór vertrek de online check-in in via de persoonlijke link die je eerder per e-mail of bericht hebt ontvangen.\nDe villa bereik je meestal het makkelijkst met de auto of een taxi.\nTijdens de check-in kunnen de huisregels worden doorgenomen en vragen worden beantwoord."
          },
          {
            title: "🧳 Vertrek",
            text: "De gebruikelijke uitchecktijd is uiterlijk 12:00 uur.\nAls je een late check-out nodig hebt, vraag dit dan vooraf aan.\nJe hoeft de host niet persoonlijk te ontmoeten om de sleutels terug te geven: laat gewoon weten dat je vertrekt en volg de afgesproken instructies.",
            list: ["🍽️ Laat de keuken netjes achter en zet indien mogelijk het afval buiten.", "💡 Schakel verlichting en klimaatregeling uit en sluit deuren en ramen.", "📩 Laat de host weten wanneer jullie de villa verlaten."]
          }
        ],
        houseBasics: [
          { title: "📶 Wifi", text: "Netwerk: [COMPLETAR_NOMBRE_WIFI]\nWachtwoord: [COMPLETAR_PASSWORD_WIFI]", list: ["💡 De verbinding is 1 Gb en hoort vrij stabiel te zijn, behalve als je ver van de router zit."] },
          { title: "📺 TV / streaming", text: "Je kunt tijdens je verblijf je eigen Netflix-, Prime Video-, Disney+ of andere streamingaccounts toevoegen.", list: ["🔐 Vergeet niet om vóór het uitchecken overal weer uit te loggen."] }
        ],
        houseAccordions: [
          { title: "🏊 Zwembad", eyebrow: "Buiten", summary: "Korte tips voor veilig en eenvoudig gebruik van het zwembad.", text: "Controleer voor gebruik of de zone vrij is en houd kinderen altijd onder toezicht." },
          { title: "♨️ Jacuzzi", eyebrow: "Ontspanning", summary: "Eenvoudige tips voor comfortabel en veilig gebruik van de jacuzzi.", text: "Gebruik de jacuzzi zorgvuldig en houd hem gesloten wanneer hij niet wordt gebruikt." },
          { title: "🔥 Barbecue", eyebrow: "Buiten eten", summary: "Hoe je hem aansteekt en veilig achterlaat.", text: "Gebruik de barbecue rustig, zonder aanmaakvloeistoffen, en zorg dat de kolen aan het eind volledig uit zijn." }
        ],
        hostContacts: [
          { title: "Hoofdhost 1", text: "Naam: Stacey\nTelefoon / WhatsApp: 613869407" },
          { title: "Hoofdhost 2", text: "Naam: Sergio\nTelefoon / WhatsApp: 680957414" },
          { title: "Back-upcontact", text: "Naam: Ana\nTelefoon / WhatsApp: 678267650\nGebruik dit contact als de hoofdhosts niet reageren of als je tijdens het verblijf ondersteuning nodig hebt." }
        ],
        emergencySummary: [{ title: "🚨 112", text: "Algemene nooddienst, gratis en 24/7 bereikbaar.\nPolitie, ambulance en brandweer." }],
        emergencyAccordions: [
          { title: "🏥 Medische hulp", summary: "Dichtstbijzijnde ziekenhuis en gezondheidscentrum.", text: "Universitair ziekenhuis van Torrevieja\nC. Madrid, s/n, 03186 Torrevieja, Alicante.\nAlgemeen ziekenhuis met 24-uurs spoedzorg.\nOngeveer 15 tot 20 minuten rijden vanaf Playa de las Higuericas.\n\nGezondheidscentrum Pilar de la Horadada\nCalle Vicente Blasco Ibanez s/n, 03190 Pilar de la Horadada, Alicante.\nHuisartsenzorg en eenvoudige spoed overdag.\nOp een paar minuten van de villa." },
          { title: "💊 Apotheek en dienstapotheek", summary: "Dichtstbijzijnde apotheek en wat je moet doen als je buiten openingstijden hulp nodig hebt.", text: "Farmacia Playa Las Higuericas Lda. M del Mar Lorenzo Banon.\nOngeveer 450 m lopen vanaf de villa.\n\nIn Spanje werken 24-uurs apotheken volgens een roulatiesysteem, dus de beschikbare apotheek kan elke dag verschillen.\nGebruik de link naar de dienstapotheek of vraag het aan de host of het gezondheidscentrum." },
          { title: "🏡 In de villa", summary: "Belangrijke veiligheidsmiddelen en basisvoorzorgsmaatregelen.", text: "De villa beschikt over enkele basisvoorzieningen om op een incident in de woning te reageren.", list: ["🧯 Brandblusser op een zichtbare en toegankelijke plaats.", "🧰 EHBO-set in de kast in de hal.", "👶 Kinderen moeten altijd onder toezicht blijven in de buitenruimtes, bij het zwembad en bij de jacuzzi.", "🙏 Verantwoord gebruik is essentieel om ongelukken in een vakantiewoning met zwembad en buitenruimte te voorkomen."] }
        ]
      }
    },
    sv: {
      property: {
        jacuzzi: [
          "Duscha före användning och håll locket stängt när jacuzzin inte används.",
          "Ta inte med sand eller glasföremål i jacuzzin.",
          "Rör inte kontrollpanelen, filtren eller inställningarna för vattenbehandlingen.",
          "Överskrid inte 38°C och undvik långa bad när vattnet är mycket varmt.",
          "Om du är gravid eller har högt blodtryck, andningsbesvär eller andra hälsoproblem bör du rådgöra med läkare innan du använder jacuzzin."
        ]
      },
      meta: { title: "Villaguide | Higuericas Beach", description: "Digital gästguide för en villa på Calle Dalia 31, Pilar de la Horadada.", htmlLang: "sv" },
      ui: {
        languageLabel: "Språk", selectedLanguageLabel: "Valt", logoutLabel: "Logga ut", activeLanguage: "Svenska", activeLanguageAuto: "Automatiskt (%s)", featuredLabel: "Utvalt",
        nav: { checkin: "Ankomst", house: "Villa", rules: "Regler", food: "Tips", hosts: "Kontakt", emergencies: "Hjälp" },
        sectionLabels: { address: "Adress" },
        gate: { title: "Privat åtkomst", description: "Ange din gästkod för att se hela villaguiden.", inputLabel: "Åtkomstkod", showCode: "Visa kod", hideCode: "Dölj kod", submit: "Gå in", hint: "Om du inte har den, be värden om den.", error: "Fel kod. Försök igen." },
        viewMoreLabel: "Visa detaljer"
      },
      sections: {
        checkin: { eyebrow: "Ankomst", title: "Ankomst & avresa" }, house: { eyebrow: "Inne & ute", title: "Allt i villan" }, rules: { eyebrow: "Vistelse", title: "Husregler" }, food: { eyebrow: "Att njuta av", title: "Rekommendationer" }, hosts: { eyebrow: "Värdar", title: "Kontakt" }, emergencies: { eyebrow: "Nödläge", title: "Snabb hjälp" }
      },
      hero: {
        description: "Välkommen till villan. Den här guiden samlar det viktigaste om ankomst, avresa, hur huset används och praktisk lokal information för en smidig vistelse vid havet.",
        actions: [{ label: "Hitta hit", hrefKey: "mapsRoute", style: "sea" }, { label: "Kontakta värden", href: "#hosts" }, { label: "Maps-favoriter", hrefKey: "hostList" }],
        facts: [{ label: "Check-in", valueKey: "checkInTime" }, { label: "Check-out", valueKey: "checkOutTime" }, { label: "Wifi", valueKey: "wifi.network" }, { label: "Wifi-lösenord", valueKey: "wifi.password" }],
        addressHint: "En kort promenad från Playa de las Higuericas och lätt att nå med bil."
      },
      content: {
        checkInCards: [
          { title: "🛬 Ankomst", text: "Samordna ankomsten med värden från kl. 15.00.\nFyll om möjligt i online check-in före resan via den personliga länken som skickats i förväg via e-post eller meddelande.\nDet enklaste sättet att nå villan är oftast med egen bil eller taxi.\nUnder check-in kan husreglerna gås igenom och frågor besvaras." },
          { title: "🧳 Avresa", text: "Ordinarie utcheckning är senast kl. 12.00.\nOm du behöver sen utcheckning, fråga i förväg så att tillgänglighet kan kontrolleras.\nDu behöver inte träffa värden personligen för att lämna nycklarna: meddela bara att ni lämnar villan och följ de överenskomna instruktionerna.", list: ["🍽️ Lämna köket i ordning och ta ut soporna om möjligt.", "💡 Stäng av belysning och klimatanläggning samt stäng dörrar och fönster.", "📩 Meddela värden när ni lämnar villan."] }
        ],
        houseBasics: [
          { title: "📶 Wifi", text: "Nätverk: [COMPLETAR_NOMBRE_WIFI]\nLösenord: [COMPLETAR_PASSWORD_WIFI]", list: ["💡 Anslutningen är 1 Gb och bör vara ganska stabil om du inte är långt från routern."] },
          { title: "📺 TV / streaming", text: "Du kan lägga till dina egna Netflix-, Prime Video-, Disney+ eller andra streamingkonton under vistelsen.", list: ["🔐 Kom ihåg att logga ut från alla konton före utcheckning."] }
        ],
        houseAccordions: [
          { title: "🏊 Pool", eyebrow: "Utomhus", summary: "Korta råd för säker och enkel användning av poolen.", text: "Kontrollera att området är fritt innan användning och ha alltid barn under uppsikt." },
          { title: "♨️ Jacuzzi", eyebrow: "Avkoppling", summary: "Enkla råd för bekväm och säker användning av jacuzzin.", text: "Jacuzzin ska användas varsamt och hållas stängd när den inte används." },
          { title: "🔥 Grill", eyebrow: "Äta ute", summary: "Hur du tänder den och lämnar den säker efteråt.", text: "Använd grillen lugnt, utan tändvätska, och se till att glöden är helt släckt när du är klar." }
        ],
        hostContacts: [
          { title: "Huvudvärd 1", text: "Namn: Stacey\nTelefon / WhatsApp: 613869407" },
          { title: "Huvudvärd 2", text: "Namn: Sergio\nTelefon / WhatsApp: 680957414" },
          { title: "Reservkontakt", text: "Namn: Ana\nTelefon / WhatsApp: 678267650\nAnvänd denna kontakt om huvudvärdarna inte svarar eller om du behöver hjälp under vistelsen." }
        ],
        emergencySummary: [{ title: "🚨 112", text: "Allmänt nödnummer, gratis och tillgängligt dygnet runt.\nPolis, ambulans och brandkår." }],
        emergencyAccordions: [
          { title: "🏥 Sjukvård", summary: "Närmaste sjukhus och vårdcentral.", text: "Universitetssjukhuset i Torrevieja\nC. Madrid, s/n, 03186 Torrevieja, Alicante.\nAllmänt sjukhus med akutmottagning dygnet runt.\nCirka 15–20 minuter med bil från Playa de las Higuericas.\n\nVårdcentralen i Pilar de la Horadada\nCalle Vicente Blasco Ibanez s/n, 03190 Pilar de la Horadada, Alicante.\nPrimärvård och enklare dagakut.\nBara några minuter från villan." },
          { title: "💊 Apotek och jourapotek", summary: "Närmaste apotek och vad du ska göra om du behöver ett som är öppet dygnet runt.", text: "Farmacia Playa Las Higuericas Lda. M del Mar Lorenzo Banon.\nCirka 450 m till fots från villan.\n\nI Spanien fungerar dygnet-runt-apotek enligt ett roterande jourssystem, så vilket apotek som har öppet kan variera från dag till dag.\nAnvänd länken till jourapotek eller fråga värden eller vårdcentralen." },
          { title: "🏡 I villan", summary: "Viktiga säkerhetsmedel och grundläggande försiktighetsåtgärder.", text: "Villan har grundläggande utrustning för att kunna reagera vid en incident i bostaden.", list: ["🧯 Brandsläckare på en synlig och lättillgänglig plats.", "🧰 Första hjälpen-kit i hallskåpet.", "👶 Barn måste alltid vara under uppsikt i uteområden, vid poolen och vid jacuzzin.", "🙏 Ansvarsfull användning är viktig för att undvika olyckor i ett semesterboende med pool och uteplats."] }
        ]
      }
    },
    pl: {
      property: {
        jacuzzi: [
          "Przed użyciem weź prysznic i trzymaj pokrywę zamkniętą, gdy jacuzzi nie jest używane.",
          "Nie wnosić piasku ani szklanych przedmiotów do jacuzzi.",
          "Nie dotykać panelu technicznego, filtrów ani ustawień uzdatniania wody.",
          "Nie przekraczać 38°C i unikać długich sesji, gdy woda jest bardzo gorąca.",
          "Jeśli jesteś w ciąży lub masz nadciśnienie, problemy z oddychaniem albo inne dolegliwości zdrowotne, skonsultuj się z lekarzem przed skorzystaniem z jacuzzi."
        ]
      },
      meta: { title: "Przewodnik po willi | Higuericas Beach", description: "Cyfrowy przewodnik dla gości willi przy Calle Dalia 31, Pilar de la Horadada.", htmlLang: "pl" },
      ui: {
        languageLabel: "Język", selectedLanguageLabel: "Wybrany", logoutLabel: "Wyloguj", activeLanguage: "Polski", activeLanguageAuto: "Automatyczny (%s)", featuredLabel: "Polecane",
        nav: { checkin: "Przyjazd", house: "Willa", rules: "Zasady", food: "Miejsca", hosts: "Kontakt", emergencies: "Pomoc" },
        sectionLabels: { address: "Adres" },
        gate: { title: "Prywatny dostęp", description: "Wpisz kod gościa, aby zobaczyć pełny przewodnik po willi.", inputLabel: "Kod dostępu", showCode: "Pokaż kod", hideCode: "Ukryj kod", submit: "Wejdź", hint: "Jeśli go nie masz, poproś gospodarza.", error: "Nieprawidłowy kod. Spróbuj ponownie." },
        viewMoreLabel: "Pokaż szczegóły"
      },
      sections: {
        checkin: { eyebrow: "Przyjazd", title: "Przyjazd i wyjazd" }, house: { eyebrow: "W środku i na zewnątrz", title: "Wszystko w willi" }, rules: { eyebrow: "Pobyt", title: "Zasady domu" }, food: { eyebrow: "Na miejscu", title: "Rekomendacje" }, hosts: { eyebrow: "Gospodarze", title: "Kontakt" }, emergencies: { eyebrow: "Nagłe sytuacje", title: "Szybka pomoc" }
      },
      hero: {
        description: "Witamy w willi. Ten przewodnik zbiera najważniejsze informacje o przyjeździe, wyjeździe, korzystaniu z domu i praktyczne wskazówki o okolicy, aby pobyt nad morzem był spokojny i wygodny.",
        actions: [{ label: "Jak dojechać", hrefKey: "mapsRoute", style: "sea" }, { label: "Kontakt z gospodarzem", href: "#hosts" }, { label: "Ulubione w Maps", hrefKey: "hostList" }],
        facts: [{ label: "Check-in", valueKey: "checkInTime" }, { label: "Check-out", valueKey: "checkOutTime" }, { label: "Wi-Fi", valueKey: "wifi.network" }, { label: "Hasło Wi-Fi", valueKey: "wifi.password" }],
        addressHint: "Kilka minut spacerem od Playa de las Higuericas, łatwy dojazd samochodem."
      },
      content: {
        checkInCards: [
          { title: "🛬 Przyjazd", text: "Ustal przyjazd z gospodarzem od godziny 15:00.\nJeśli to możliwe, wypełnij wcześniej online check-in przez osobisty link wysłany wcześniej e-mailem lub wiadomością.\nDo willi najwygodniej dojechać samochodem lub taksówką.\nPodczas check-in można omówić zasady domu i wyjaśnić wszelkie pytania." },
          { title: "🧳 Wyjazd", text: "Standardowy check-out jest do godziny 12:00.\nJeśli potrzebujesz późniejszego wyjazdu, poproś o to z wyprzedzeniem.\nNie trzeba spotykać się osobiście z gospodarzem, aby oddać klucze: wystarczy poinformować o opuszczeniu willi i postępować zgodnie z ustalonymi instrukcjami.", list: ["🍽️ Zostaw kuchnię uporządkowaną i jeśli to możliwe wynieś śmieci.", "💡 Wyłącz światła i klimatyzację oraz zamknij drzwi i okna.", "📩 Daj znać gospodarzowi, gdy opuścicie willę."] }
        ],
        houseBasics: [
          { title: "📶 Wi‑Fi", text: "Sieć: [COMPLETAR_NOMBRE_WIFI]\nHasło: [COMPLETAR_PASSWORD_WIFI]", list: ["💡 Łącze ma 1 Gb i powinno być stabilne, chyba że jesteś daleko od routera."] },
          { title: "📺 TV / streaming", text: "Podczas pobytu możesz dodać własne konta Netflix, Prime Video, Disney+ lub inne serwisy streamingowe.", list: ["🔐 Pamiętaj, aby wylogować się ze wszystkich kont przed wyjazdem."] }
        ],
        houseAccordions: [
          { title: "🏊 Basen", eyebrow: "Na zewnątrz", summary: "Krótkie wskazówki dotyczące bezpiecznego i wygodnego korzystania z basenu.", text: "Przed użyciem upewnij się, że okolica jest wolna od przeszkód, i zawsze pilnuj dzieci." },
          { title: "♨️ Jacuzzi", eyebrow: "Relaks", summary: "Proste wskazówki dotyczące wygodnego i bezpiecznego korzystania z jacuzzi.", text: "Jacuzzi należy używać ostrożnie i trzymać zamknięte, gdy nie jest używane." },
          { title: "🔥 Grill", eyebrow: "Jedzenie na zewnątrz", summary: "Jak go rozpalić i bezpiecznie pozostawić po użyciu.", text: "Używaj grilla spokojnie, bez łatwopalnych płynów, i upewnij się, że po zakończeniu żar jest całkowicie wygaszony." }
        ],
        hostContacts: [
          { title: "Główny gospodarz 1", text: "Imię: Stacey\nTelefon / WhatsApp: 613869407" },
          { title: "Główny gospodarz 2", text: "Imię: Sergio\nTelefon / WhatsApp: 680957414" },
          { title: "Kontakt zapasowy", text: "Imię: Ana\nTelefon / WhatsApp: 678267650\nUżyj tego kontaktu, jeśli główni gospodarze nie odpowiadają lub potrzebujesz pomocy podczas pobytu." }
        ],
        emergencySummary: [{ title: "🚨 112", text: "Ogólny numer alarmowy, bezpłatny i dostępny 24/7.\nPolicja, pogotowie i straż pożarna." }],
        emergencyAccordions: [
          { title: "🏥 Opieka medyczna", summary: "Najbliższy szpital i ośrodek zdrowia.", text: "Szpital Uniwersytecki w Torrevieja\nC. Madrid, s/n, 03186 Torrevieja, Alicante.\nSzpital ogólny z całodobowym oddziałem ratunkowym.\nOkoło 15–20 minut samochodem od Playa de las Higuericas.\n\nOśrodek zdrowia Pilar de la Horadada\nCalle Vicente Blasco Ibanez s/n, 03190 Pilar de la Horadada, Alicante.\nPodstawowa opieka medyczna i podstawowa pomoc doraźna w ciągu dnia.\nKilka minut od willi." },
          { title: "💊 Apteka i apteka dyżurna", summary: "Najbliższa apteka i co zrobić, jeśli potrzebujesz apteki całodobowej.", text: "Farmacia Playa Las Higuericas Lda. M del Mar Lorenzo Banon.\nOkoło 450 m pieszo od willi.\n\nW Hiszpanii apteki całodobowe działają w systemie dyżurów rotacyjnych, więc dostępna apteka może zmieniać się każdego dnia.\nSkorzystaj z linku do apteki dyżurnej lub zapytaj gospodarza albo ośrodek zdrowia." },
          { title: "🏡 W willi", summary: "Podstawowe środki bezpieczeństwa i ważne środki ostrożności.", text: "W willi znajdują się podstawowe środki potrzebne do reagowania na incydent w domu.", list: ["🧯 Gaśnica w widocznym i łatwo dostępnym miejscu.", "🧰 Apteczka w szafce w holu.", "👶 Dzieci muszą być zawsze pod nadzorem na zewnątrz, przy basenie i przy jacuzzi.", "🙏 Odpowiedzialne korzystanie z domu jest kluczowe, aby uniknąć wypadków w obiekcie z basenem i strefami zewnętrznymi."] }
        ]
      }
    },
    ru: {
      property: {
        jacuzzi: [
          "Перед использованием примите душ и держите крышку закрытой, когда джакузи не используется.",
          "Не заносите в джакузи песок и стеклянные предметы.",
          "Не трогайте техническую панель, фильтры и настройки обработки воды.",
          "Не превышайте 38°C и избегайте длительных сеансов, если вода очень горячая.",
          "Если вы беременны или страдаете от повышенного давления, проблем с дыханием или других заболеваний, проконсультируйтесь с врачом перед использованием джакузи."
        ]
      },
      meta: { title: "Гид по вилле | Higuericas Beach", description: "Цифровой гид для гостей виллы на Calle Dalia 31, Pilar de la Horadada.", htmlLang: "ru" },
      ui: {
        languageLabel: "Язык", selectedLanguageLabel: "Выбрано", logoutLabel: "Выйти", activeLanguage: "Русский", activeLanguageAuto: "Автоматически (%s)", featuredLabel: "Рекомендуем",
        nav: { checkin: "Заезд", house: "Вилла", rules: "Правила", food: "Места", hosts: "Контакт", emergencies: "Помощь" },
        sectionLabels: { address: "Адрес" },
        gate: { title: "Приватный доступ", description: "Введите код гостя, чтобы открыть полный гид по вилле.", inputLabel: "Код доступа", showCode: "Показать код", hideCode: "Скрыть код", submit: "Войти", hint: "Если у вас его нет, попросите у хозяина.", error: "Неверный код. Попробуйте снова." },
        viewMoreLabel: "Подробнее"
      },
      sections: {
        checkin: { eyebrow: "Заезд", title: "Заезд и выезд" }, house: { eyebrow: "Внутри и снаружи", title: "Все о вилле" }, rules: { eyebrow: "Проживание", title: "Правила дома" }, food: { eyebrow: "Отдых", title: "Рекомендации" }, hosts: { eyebrow: "Хозяева", title: "Контакт" }, emergencies: { eyebrow: "Экстренно", title: "Быстрая помощь" }
      },
      hero: {
        description: "Добро пожаловать на виллу. В этом гиде собрана основная информация о заезде, выезде, использовании дома и полезные сведения о районе для комфортного отдыха у моря.",
        actions: [{ label: "Как добраться", hrefKey: "mapsRoute", style: "sea" }, { label: "Связаться с хозяином", href: "#hosts" }, { label: "Избранное в Maps", hrefKey: "hostList" }],
        facts: [{ label: "Check-in", valueKey: "checkInTime" }, { label: "Check-out", valueKey: "checkOutTime" }, { label: "Wi‑Fi", valueKey: "wifi.network" }, { label: "Пароль Wi‑Fi", valueKey: "wifi.password" }],
        addressHint: "В нескольких минутах ходьбы от Playa de las Higuericas, удобно добираться на машине."
      },
      content: {
        checkInCards: [
          { title: "🛬 Заезд", text: "Согласуйте время заезда с хозяином начиная с 15:00.\nПо возможности заранее заполните онлайн check-in по персональной ссылке, отправленной по электронной почте или в сообщении.\nДо виллы удобнее всего добираться на машине или на такси.\nВо время check-in можно ещё раз обсудить правила дома и задать вопросы." },
          { title: "🧳 Выезд", text: "Обычное время выезда — до 12:00.\nЕсли вам нужен поздний выезд, попросите об этом заранее.\nЛично встречаться с хозяином для возврата ключей не требуется: просто сообщите о выезде и следуйте согласованным инструкциям.", list: ["🍽️ Оставьте кухню в порядке и, если возможно, вынесите мусор.", "💡 Выключите свет и климатическую систему, закройте двери и окна.", "📩 Сообщите хозяину, когда покинете виллу."] }
        ],
        houseBasics: [
          { title: "📶 Wi‑Fi", text: "Сеть: [COMPLETAR_NOMBRE_WIFI]\nПароль: [COMPLETAR_PASSWORD_WIFI]", list: ["💡 Соединение 1 Гб и обычно работает стабильно, если вы не слишком далеко от роутера."] },
          { title: "📺 TV / streaming", text: "Во время проживания вы можете добавить свои аккаунты Netflix, Prime Video, Disney+ и других стриминговых сервисов.", list: ["🔐 Не забудьте выйти из всех аккаунтов перед выездом."] }
        ],
        houseAccordions: [
          { title: "🏊 Бассейн", eyebrow: "Снаружи", summary: "Краткие советы по безопасному и удобному использованию бассейна.", text: "Перед использованием убедитесь, что зона свободна, и всегда следите за детьми." },
          { title: "♨️ Джакузи", eyebrow: "Отдых", summary: "Простые рекомендации по комфортному и безопасному использованию джакузи.", text: "Джакузи нужно использовать аккуратно и держать закрытым, когда оно не используется." },
          { title: "🔥 Барбекю", eyebrow: "Еда на улице", summary: "Как разжечь и безопасно оставить после использования.", text: "Пользуйтесь барбекю спокойно, без жидкостей для розжига, и в конце убедитесь, что угли полностью потухли." }
        ],
        hostContacts: [
          { title: "Основной хозяин 1", text: "Имя: Stacey\nТелефон / WhatsApp: 613869407" },
          { title: "Основной хозяин 2", text: "Имя: Sergio\nТелефон / WhatsApp: 680957414" },
          { title: "Резервный контакт", text: "Имя: Ana\nТелефон / WhatsApp: 678267650\nИспользуйте этот контакт, если основные хозяева не отвечают или вам нужна помощь во время проживания." }
        ],
        emergencySummary: [{ title: "🚨 112", text: "Общий номер экстренной помощи, бесплатно и круглосуточно.\nПолиция, скорая помощь и пожарная служба." }],
        emergencyAccordions: [
          { title: "🏥 Медицинская помощь", summary: "Ближайшая больница и медицинский центр.", text: "Университетская больница Торревьехи\nC. Madrid, s/n, 03186 Torrevieja, Alicante.\nОбычная больница с круглосуточным отделением неотложной помощи.\nОколо 15–20 минут на машине от Playa de las Higuericas.\n\nМедицинский центр Pilar de la Horadada\nCalle Vicente Blasco Ibanez s/n, 03190 Pilar de la Horadada, Alicante.\nПервичная медицинская помощь и базовая дневная неотложная помощь.\nВ нескольких минутах от виллы." },
          { title: "💊 Аптека и дежурная аптека", summary: "Ближайшая аптека и что делать, если нужна круглосуточная.", text: "Farmacia Playa Las Higuericas Lda. M del Mar Lorenzo Banon.\nОколо 450 м пешком от виллы.\n\nВ Испании круглосуточные аптеки работают по системе дежурств, поэтому доступная аптека может меняться каждый день.\nИспользуйте ссылку на дежурную аптеку или уточните у хозяина или в медцентре." },
          { title: "🏡 На вилле", summary: "Основные средства безопасности и важные меры предосторожности.", text: "На вилле есть базовые средства, чтобы реагировать на происшествия внутри дома.", list: ["🧯 Огнетушитель в заметном и доступном месте.", "🧰 Аптечка в шкафу у входа.", "👶 За детьми всегда нужно следить на улице, у бассейна и у джакузи.", "🙏 Ответственное использование важно для предотвращения несчастных случаев в доме с бассейном и наружными зонами."] }
        ]
      }
    },
    da: {
      property: {
        jacuzzi: [
          "Tag brusebad før brug, og hold overdækningen lukket, når jacuzzien ikke bruges.",
          "Tag ikke sand eller glasgenstande med i jacuzzien.",
          "Undlad at røre det tekniske panel, filtrene eller indstillingerne for vandbehandling.",
          "Overskrid ikke 38°C og undgå lange sessioner, når vandet er meget varmt.",
          "Hvis du er gravid eller har forhøjet blodtryk, vejrtrækningsproblemer eller andre helbredsproblemer, bør du tale med din læge, før du bruger jacuzzien."
        ]
      },
      meta: { title: "Villa-guide | Higuericas Beach", description: "Digital gæsteguide til en villa på Calle Dalia 31, Pilar de la Horadada.", htmlLang: "da" },
      ui: {
        languageLabel: "Sprog", selectedLanguageLabel: "Valgt", logoutLabel: "Log ud", activeLanguage: "Dansk", activeLanguageAuto: "Automatisk (%s)", featuredLabel: "Fremhævet",
        nav: { checkin: "Ankomst", house: "Villa", rules: "Regler", food: "Tips", hosts: "Kontakt", emergencies: "Hjælp" },
        sectionLabels: { address: "Adresse" },
        gate: { title: "Privat adgang", description: "Indtast din gæstekode for at se hele villa-guiden.", inputLabel: "Adgangskode", showCode: "Vis kode", hideCode: "Skjul kode", submit: "Gå ind", hint: "Hvis du ikke har den, så spørg værten.", error: "Forkert kode. Prøv igen." },
        viewMoreLabel: "Se detaljer"
      },
      sections: {
        checkin: { eyebrow: "Ankomst", title: "Ankomst og afrejse" }, house: { eyebrow: "Inde og ude", title: "Alt i villaen" }, rules: { eyebrow: "Ophold", title: "Husregler" }, food: { eyebrow: "At nyde", title: "Anbefalinger" }, hosts: { eyebrow: "Værter", title: "Kontakt" }, emergencies: { eyebrow: "Nødsituation", title: "Hurtig hjælp" }
      },
      hero: {
        description: "Velkommen til villaen. Denne guide samler det vigtigste om ankomst, afrejse, brug af huset og praktiske lokale oplysninger for et roligt ophold ved havet.",
        actions: [{ label: "Sådan kommer du frem", hrefKey: "mapsRoute", style: "sea" }, { label: "Kontakt værten", href: "#hosts" }, { label: "Favoritter i Maps", hrefKey: "hostList" }],
        facts: [{ label: "Check-in", valueKey: "checkInTime" }, { label: "Check-out", valueKey: "checkOutTime" }, { label: "Wi‑Fi", valueKey: "wifi.network" }, { label: "Wi‑Fi-kode", valueKey: "wifi.password" }],
        addressHint: "Kort gåafstand fra Playa de las Higuericas og nem adgang i bil."
      },
      content: {
        checkInCards: [
          { title: "🛬 Ankomst", text: "Aftal ankomsten med værten fra kl. 15.00.\nUdfyld om muligt online check-in inden rejsen via det personlige link, som du har fået på forhånd via e-mail eller besked.\nDet letteste er normalt at komme til villaen i egen bil eller med taxa.\nUnder check-in kan husreglerne gennemgås, og spørgsmål kan afklares." },
          { title: "🧳 Afgang", text: "Normal check-out er senest kl. 12.00.\nHvis du har brug for sen check-out, så spørg i god tid.\nDet er ikke nødvendigt at mødes personligt med værten for at aflevere nøglerne: giv blot besked om, at I forlader villaen, og følg de aftalte instruktioner.", list: ["🍽️ Efterlad køkkenet ryddeligt og tag affaldet ud, hvis det er muligt.", "💡 Sluk lys og klimaanlæg, og luk døre og vinduer.", "📩 Giv værten besked, når I forlader villaen."] }
        ],
        houseBasics: [
          { title: "📶 Wi‑Fi", text: "Netværk: [COMPLETAR_NOMBRE_WIFI]\nKode: [COMPLETAR_PASSWORD_WIFI]", list: ["💡 Forbindelsen er 1 Gb og bør være ret stabil, medmindre du er langt fra routeren."] },
          { title: "📺 TV / streaming", text: "Du kan tilføje dine egne Netflix-, Prime Video-, Disney+ eller andre streamingkonti under opholdet.", list: ["🔐 Husk at logge ud af alle konti før check-out."] }
        ],
        houseAccordions: [
          { title: "🏊 Pool", eyebrow: "Udendørs", summary: "Korte råd til sikker og nem brug af poolen.", text: "Tjek at området er frit, før du bruger poolen, og hold altid børn under opsyn." },
          { title: "♨️ Jacuzzi", eyebrow: "Afslapning", summary: "Enkle råd til komfortabel og sikker brug af jacuzzien.", text: "Jacuzzien skal bruges forsigtigt og holdes lukket, når den ikke er i brug." },
          { title: "🔥 Grill", eyebrow: "Spise ude", summary: "Sådan tænder du den og efterlader den sikkert bagefter.", text: "Brug grillen roligt, uden optændingsvæsker, og sørg for at kullene er helt slukket til sidst." }
        ],
        hostContacts: [
          { title: "Hovedvært 1", text: "Navn: Stacey\nTelefon / WhatsApp: 613869407" },
          { title: "Hovedvært 2", text: "Navn: Sergio\nTelefon / WhatsApp: 680957414" },
          { title: "Backup-kontakt", text: "Navn: Ana\nTelefon / WhatsApp: 678267650\nBrug denne kontakt, hvis hovedværterne ikke svarer, eller hvis du har brug for hjælp under opholdet." }
        ],
        emergencySummary: [{ title: "🚨 112", text: "Generelt alarmnummer, gratis og tilgængeligt døgnet rundt.\nPoliti, ambulance og brandvæsen." }],
        emergencyAccordions: [
          { title: "🏥 Lægehjælp", summary: "Nærmeste hospital og sundhedscenter.", text: "Universitetshospitalet i Torrevieja\nC. Madrid, s/n, 03186 Torrevieja, Alicante.\nAlmindeligt hospital med døgnåben akutmodtagelse.\nOmkring 15–20 minutter i bil fra Playa de las Higuericas.\n\nSundhedscenter Pilar de la Horadada\nCalle Vicente Blasco Ibanez s/n, 03190 Pilar de la Horadada, Alicante.\nPrimær lægehjælp og enkel dagakut.\nFå minutter fra villaen." },
          { title: "💊 Apotek og døgnapotek", summary: "Nærmeste apotek og hvad du skal gøre, hvis du har brug for et døgnåbent apotek.", text: "Farmacia Playa Las Higuericas Lda. M del Mar Lorenzo Banon.\nCa. 450 m til fods fra villaen.\n\nI Spanien fungerer døgnapoteker efter en rotationsordning, så det aktive apotek kan skifte fra dag til dag.\nBrug linket til døgnapotek eller spørg værten eller sundhedscentret." },
          { title: "🏡 I villaen", summary: "Vigtige sikkerhedsmidler og grundlæggende forholdsregler.", text: "Villaen har nogle grundlæggende midler til at reagere på en hændelse i boligen.", list: ["🧯 Brandslukker på et synligt og let tilgængeligt sted.", "🧰 Førstehjælpskasse i skabet i entréen.", "👶 Børn skal altid være under opsyn i udeområder, ved poolen og ved jacuzzien.", "🙏 Ansvarlig brug er vigtig for at undgå ulykker i et feriehus med pool og udeområder."] }
        ]
      }
    },
    no: {
      property: {
        jacuzzi: [
          "Dusj før bruk og hold trekket lukket når jacuzzien ikke er i bruk.",
          "Ikke ta med sand eller glassgjenstander i jacuzzien.",
          "Ikke rør det tekniske panelet, filtrene eller innstillingene for vannbehandling.",
          "Ikke overskrid 38°C og unngå lange økter når vannet er veldig varmt.",
          "Hvis du er gravid eller har høyt blodtrykk, pustebesvær eller andre helseproblemer, bør du rådføre deg med lege før du bruker jacuzzien."
        ]
      },
      meta: { title: "Villa-guide | Higuericas Beach", description: "Digital gjesteguide for en villa i Calle Dalia 31, Pilar de la Horadada.", htmlLang: "no" },
      ui: {
        languageLabel: "Språk", selectedLanguageLabel: "Valgt", logoutLabel: "Logg ut", activeLanguage: "Norsk", activeLanguageAuto: "Automatisk (%s)", featuredLabel: "Anbefalt",
        nav: { checkin: "Ankomst", house: "Villa", rules: "Regler", food: "Tips", hosts: "Kontakt", emergencies: "Hjelp" },
        sectionLabels: { address: "Adresse" },
        gate: { title: "Privat tilgang", description: "Skriv inn gjestekoden for å se hele villa-guiden.", inputLabel: "Tilgangskode", showCode: "Vis kode", hideCode: "Skjul kode", submit: "Gå inn", hint: "Hvis du ikke har den, spør verten.", error: "Feil kode. Prøv igjen." },
        viewMoreLabel: "Se detaljer"
      },
      sections: {
        checkin: { eyebrow: "Ankomst", title: "Ankomst og avreise" }, house: { eyebrow: "Inne og ute", title: "Alt i villaen" }, rules: { eyebrow: "Opphold", title: "Husregler" }, food: { eyebrow: "Å nyte", title: "Anbefalinger" }, hosts: { eyebrow: "Verter", title: "Kontakt" }, emergencies: { eyebrow: "Nødsituasjon", title: "Rask hjelp" }
      },
      hero: {
        description: "Velkommen til villaen. Denne guiden samler det viktigste om ankomst, avreise, bruk av huset og praktisk lokal informasjon for et rolig opphold ved sjøen.",
        actions: [{ label: "Hvordan komme hit", hrefKey: "mapsRoute", style: "sea" }, { label: "Kontakt vert", href: "#hosts" }, { label: "Favoritter i Maps", hrefKey: "hostList" }],
        facts: [{ label: "Check-in", valueKey: "checkInTime" }, { label: "Check-out", valueKey: "checkOutTime" }, { label: "Wi‑Fi", valueKey: "wifi.network" }, { label: "Wi‑Fi-passord", valueKey: "wifi.password" }],
        addressHint: "En kort spasertur fra Playa de las Higuericas, med enkel tilgang med bil."
      },
      content: {
        checkInCards: [
          { title: "🛬 Ankomst", text: "Avtal ankomsten med verten fra kl. 15.00.\nHvis mulig, fullfør online check-in før reisen via den personlige lenken du har fått tidligere på e-post eller melding.\nDet enkleste er som regel å komme til villaen med egen bil eller taxi.\nUnder check-in kan husreglene gjennomgås og spørsmål besvares." },
          { title: "🧳 Avreise", text: "Vanlig utsjekk er innen kl. 12.00.\nHvis du trenger sen utsjekk, spør på forhånd.\nDu trenger ikke møte verten personlig for å levere nøklene: bare gi beskjed om at dere forlater villaen og følg de avtalte instruksjonene.", list: ["🍽️ La kjøkkenet være ryddig og ta ut søppelet hvis mulig.", "💡 Slå av lys og klimaanlegg og lukk dører og vinduer.", "📩 Gi verten beskjed når dere forlater villaen."] }
        ],
        houseBasics: [
          { title: "📶 Wi‑Fi", text: "Nettverk: [COMPLETAR_NOMBRE_WIFI]\nPassord: [COMPLETAR_PASSWORD_WIFI]", list: ["💡 Tilkoblingen er 1 Gb og bør være ganske stabil, med mindre du er langt unna ruteren."] },
          { title: "📺 TV / streaming", text: "Du kan legge til egne Netflix-, Prime Video-, Disney+ eller andre strømmetjenestekontoer under oppholdet.", list: ["🔐 Husk å logge ut av alle kontoer før utsjekk."] }
        ],
        houseAccordions: [
          { title: "🏊 Basseng", eyebrow: "Utendørs", summary: "Korte råd for trygg og enkel bruk av bassenget.", text: "Sjekk at området er fritt før bruk, og hold alltid barn under oppsyn." },
          { title: "♨️ Jacuzzi", eyebrow: "Avslapning", summary: "Enkle råd for komfortabel og trygg bruk av jacuzzien.", text: "Jacuzzien bør brukes forsiktig og holdes lukket når den ikke er i bruk." },
          { title: "🔥 Grill", eyebrow: "Spise ute", summary: "Slik tenner du den og lar den være trygg etterpå.", text: "Bruk grillen rolig, uten tennvæske, og sørg for at kullet er helt slukket når du er ferdig." }
        ],
        hostContacts: [
          { title: "Hovedvert 1", text: "Navn: Stacey\nTelefon / WhatsApp: 613869407" },
          { title: "Hovedvert 2", text: "Navn: Sergio\nTelefon / WhatsApp: 680957414" },
          { title: "Reservekontakt", text: "Navn: Ana\nTelefon / WhatsApp: 678267650\nBruk denne kontakten hvis hovedvertene ikke svarer eller hvis du trenger hjelp under oppholdet." }
        ],
        emergencySummary: [{ title: "🚨 112", text: "Generelt nødnummer, gratis og tilgjengelig 24/7.\nPoliti, ambulanse og brannvesen." }],
        emergencyAccordions: [
          { title: "🏥 Medisinsk hjelp", summary: "Nærmeste sykehus og helsesenter.", text: "Universitetssykehuset i Torrevieja\nC. Madrid, s/n, 03186 Torrevieja, Alicante.\nAllment sykehus med døgnåpen akuttmottak.\nOmtrent 15–20 minutter med bil fra Playa de las Higuericas.\n\nHelsesenteret i Pilar de la Horadada\nCalle Vicente Blasco Ibanez s/n, 03190 Pilar de la Horadada, Alicante.\nPrimærhelsetjeneste og enkel dagakutt.\nBare noen få minutter fra villaen." },
          { title: "💊 Apotek og døgnapotek", summary: "Nærmeste apotek og hva du skal gjøre hvis du trenger et som er åpent hele døgnet.", text: "Farmacia Playa Las Higuericas Lda. M del Mar Lorenzo Banon.\nCa. 450 m å gå fra villaen.\n\nI Spania fungerer døgnapotek etter et rullerende vaktsystem, så hvilket apotek som er aktivt kan variere hver dag.\nBruk lenken til døgnapotek eller spør verten eller helsesenteret." },
          { title: "🏡 I villaen", summary: "Viktige sikkerhetsmidler og grunnleggende forholdsregler.", text: "Villaen har noen grunnleggende hjelpemidler for å kunne reagere ved en hendelse i boligen.", list: ["🧯 Brannslukker på et synlig og lett tilgjengelig sted.", "🧰 Førstehjelpsskrin i skapet i entreen.", "👶 Barn må alltid være under oppsyn i uteområdene, ved bassenget og ved jacuzzien.", "🙏 Ansvarlig bruk er viktig for å unngå ulykker i en feriebolig med basseng og uteområder."] }
        ]
      }
    }
  };

  const detailedLocalePatches = {
    fr: {
      property: {
        houseRules: {
          intro: "🙏 Merci de traiter la maison avec soin et respect, comme si elle était la vôtre. Ces règles aident à garder un séjour confortable, sûr et calme pour tous. Tout dommage ou incident doit être signalé dès que possible.",
          sections: [
            { title: "🚭 Interdiction de fumer à l'intérieur", text: "Il n'est pas permis de fumer à l'intérieur du logement. Merci d'utiliser les zones extérieures prévues à cet effet." },
            { title: "🔇 Heures de repos", text: "À partir de 23h00, merci de maintenir un niveau de bruit faible afin de respecter le voisinage et l'environnement." },
            { title: "🎉 Pas de fêtes ni d'événements", text: "Les fêtes, célébrations ou réunions qui perturbent la tranquillité du logement ou du voisinage ne sont pas autorisées." },
            { title: "👥 Visiteurs et occupation", text: "Il n'est pas permis d'héberger ou d'inviter des personnes qui n'ont pas été enregistrées à l'avance lors du check-in. L'occupation doit toujours respecter la réservation confirmée." },
            { title: "🐾 Animaux", text: "Les animaux sont acceptés sur demande. Un supplément de 25 EUR par séjour ainsi qu'une caution supplémentaire selon le poids de l'animal sont demandés, à régler au moment du check-in via l'application de check-in ou par virement. Un couchage et des gamelles sont disponibles pour les animaux petits ou moyens, même si nous recommandons d'apporter les vôtres.", sheetKey: "petPolicy" },
            { title: "🏊 Piscine et jacuzzi", text: "Consultez les sections spécifiques sur la piscine et le jacuzzi pour voir les conseils d'utilisation pendant le séjour.", list: ["Il est obligatoire de se doucher avant d'utiliser la piscine ou le jacuzzi.", "Ne pas introduire de sable dans le jacuzzi.", "Le jacuzzi ne doit pas être utilisé par des enfants de moins de 12 ans sans surveillance d'un adulte.", "Les enfants ne doivent jamais rester seuls dans la zone de la piscine."], links: [{ label: "Conseils d'utilisation de la piscine", href: "#house-pool" }, { label: "Conseils d'utilisation du jacuzzi", href: "#house-jacuzzi" }] },
            { title: "🔥 Barbecue / cheminée", text: "Dans la section barbecue, vous trouverez aussi des conseils pratiques pour l'allumage et la fermeture en toute sécurité.", list: ["Utiliser toujours des allume-feux et le système cheminée pour allumer les braises.", "Ne pas utiliser de liquides inflammables.", "S'assurer que les braises sont complètement éteintes à la fin."], links: [{ label: "Conseils d'utilisation du barbecue", href: "#house-bbq" }] },
            { title: "❄️ Climatisation et chauffage", text: "Merci d'utiliser la climatisation et le chauffage de manière responsable et de les éteindre lorsque vous quittez le logement." },
            { title: "🗑️ Déchets et recyclage", text: "Les déchets doivent être déposés régulièrement dans les conteneurs proches. Merci de nous aider à garder l'environnement propre.", list: ["🟩 Vert : déchets généraux", "🟦 Bleu : papier et carton", "🟨 Jaune : emballages et plastiques", "♻️ Verre : conteneurs spécifiques pour le verre"] }
          ]
        }
      },
      content: {
        infoSheets: {
          arrivalRegistration: {
            eyebrow: "Arrivée",
            title: "🪪 Enregistrement des voyageurs et check-in en ligne",
            text: "Toutes les personnes hébergées doivent s'enregistrer via l'application de check-in, car en Espagne ces données doivent obligatoirement être communiquées à la police.\nL'environnement est sécurisé et les données du document d'identité sont utilisées uniquement pour remplir cette obligation légale.\nNormalement, vous recevrez à l'avance un lien personnel par e-mail ou message afin de le compléter en ligne, mais si cela n'a pas été fait, l'un des hôtes recueillera les informations pendant le check-in avant l'entrée dans le logement."
          },
          petPolicy: {
            eyebrow: "Règles",
            title: "🐾 Animaux : conditions et caution",
            text: "Les animaux sont acceptés uniquement sur demande et il est important de le signaler juste après la réservation. Si cela n'a pas été communiqué à l'avance, nous ne pouvons pas garantir le séjour avec un animal.\n\nLe séjour avec animal entraîne un supplément de 25 EUR par séjour, et non par nuit.\nUne caution supplémentaire est également demandée pour d'éventuels dommages ou un nettoyage exceptionnel, à régler au moment du check-in via l'application de check-in ou par virement bancaire.\n\nLa villa dispose d'un couchage et de gamelles pour les animaux petits ou moyens, même si nous recommandons d'apporter les vôtres pour que l'animal soit plus à l'aise.",
            list: ["Jusqu'à 10 kg : caution de 150 EUR par séjour.", "Plus de 10 kg : caution de 260 EUR par séjour.", "L'animal doit disposer d'un carnet de santé à jour, incluant vaccinations et vermifugation.", "Les chiens doivent être tenus en laisse et, le cas échéant, porter une muselière, toujours sous la surveillance du propriétaire ou d'un gardien autorisé.", "Les animaux potentiellement dangereux ou agressifs, y compris les races considérées comme telles par la réglementation applicable, ne sont pas admis.", "Il n'est pas permis aux animaux de monter sur les lits ou les canapés. Ils doivent avoir leur propre couchage ou couverture.", "Il n'est pas permis d'utiliser les serviettes, draps ou linge de lit de la villa pour l'animal, ni qu'il fasse ses besoins à l'intérieur de l'appartement.", "Les propriétaires doivent nettoyer toute saleté laissée par l'animal dans le logement, dans les parties communes ou sur les accès.", "Les dommages, taches, odeurs ou nettoyages spéciaux affectant les textiles, le mobilier ou les équipements seront évalués et déduits de la caution ou, si nécessaire, facturés séparément selon le coût réel de remplacement ou de réparation.", "Si aucun problème n'est constaté, la caution est restituée après le check-out. En cas de dommages ou de saleté exceptionnelle, le client sera informé et le coût correspondant sera appliqué."]
          }
        }
      }
    },
    de: {
      property: {
        houseRules: {
          intro:
            "🙏 Bitte behandle das Haus sorgfältig und respektvoll, als wäre es dein eigenes. Diese Regeln helfen, den Aufenthalt für alle angenehm, sicher und ruhig zu halten. Schäden oder Probleme sollten so schnell wie möglich gemeldet werden.",
          sections: [
            { title: "🚭 Rauchen im Innenbereich verboten", text: "Im Haus ist Rauchen nicht erlaubt. Bitte nutze die dafür vorgesehenen Außenbereiche." },
            { title: "🔇 Ruhezeiten", text: "Ab 23:00 Uhr bitten wir darum, den Geräuschpegel niedrig zu halten, um Nachbarn und Umgebung zu respektieren." },
            { title: "🎉 Keine Partys oder Veranstaltungen", text: "Partys, Feiern oder Treffen, die die Ruhe im Haus oder in der Nachbarschaft stören, sind nicht erlaubt." },
            { title: "👥 Besucher und Belegung", text: "Es ist nicht erlaubt, nicht zuvor beim Check-in registrierte Personen unterzubringen oder einzuladen. Die Belegung muss immer der bestätigten Buchung entsprechen." },
            { title: "🐾 Haustiere", text: "Haustiere sind auf Anfrage erlaubt. Für ein Haustier fällt eine Gebühr von 25 EUR pro Aufenthalt sowie eine zusätzliche Kaution je nach Gewicht an, zahlbar beim Check-in über die Check-in-App oder per Überweisung. Für kleine oder mittelgroße Tiere stehen ein Tierbett und Näpfe bereit, wir empfehlen aber, eigene mitzubringen.", sheetKey: "petPolicy" },
            { title: "🏊 Pool und Whirlpool", text: "Sieh dir die eigenen Abschnitte zu Pool und Whirlpool an, um praktische Nutzungshinweise für den Aufenthalt zu lesen.", list: ["Vor der Nutzung von Pool oder Whirlpool muss geduscht werden.", "Kein Sand in den Whirlpool bringen.", "Der Whirlpool darf von Kindern unter 12 Jahren nicht ohne Aufsicht genutzt werden.", "Kinder dürfen im Poolbereich nie unbeaufsichtigt bleiben."], links: [{ label: "Tipps zur Poolnutzung", href: "#house-pool" }, { label: "Tipps zur Whirlpoolnutzung", href: "#house-jacuzzi" }] },
            { title: "🔥 Grill / Kamin", text: "Im Grillabschnitt findest du auch praktische Hinweise zum Anzünden und sicheren Beenden.", list: ["Zum Anzünden der Kohlen immer Anzündwürfel und das Anzündsystem verwenden.", "Keine brennbaren Flüssigkeiten verwenden.", "Sicherstellen, dass die Kohlen am Ende vollständig gelöscht sind."], links: [{ label: "Tipps zur Grillnutzung", href: "#house-bbq" }] },
            { title: "❄️ Klimaanlage und Heizung", text: "Bitte Klimaanlage und Heizung verantwortungsvoll nutzen und beim Verlassen des Hauses ausschalten." },
            { title: "🗑️ Müll und Recycling", text: "Müll sollte regelmäßig in die nahegelegenen Container gebracht werden. Hilf uns, die Umgebung sauber zu halten.", list: ["🟩 Grün: Restmüll", "🟦 Blau: Papier und Karton", "🟨 Gelb: Verpackungen und Plastik", "♻️ Glas: spezielle Glascontainer"] }
          ]
        }
      },
      content: {
        infoSheets: {
          arrivalRegistration: {
            eyebrow: "Ankunft",
            title: "🪪 Gästeregistrierung und Online-Check-in",
            text: "Alle Gäste müssen sich über die Check-in-App registrieren, weil diese Daten in Spanien verpflichtend an die Polizei übermittelt werden müssen.\nDie Umgebung ist sicher und die Ausweisdaten werden ausschließlich zur Erfüllung dieser gesetzlichen Pflicht verwendet.\nNormalerweise erhältst du vorab per E-Mail oder Nachricht einen persönlichen Link, um dies online vor der Anreise zu erledigen. Falls das nicht erfolgt ist, erfasst einer der Gastgeber die Daten beim Check-in, bevor ihr die Unterkunft betretet."
          },
          petPolicy: {
            eyebrow: "Regeln",
            title: "🐾 Haustiere: Bedingungen und Kaution",
            text: "Haustiere werden nur auf Anfrage akzeptiert, und es ist wichtig, dies direkt nach der Buchung mitzuteilen. Wenn dies nicht vorab gemeldet wurde, können wir den Aufenthalt mit Tier nicht garantieren.\n\nFür Haustiere fällt eine Gebühr von 25 EUR pro Aufenthalt an, nicht pro Nacht.\nZusätzlich wird eine Kaution für mögliche Schäden oder Sonderreinigung verlangt, zahlbar beim Check-in über die Check-in-App oder per Überweisung.\n\nFür kleine oder mittelgroße Tiere stehen ein Tierbett und Näpfe bereit, wir empfehlen aber, eigene mitzubringen, damit sich das Tier wohler fühlt.",
            list: ["Bis 10 kg: 150 EUR Kaution pro Aufenthalt.", "Über 10 kg: 260 EUR Kaution pro Aufenthalt.", "Das Tier muss über eine aktuelle Gesundheitskarte verfügen, einschließlich Impfungen und Entwurmung.", "Hunde müssen an der Leine geführt werden und, wenn vorgeschrieben, einen Maulkorb tragen, immer unter Aufsicht des Eigentümers oder eines autorisierten Betreuers.", "Potenziell gefährliche oder aggressive Tiere sowie Rassen, die nach geltenden Vorschriften als solche gelten, werden nicht akzeptiert.", "Haustiere dürfen nicht auf Betten oder Sofas. Sie müssen ein eigenes Bett oder eine eigene Decke haben.", "Handtücher, Bettwäsche oder Laken der Villa dürfen nicht für das Tier verwendet werden, und Tiere dürfen ihre Bedürfnisse nicht in der Wohnung verrichten.", "Eigentümer müssen jeglichen Schmutz beseitigen, den das Tier in der Unterkunft, in Gemeinschaftsbereichen oder auf Zugangswegen hinterlässt.", "Schäden, Flecken, Gerüche oder Sonderreinigungen an Textilien, Möbeln oder Ausstattung werden bewertet und von der Kaution abgezogen oder, falls nötig, zusätzlich nach den tatsächlichen Ersatz- oder Reparaturkosten berechnet.", "Wenn keine Probleme festgestellt werden, wird die Kaution nach dem Check-out zurückerstattet. Bei Schäden oder außergewöhnlicher Verschmutzung wird der Gast informiert und der entsprechende Betrag berechnet."]
          }
        }
      }
    },
    nl: {
      property: {
        houseRules: {
          intro: "🙏 Behandel de woning alstublieft met zorg en respect, alsof ze van jezelf is. Deze regels helpen het verblijf voor iedereen comfortabel, veilig en rustig te houden. Schade of problemen moeten zo snel mogelijk worden gemeld.",
          sections: [
            { title: "🚭 Niet roken binnen", text: "Roken is niet toegestaan binnen in de woning. Gebruik alstublieft de daarvoor bestemde buitenruimtes." },
            { title: "🔇 Rusturen", text: "Vanaf 23:00 uur vragen we om het geluidsniveau laag te houden uit respect voor de buren en de omgeving." },
            { title: "🎉 Geen feesten of evenementen", text: "Feesten, vieringen of bijeenkomsten die de rust in de woning of de buurt verstoren zijn niet toegestaan." },
            { title: "👥 Bezoekers en bezetting", text: "Het is niet toegestaan personen te laten verblijven of uit te nodigen die niet vooraf tijdens de check-in zijn geregistreerd. De bezetting moet altijd overeenkomen met de bevestigde reservering." },
            { title: "🐾 Huisdieren", text: "Huisdieren zijn op aanvraag toegestaan. Voor een huisdier geldt een toeslag van 25 EUR per verblijf en een extra borg afhankelijk van het gewicht van het dier, te betalen bij de check-in via de check-in-app of per bankoverschrijving. Er is een mand en voerbakken beschikbaar voor kleine of middelgrote dieren, al raden we aan je eigen spullen mee te brengen.", sheetKey: "petPolicy" },
            { title: "🏊 Zwembad en jacuzzi", text: "Bekijk de aparte secties over zwembad en jacuzzi voor praktische gebruikstips tijdens je verblijf.", list: ["Douchen vóór gebruik van zwembad of jacuzzi is verplicht.", "Breng geen zand in de jacuzzi.", "De jacuzzi mag niet door kinderen onder 12 jaar zonder toezicht van een volwassene worden gebruikt.", "Kinderen mogen nooit alleen in het zwembadgedeelte blijven."], links: [{ label: "Tips voor gebruik van het zwembad", href: "#house-pool" }, { label: "Tips voor gebruik van de jacuzzi", href: "#house-jacuzzi" }] },
            { title: "🔥 Barbecue / haard", text: "In de barbecuesectie vind je ook praktische tips over aansteken en veilig afsluiten.", list: ["Gebruik altijd aanmaakblokjes en het schoorsteensysteem om de kolen aan te steken.", "Gebruik geen brandbare vloeistoffen.", "Zorg ervoor dat de kolen volledig uit zijn wanneer je klaar bent."], links: [{ label: "Tips voor gebruik van de barbecue", href: "#house-bbq" }] },
            { title: "❄️ Airconditioning en verwarming", text: "Gebruik airconditioning en verwarming verantwoordelijk en schakel ze uit wanneer je de woning verlaat." },
            { title: "🗑️ Afval en recycling", text: "Afval moet regelmatig naar de nabijgelegen containers worden gebracht. Help ons de omgeving schoon te houden.", list: ["🟩 Groen: restafval", "🟦 Blauw: papier en karton", "🟨 Geel: verpakkingen en plastic", "♻️ Glas: speciale glascontainers"] }
          ]
        }
      },
      content: {
        infoSheets: {
          arrivalRegistration: {
            eyebrow: "Aankomst",
            title: "🪪 Reizigersregistratie en online check-in",
            text: "Alle verblijvende gasten moeten zich registreren via de check-in-app, omdat deze gegevens in Spanje verplicht aan de politie moeten worden doorgegeven.\nDe omgeving is veilig en de identiteitsgegevens worden uitsluitend gebruikt om aan deze wettelijke verplichting te voldoen.\nNormaal ontvang je vooraf per e-mail of bericht een persoonlijke link om dit online in te vullen, maar als het nog niet is gedaan, zal een van de hosts de gegevens tijdens de check-in opnemen voordat je de woning binnengaat."
          },
          petPolicy: {
            eyebrow: "Regels",
            title: "🐾 Huisdieren: voorwaarden en borg",
            text: "Huisdieren worden alleen op aanvraag geaccepteerd en het is belangrijk dit direct na de boeking te melden. Als dit niet vooraf is gemeld, kunnen we het verblijf met een dier niet garanderen.\n\nVoor een huisdier geldt een toeslag van 25 EUR per verblijf, niet per nacht.\nDaarnaast wordt een extra borg gevraagd voor mogelijke schade of extra schoonmaak, te betalen bij de check-in via de check-in-app of per bankoverschrijving.\n\nDe woning beschikt over een mand en voerbakken voor kleine of middelgrote dieren, al raden we aan om je eigen spullen mee te brengen zodat het dier zich comfortabeler voelt.",
            list: ["Tot 10 kg: 150 EUR borg per verblijf.", "Meer dan 10 kg: 260 EUR borg per verblijf.", "Het dier moet beschikken over een geldige gezondheidskaart, inclusief vaccinaties en ontworming.", "Honden moeten aan de lijn blijven en, wanneer nodig, een muilkorf dragen, altijd onder toezicht van de eigenaar of een bevoegde verzorger.", "Potentieel gevaarlijke of agressieve dieren, inclusief rassen die volgens de geldende regelgeving als zodanig worden beschouwd, worden niet toegelaten.", "Huisdieren mogen niet op bedden of banken. Ze moeten hun eigen mand of deken hebben.", "Handdoeken, lakens of beddengoed van de villa mogen niet voor het dier worden gebruikt, en huisdieren mogen hun behoeften niet in het appartement doen.", "Eigenaren moeten elke vervuiling opruimen die het dier in de woning, gemeenschappelijke ruimtes of toegangswegen achterlaat.", "Schade, vlekken, geuren of extra schoonmaak van textiel, meubilair of apparatuur worden beoordeeld en van de borg afgetrokken of, indien nodig, apart in rekening gebracht op basis van de werkelijke vervangings- of reparatiekosten.", "Als er geen problemen worden vastgesteld, wordt de borg na check-out terugbetaald. Bij schade of uitzonderlijke vervuiling wordt de gast geïnformeerd en wordt het overeenkomstige bedrag toegepast."]
          }
        }
      }
    },
    sv: {
      property: {
        houseRules: {
          intro: "🙏 Behandla hemmet med omsorg och respekt, som om det vore ditt eget. Dessa regler hjälper till att göra vistelsen bekväm, säker och lugn för alla. Skador eller problem ska meddelas så snart som möjligt.",
          sections: [
            { title: "🚭 Rökning förbjuden inomhus", text: "Det är inte tillåtet att röka inne i huset. Använd de avsedda utomhusområdena." },
            { title: "🔇 Tysta tider", text: "Från kl. 23.00 ber vi er hålla låg ljudnivå för att respektera grannar och omgivning." },
            { title: "🎉 Inga fester eller evenemang", text: "Fester, firanden eller sammankomster som stör lugnet i huset eller området är inte tillåtna." },
            { title: "👥 Besökare och beläggning", text: "Det är inte tillåtet att ha boende eller bjuda in personer som inte registrerats i samband med check-in. Beläggningen måste alltid stämma med den bekräftade bokningen." },
            { title: "🐾 Husdjur", text: "Husdjur är tillåtna på begäran. Att bo med husdjur medför en avgift på 25 EUR per vistelse samt en extra deposition beroende på djurets vikt, som betalas vid check-in via check-in-appen eller banköverföring. Det finns bädd och matskålar för små eller medelstora djur, men vi rekommenderar att ni tar med egna.", sheetKey: "petPolicy" },
            { title: "🏊 Pool och jacuzzi", text: "Se de särskilda avsnitten för pool och jacuzzi för praktiska användningstips under vistelsen.", list: ["Det är obligatoriskt att duscha innan pool eller jacuzzi används.", "Ta inte med sand i jacuzzin.", "Jacuzzin får inte användas av barn under 12 år utan vuxens tillsyn.", "Barn får aldrig lämnas ensamma vid poolområdet."], links: [{ label: "Tips för användning av poolen", href: "#house-pool" }, { label: "Tips för användning av jacuzzin", href: "#house-jacuzzi" }] },
            { title: "🔥 Grill / eldstad", text: "I grillavsnittet finns också praktiska råd om tändning och säker avslutning.", list: ["Använd alltid tändkuber och skorstenständare för att tända kolen.", "Använd inte brandfarliga vätskor.", "Se till att glöden är helt släckt när du är klar."], links: [{ label: "Tips för användning av grillen", href: "#house-bbq" }] },
            { title: "❄️ Luftkonditionering och värme", text: "Använd luftkonditionering och värme på ett ansvarsfullt sätt och stäng av dem när du lämnar huset." },
            { title: "🗑️ Sopor och återvinning", text: "Sopor ska regelbundet lämnas i de närliggande kärlen. Hjälp oss att hålla området rent.", list: ["🟩 Grön: restavfall", "🟦 Blå: papper och kartong", "🟨 Gul: förpackningar och plast", "♻️ Glas: särskilda glasbehållare"] }
          ]
        }
      },
      content: {
        infoSheets: {
          arrivalRegistration: {
            eyebrow: "Ankomst",
            title: "🪪 Registrering av resenärer och online check-in",
            text: "Alla gäster som bor i villan måste registreras via check-in-appen eftersom dessa uppgifter enligt spansk lag måste rapporteras till polisen.\nMiljön är säker och identitetshandlingens uppgifter används endast för att uppfylla denna lagliga skyldighet.\nNormalt får du en personlig länk via e-post eller meddelande i förväg för att kunna göra detta online, men om det inte är gjort kommer en av värdarna att samla in uppgifterna vid check-in innan ni går in i boendet."
          },
          petPolicy: {
            eyebrow: "Regler",
            title: "🐾 Husdjur: villkor och deposition",
            text: "Husdjur accepteras endast på begäran och det är viktigt att meddela detta direkt efter bokningen. Om det inte har meddelats i förväg kan vi inte garantera vistelsen med djur.\n\nAtt bo med husdjur medför en avgift på 25 EUR per vistelse, inte per natt.\nDessutom krävs en extra deposition för eventuella skador eller extra städning, som betalas vid check-in via check-in-appen eller banköverföring.\n\nDet finns bädd och matskålar för små eller medelstora djur i villan, men vi rekommenderar att ta med egna så att djuret känner sig mer bekvämt.",
            list: ["Upp till 10 kg: deposition på 150 EUR per vistelse.", "Över 10 kg: deposition på 260 EUR per vistelse.", "Djuret måste ha ett giltigt hälsokort, inklusive vaccinationer och avmaskning.", "Hundar måste hållas kopplade och, när det krävs, bära munkorg, alltid under tillsyn av ägaren eller en behörig skötare.", "Potentiellt farliga eller aggressiva djur, inklusive raser som enligt gällande regler anses vara sådana, accepteras inte.", "Husdjur får inte vara i sängar eller soffor. De måste ha egen bädd eller filt.", "Villans handdukar, lakan eller sänglinne får inte användas för djuret, och djur får inte uträtta sina behov inne i lägenheten.", "Ägare måste städa upp all smuts som djuret lämnar i bostaden, i gemensamma utrymmen eller längs tillträdesvägar.", "Skador, fläckar, lukter eller särskild rengöring av textilier, möbler eller utrustning bedöms och dras av från depositionen eller, vid behov, debiteras separat utifrån faktisk ersättnings- eller reparationskostnad.", "Om inga problem upptäcks återbetalas depositionen efter check-out. Om det finns skador eller onormal smuts informeras gästen och motsvarande kostnad tas ut."]
          }
        }
      }
    },
    pl: {
      property: {
        houseRules: {
          intro: "🙏 Prosimy traktować dom z troską i szacunkiem, jak własny. Zasady te pomagają utrzymać pobyt w komfortowych, bezpiecznych i spokojnych warunkach dla wszystkich. Wszelkie szkody lub incydenty należy zgłaszać jak najszybciej.",
          sections: [
            { title: "🚭 Zakaz palenia wewnątrz", text: "Palenie w domu jest zabronione. Prosimy korzystać z wyznaczonych stref na zewnątrz." },
            { title: "🔇 Godziny ciszy", text: "Od 23:00 prosimy o zachowanie niskiego poziomu hałasu z szacunku dla sąsiadów i okolicy." },
            { title: "🎉 Zakaz imprez i wydarzeń", text: "Imprezy, spotkania lub uroczystości zakłócające spokój domu lub okolicy nie są dozwolone." },
            { title: "👥 Goście i liczba osób", text: "Nie wolno zakwaterowywać ani zapraszać osób, które nie zostały wcześniej zarejestrowane podczas check-in. Liczba osób musi zawsze odpowiadać potwierdzonej rezerwacji." },
            { title: "🐾 Zwierzęta", text: "Zwierzęta są akceptowane na życzenie. Pobyt ze zwierzęciem wiąże się z opłatą 25 EUR za pobyt oraz dodatkową kaucją zależną od wagi zwierzęcia, płatną przy check-in przez aplikację check-in lub przelewem. Dla małych i średnich zwierząt dostępne są legowisko i miski, choć zalecamy przywiezienie własnych.", sheetKey: "petPolicy" },
            { title: "🏊 Basen i jacuzzi", text: "Sprawdź osobne sekcje dotyczące basenu i jacuzzi, aby zobaczyć praktyczne wskazówki na czas pobytu.", list: ["Przed korzystaniem z basenu lub jacuzzi należy obowiązkowo wziąć prysznic.", "Nie wnosić piasku do jacuzzi.", "Dzieci poniżej 12 lat nie mogą korzystać z jacuzzi bez nadzoru dorosłych.", "Dzieci nigdy nie powinny pozostawać same w strefie basenu."], links: [{ label: "Wskazówki dotyczące korzystania z basenu", href: "#house-pool" }, { label: "Wskazówki dotyczące korzystania z jacuzzi", href: "#house-jacuzzi" }] },
            { title: "🔥 Grill / kominek", text: "W sekcji o grillu znajdziesz też praktyczne wskazówki dotyczące rozpalania i bezpiecznego zakończenia użytkowania.", list: ["Do rozpalania węgla używaj zawsze podpałki i komina rozpalającego.", "Nie używaj łatwopalnych płynów.", "Upewnij się, że po zakończeniu żar jest całkowicie wygaszony."], links: [{ label: "Wskazówki dotyczące korzystania z grilla", href: "#house-bbq" }] },
            { title: "❄️ Klimatyzacja i ogrzewanie", text: "Korzystaj z klimatyzacji i ogrzewania odpowiedzialnie oraz wyłączaj je przy opuszczaniu domu." },
            { title: "🗑️ Śmieci i recykling", text: "Śmieci należy regularnie wyrzucać do pobliskich pojemników. Pomóż nam utrzymać okolicę w czystości.", list: ["🟩 Zielony: odpady zmieszane", "🟦 Niebieski: papier i karton", "🟨 Żółty: opakowania i plastik", "♻️ Szkło: specjalne pojemniki na szkło"] }
          ]
        }
      },
      content: {
        infoSheets: {
          arrivalRegistration: {
            eyebrow: "Przyjazd",
            title: "🪪 Rejestracja podróżnych i online check-in",
            text: "Wszyscy goście zatrzymujący się w willi muszą zarejestrować się przez aplikację check-in, ponieważ w Hiszpanii dane te muszą być obowiązkowo przekazywane policji.\nŚrodowisko jest bezpieczne, a dane z dokumentu tożsamości są używane wyłącznie w celu spełnienia tego obowiązku prawnego.\nZwykle wcześniej otrzymasz osobisty link e-mailem lub wiadomością, aby wypełnić to online przed przyjazdem, ale jeśli nie zostało to zrobione, jeden z gospodarzy zbierze dane podczas check-in przed wejściem do nieruchomości."
          },
          petPolicy: {
            eyebrow: "Zasady",
            title: "🐾 Zwierzęta: warunki i kaucja",
            text: "Zwierzęta są akceptowane wyłącznie na życzenie i ważne jest, aby poinformować o tym zaraz po dokonaniu rezerwacji. Jeśli nie zostanie to zgłoszone z wyprzedzeniem, nie możemy zagwarantować pobytu ze zwierzęciem.\n\nPobyt ze zwierzęciem wiąże się z opłatą 25 EUR za pobyt, a nie za noc.\nDodatkowo wymagana jest kaucja na wypadek ewentualnych szkód lub dodatkowego sprzątania, płatna przy check-in przez aplikację check-in lub przelewem.\n\nW willi dostępne są legowisko i miski dla małych lub średnich zwierząt, choć zalecamy zabranie własnych, aby zwierzę czuło się bardziej komfortowo.",
            list: ["Do 10 kg: kaucja 150 EUR za pobyt.", "Powyżej 10 kg: kaucja 260 EUR za pobyt.", "Zwierzę musi mieć aktualną książeczkę zdrowia, w tym szczepienia i odrobaczenie.", "Psy muszą być prowadzone na smyczy i, gdy jest to wymagane, w kagańcu, zawsze pod nadzorem właściciela lub upoważnionego opiekuna.", "Nie akceptujemy zwierząt potencjalnie niebezpiecznych lub agresywnych, w tym ras uznawanych za takie zgodnie z obowiązującymi przepisami.", "Zwierzęta nie mogą wchodzić na łóżka ani sofy. Muszą mieć własne legowisko lub koc.", "Nie wolno używać ręczników, prześcieradeł ani pościeli z willi dla zwierzęcia, a zwierzę nie może załatwiać potrzeb wewnątrz apartamentu.", "Właściciele muszą sprzątnąć wszelkie zabrudzenia pozostawione przez zwierzę w nieruchomości, częściach wspólnych lub na drogach dostępu.", "Uszkodzenia, plamy, zapachy lub specjalne czyszczenie tekstyliów, mebli lub wyposażenia zostaną ocenione i potrącone z kaucji lub, jeśli to konieczne, naliczone dodatkowo według rzeczywistego kosztu wymiany lub naprawy.", "Jeśli nie zostaną stwierdzone żadne problemy, kaucja zostanie zwrócona po check-out. W przypadku szkód lub nadzwyczajnego zabrudzenia gość zostanie poinformowany, a odpowiedni koszt zostanie naliczony."]
          }
        }
      }
    },
    ru: {
      property: {
        houseRules: {
          intro: "🙏 Пожалуйста, относитесь к дому бережно и с уважением, как к своему собственному. Эти правила помогают сделать пребывание комфортным, безопасным и спокойным для всех. О любых повреждениях или проблемах нужно сообщать как можно скорее.",
          sections: [
            { title: "🚭 Курение в помещении запрещено", text: "Курить внутри дома нельзя. Пожалуйста, используйте отведённые наружные зоны." },
            { title: "🔇 Часы тишины", text: "С 23:00 просим соблюдать низкий уровень шума, чтобы уважать соседей и окружающую обстановку." },
            { title: "🎉 Без вечеринок и мероприятий", text: "Вечеринки, праздники или встречи, нарушающие спокойствие в доме или по соседству, не допускаются." },
            { title: "👥 Посетители и проживание", text: "Запрещено размещать или приглашать людей, которые не были заранее зарегистрированы при check-in. Количество проживающих должно всегда соответствовать подтверждённому бронированию." },
            { title: "🐾 Домашние животные", text: "Домашние животные допускаются по запросу. Проживание с питомцем оплачивается дополнительно: 25 EUR за весь срок проживания, плюс дополнительный залог в зависимости от веса животного, который вносится при check-in через приложение check-in или банковским переводом. Для маленьких и средних животных есть лежанка и миски, хотя мы рекомендуем привезти свои.", sheetKey: "petPolicy" },
            { title: "🏊 Бассейн и джакузи", text: "Посмотрите отдельные разделы о бассейне и джакузи с практическими рекомендациями по использованию во время проживания.", list: ["Перед использованием бассейна или джакузи обязательно принять душ.", "Не заносить песок в джакузи.", "Детям младше 12 лет нельзя пользоваться джакузи без присмотра взрослого.", "Детей нельзя оставлять одних в зоне бассейна."], links: [{ label: "Советы по использованию бассейна", href: "#house-pool" }, { label: "Советы по использованию джакузи", href: "#house-jacuzzi" }] },
            { title: "🔥 Барбекю / камин", text: "В разделе о барбекю вы также найдёте практические советы по розжигу и безопасному завершению использования.", list: ["Для розжига углей всегда используйте специальные кубики и систему розжига.", "Не используйте горючие жидкости.", "Убедитесь, что угли полностью потушены после окончания использования."], links: [{ label: "Советы по использованию барбекю", href: "#house-bbq" }] },
            { title: "❄️ Кондиционер и отопление", text: "Пожалуйста, используйте кондиционер и отопление ответственно и выключайте их при выходе из дома." },
            { title: "🗑️ Мусор и переработка", text: "Мусор следует регулярно выносить в ближайшие контейнеры. Помогите нам сохранять территорию чистой.", list: ["🟩 Зелёный: общий мусор", "🟦 Синий: бумага и картон", "🟨 Жёлтый: упаковка и пластик", "♻️ Стекло: специальные контейнеры для стекла"] }
          ]
        }
      },
      content: {
        infoSheets: {
          arrivalRegistration: {
            eyebrow: "Заезд",
            title: "🪪 Регистрация путешественников и онлайн check-in",
            text: "Все проживающие гости должны зарегистрироваться через приложение check-in, поскольку в Испании эти данные обязательно передаются в полицию.\nСреда безопасна, а данные удостоверения личности используются только для выполнения этого юридического требования.\nОбычно заранее вы получаете персональную ссылку по электронной почте или в сообщении, чтобы заполнить регистрацию онлайн до приезда. Если это не было сделано, один из хозяев соберёт данные во время check-in до входа в жильё."
          },
          petPolicy: {
            eyebrow: "Правила",
            title: "🐾 Домашние животные: условия и залог",
            text: "Домашние животные принимаются только по запросу, и важно сообщить об этом сразу после бронирования. Если это не было сообщено заранее, мы не можем гарантировать проживание с животным.\n\nПроживание с питомцем оплачивается дополнительно: 25 EUR за весь срок проживания, а не за ночь.\nТакже требуется дополнительный залог на случай возможного ущерба или дополнительной уборки, который оплачивается при check-in через приложение check-in или банковским переводом.\n\nНа вилле есть лежанка и миски для маленьких или средних животных, хотя мы рекомендуем привезти свои, чтобы животному было комфортнее.",
            list: ["До 10 кг: залог 150 EUR за проживание.", "Свыше 10 кг: залог 260 EUR за проживание.", "У животного должна быть действующая ветеринарная карта с актуальными прививками и обработкой от паразитов.", "Собаки должны находиться на поводке и, при необходимости, в наморднике, всегда под наблюдением владельца или уполномоченного сопровождающего.", "Потенциально опасные или агрессивные животные, включая породы, считающиеся таковыми по действующим правилам, не принимаются.", "Животным нельзя находиться на кроватях и диванах. У них должна быть собственная лежанка или плед.", "Нельзя использовать полотенца, простыни или постельное бельё виллы для животного, а также нельзя допускать, чтобы питомец справлял нужду внутри апартаментов.", "Владельцы обязаны убирать любую грязь, оставленную животным в доме, общих зонах или на путях доступа.", "Повреждения, пятна, запахи или специальная чистка текстиля, мебели или оборудования оцениваются и вычитаются из залога либо, при необходимости, оплачиваются отдельно по фактической стоимости замены или ремонта.", "Если проблем не обнаружено, залог возвращается после check-out. При наличии ущерба или сильного загрязнения гостю сообщат об этом и применят соответствующую сумму."]
          }
        }
      }
    },
    da: {
      property: {
        houseRules: {
          intro: "🙏 Behandl venligst boligen med omhu og respekt, som om den var din egen. Disse regler hjælper med at gøre opholdet behageligt, sikkert og roligt for alle. Skader eller problemer skal meldes så hurtigt som muligt.",
          sections: [
            { title: "🚭 Ingen rygning indendørs", text: "Det er ikke tilladt at ryge inde i boligen. Brug venligst de udendørs områder, der er beregnet til det." },
            { title: "🔇 Stilletid", text: "Fra kl. 23.00 beder vi om, at støjniveauet holdes lavt af hensyn til naboer og omgivelser." },
            { title: "🎉 Ingen fester eller arrangementer", text: "Fester, fejringer eller sammenkomster, der forstyrrer roen i boligen eller området, er ikke tilladt." },
            { title: "👥 Besøg og belægning", text: "Det er ikke tilladt at indlogere eller invitere personer, som ikke på forhånd er registreret ved check-in. Antallet af gæster skal altid svare til den bekræftede reservation." },
            { title: "🐾 Kæledyr", text: "Kæledyr er tilladt efter anmodning. Ophold med kæledyr har et tillæg på 25 EUR pr. ophold samt et ekstra depositum afhængigt af dyrets vægt, som betales ved check-in via check-in-appen eller bankoverførsel. Der findes en dyrekurv og madskåle til små eller mellemstore dyr, men vi anbefaler at medbringe egne.", sheetKey: "petPolicy" },
            { title: "🏊 Pool og jacuzzi", text: "Se de særlige sektioner om pool og jacuzzi for praktiske råd under opholdet.", list: ["Det er obligatorisk at tage brusebad før brug af pool eller jacuzzi.", "Tag ikke sand med i jacuzzien.", "Jacuzzien må ikke bruges af børn under 12 år uden opsyn af en voksen.", "Børn må aldrig være alene i poolområdet."], links: [{ label: "Råd om brug af poolen", href: "#house-pool" }, { label: "Råd om brug af jacuzzien", href: "#house-jacuzzi" }] },
            { title: "🔥 Grill / pejs", text: "I grillsektionen finder du også praktiske råd om optænding og sikker afslutning.", list: ["Brug altid optændingsblokke og skorstenstænder til at tænde kullene.", "Brug ikke brandfarlige væsker.", "Sørg for, at kullene er helt slukkede, når du er færdig."], links: [{ label: "Råd om brug af grillen", href: "#house-bbq" }] },
            { title: "❄️ Aircondition og varme", text: "Brug aircondition og varme ansvarligt, og sluk dem, når du forlader boligen." },
            { title: "🗑️ Affald og genbrug", text: "Affald bør regelmæssigt afleveres i de nærliggende containere. Hjælp os med at holde området rent.", list: ["🟩 Grøn: restaffald", "🟦 Blå: papir og pap", "🟨 Gul: emballage og plast", "♻️ Glas: særlige glascontainere"] }
          ]
        }
      },
      content: {
        infoSheets: {
          arrivalRegistration: {
            eyebrow: "Ankomst",
            title: "🪪 Registrering af rejsende og online check-in",
            text: "Alle overnattende gæster skal registreres via check-in-appen, fordi disse oplysninger i Spanien skal indberettes til politiet.\nMiljøet er sikkert, og oplysningerne fra identitetsdokumentet bruges kun til at opfylde denne lovpligtige forpligtelse.\nNormalt modtager du på forhånd et personligt link via e-mail eller besked, så du kan udfylde det online, men hvis det ikke er gjort, vil en af værterne indsamle oplysningerne ved check-in, før I får adgang til boligen."
          },
          petPolicy: {
            eyebrow: "Regler",
            title: "🐾 Kæledyr: vilkår og depositum",
            text: "Kæledyr accepteres kun efter anmodning, og det er vigtigt at oplyse dette lige efter reservationen. Hvis det ikke er meldt på forhånd, kan vi ikke garantere ophold med dyr.\n\nOphold med kæledyr har et tillæg på 25 EUR pr. ophold, ikke pr. nat.\nDerudover kræves et ekstra depositum for eventuelle skader eller ekstra rengøring, som betales ved check-in via check-in-appen eller bankoverførsel.\n\nBoligen har en dyrekurv og madskåle til små eller mellemstore dyr, men vi anbefaler at medbringe egne, så dyret føler sig mere trygt.",
            list: ["Op til 10 kg: depositum på 150 EUR pr. ophold.", "Over 10 kg: depositum på 260 EUR pr. ophold.", "Dyret skal have gyldigt sundhedskort, herunder vaccinationer og ormekur.", "Hunde skal holdes i snor og, når det kræves, med mundkurv, altid under opsyn af ejeren eller en autoriseret passer.", "Potentielt farlige eller aggressive dyr, herunder racer som efter gældende regler anses for sådanne, accepteres ikke.", "Kæledyr må ikke være i senge eller sofaer. De skal have deres egen kurv eller tæppe.", "Villaens håndklæder, lagner eller sengetøj må ikke bruges til dyret, og kæledyr må ikke forrette deres nødtørft inde i lejligheden.", "Ejere skal rengøre al snavs, som dyret efterlader i boligen, fællesområder eller adgangsveje.", "Skader, pletter, lugte eller ekstra rengøring af tekstiler, møbler eller udstyr vurderes og fratrækkes depositummet eller, hvis nødvendigt, opkræves separat efter den faktiske pris for udskiftning eller reparation.", "Hvis der ikke registreres problemer, tilbagebetales depositummet efter check-out. Hvis der er skader eller usædvanlig snavs, informeres gæsten, og den tilsvarende omkostning opkræves."]
          }
        }
      }
    },
    no: {
      property: {
        houseRules: {
          intro: "🙏 Vennligst behandle boligen med omsorg og respekt, som om den var din egen. Disse reglene bidrar til å holde oppholdet komfortabelt, trygt og rolig for alle. Skader eller problemer bør meldes så snart som mulig.",
          sections: [
            { title: "🚭 Ingen røyking innendørs", text: "Det er ikke tillatt å røyke inne i boligen. Bruk de utendørs områdene som er satt av til dette." },
            { title: "🔇 Stille tider", text: "Fra kl. 23.00 ber vi om at støynivået holdes lavt av hensyn til naboer og omgivelser." },
            { title: "🎉 Ingen fester eller arrangementer", text: "Fester, feiringer eller sammenkomster som forstyrrer roen i boligen eller nabolaget er ikke tillatt." },
            { title: "👥 Besøk og antall gjester", text: "Det er ikke tillatt å innkvartere eller invitere personer som ikke er registrert på forhånd ved check-in. Antall gjester må alltid samsvare med den bekreftede reservasjonen." },
            { title: "🐾 Kjæledyr", text: "Kjæledyr er tillatt på forespørsel. Opphold med kjæledyr har et tillegg på 25 EUR per opphold og et ekstra depositum avhengig av dyrets vekt, som betales ved check-in via check-in-appen eller bankoverføring. Det finnes dyreseng og matskåler for små eller mellomstore dyr, men vi anbefaler å ta med egne.", sheetKey: "petPolicy" },
            { title: "🏊 Basseng og jacuzzi", text: "Se de egne seksjonene om basseng og jacuzzi for praktiske brukstips under oppholdet.", list: ["Det er obligatorisk å dusje før bruk av basseng eller jacuzzi.", "Ikke ta sand med i jacuzzien.", "Jacuzzien må ikke brukes av barn under 12 år uten tilsyn av en voksen.", "Barn må aldri være alene i bassengområdet."], links: [{ label: "Tips for bruk av bassenget", href: "#house-pool" }, { label: "Tips for bruk av jacuzzien", href: "#house-jacuzzi" }] },
            { title: "🔥 Grill / peis", text: "I grillseksjonen finner du også praktiske tips om opptenning og sikker avslutning.", list: ["Bruk alltid opptenningsbrikker og opptenningssystemet for å tenne kullene.", "Ikke bruk brennbare væsker.", "Sørg for at kullene er helt slukket når du er ferdig."], links: [{ label: "Tips for bruk av grillen", href: "#house-bbq" }] },
            { title: "❄️ Aircondition og oppvarming", text: "Bruk aircondition og oppvarming ansvarlig og slå dem av når du forlater boligen." },
            { title: "🗑️ Søppel og resirkulering", text: "Søppel bør leveres jevnlig i de nærliggende containerne. Hjelp oss med å holde området rent.", list: ["🟩 Grønn: restavfall", "🟦 Blå: papir og papp", "🟨 Gul: emballasje og plast", "♻️ Glass: egne glasscontainere"] }
          ]
        }
      },
      content: {
        infoSheets: {
          arrivalRegistration: {
            eyebrow: "Ankomst",
            title: "🪪 Registrering av reisende og online check-in",
            text: "Alle gjester som skal bo i villaen må registreres gjennom check-in-appen fordi disse opplysningene i Spania må rapporteres til politiet.\nMiljøet er trygt, og opplysningene fra identitetsdokumentet brukes kun for å oppfylle denne lovpålagte forpliktelsen.\nNormalt får du en personlig lenke på e-post eller melding på forhånd for å kunne gjøre dette online, men hvis det ikke er gjort, vil en av vertene samle inn opplysningene ved check-in før dere får tilgang til boligen."
          },
          petPolicy: {
            eyebrow: "Regler",
            title: "🐾 Kjæledyr: vilkår og depositum",
            text: "Kjæledyr aksepteres kun på forespørsel, og det er viktig å melde fra om dette rett etter bestilling. Hvis det ikke er varslet på forhånd, kan vi ikke garantere opphold med dyr.\n\nOpphold med kjæledyr har et tillegg på 25 EUR per opphold, ikke per natt.\nI tillegg kreves et ekstra depositum for eventuell skade eller ekstra rengjøring, som betales ved check-in via check-in-appen eller bankoverføring.\n\nBoligen har dyreseng og matskåler tilgjengelig for små eller mellomstore dyr, men vi anbefaler å ta med egne slik at dyret føler seg mer komfortabelt.",
            list: ["Opptil 10 kg: depositum på 150 EUR per opphold.", "Over 10 kg: depositum på 260 EUR per opphold.", "Dyret må ha gyldig helsekort, inkludert vaksiner og ormekur.", "Hunder må holdes i bånd og, når det kreves, med munnkurv, alltid under oppsyn av eieren eller en autorisert omsorgsperson.", "Potensielt farlige eller aggressive dyr, inkludert raser som regnes som slike etter gjeldende regler, aksepteres ikke.", "Kjæledyr har ikke lov til å være i senger eller sofaer. De må ha sin egen seng eller sitt eget teppe.", "Villaens håndklær, laken eller sengetøy må ikke brukes til dyret, og kjæledyr skal ikke gjøre fra seg inne i leiligheten.", "Eiere må rydde opp alt smuss dyret etterlater inne i boligen, i fellesområder eller på adkomstveier.", "Skader, flekker, lukt eller ekstra rengjøring av tekstiler, møbler eller utstyr vurderes og trekkes fra depositummet eller, om nødvendig, faktureres separat basert på reell erstatnings- eller reparasjonskostnad.", "Hvis det ikke oppdages problemer, refunderes depositummet etter check-out. Hvis det er skade eller ekstraordinært smuss, vil gjesten bli informert og tilsvarende kostnad bli belastet."]
          }
        }
      }
    }
  };

  Object.entries(detailedLocalePatches).forEach(([code, patch]) => {
    localePatches[code] = mergeLocale(localePatches[code], patch);
  });

  Object.entries(localePatches).forEach(([code, patch]) => {
    siteData.translations[code] = mergeLocale(siteData.translations.en, patch);
  });

  if (!generatedPlacesData?.en) return;

  const generatedLocaleText = {
    fr: {
      introTitle: "Liste Google Maps partagée",
      introBody:
        "Cette section résume la liste Google Maps partagée de l'hôte et l'organise en groupes plus simples comme restaurants, supermarchés, shopping, sport et aventures ou zones pour enfants.\nL'action la plus utile est d'ouvrir la liste complète dans Google Maps, de l'enregistrer dans votre compte et d'utiliser ce résumé web uniquement comme aide rapide pendant le séjour.\nLes distances et durées sont des estimations à partir de la villa.",
      openList: "🗺️ Ouvrir et enregistrer la liste dans Google Maps",
      tourism: "Tourisme Pilar de la Horadada",
      categories: { restaurants: ["Restaurants", "Manger et boire"], supermarkets: ["Supermarchés", "Pratique"], shopping: ["Shopping", "Boutiques et centres"], sports: ["Sport et aventures", "Plans actifs"], parks: ["Zones pour enfants", "Extérieur"] },
      subgroups: { restaurants: "🍽️ Restaurants", bars: "🍹 Bars et chiringuitos", cafes: "☕ Cafés", "ice-cream": "🍦 Glaces et douceurs", supermarkets: "🛒 Supermarchés", shopping: "🛍️ Shopping et centres", sports: "💪 Sport et aventures", tourism: "🧭 Tourisme et visites", padel: "🎾 Padel", golf: "⛳ Golf", parks: "🛝 Zones pour enfants", attractions: "🎡 Parcs d'attractions" },
      closed: "⚠️ Fermé temporairement"
    },
    de: {
      introTitle: "Geteilte Google-Maps-Liste",
      introBody:
        "Dieser Bereich fasst die geteilte Google-Maps-Liste des Gastgebers zusammen und ordnet sie in einfachere Gruppen wie Restaurants, Supermärkte, Shopping, Sport & Abenteuer oder Kinderbereiche.\nDie wichtigste Aktion ist, die vollständige Liste in Google Maps zu öffnen, in deinem Konto zu speichern und diese Web-Zusammenfassung nur als schnellen Überblick während des Aufenthalts zu nutzen.\nEntfernungen und Zeiten sind ungefähre Referenzen ab der Villa.",
      openList: "🗺️ Liste in Google Maps öffnen und speichern",
      tourism: "Tourismus Pilar de la Horadada",
      categories: { restaurants: ["Restaurants", "Essen & Trinken"], supermarkets: ["Supermärkte", "Einkauf"], shopping: ["Shopping", "Läden & Zentren"], sports: ["Sport & Abenteuer", "Aktive Pläne"], parks: ["Kinderbereiche", "Draußen"] },
      subgroups: { restaurants: "🍽️ Restaurants", bars: "🍹 Bars und Chiringuitos", cafes: "☕ Cafés", "ice-cream": "🍦 Eis & Süßes", supermarkets: "🛒 Supermärkte", shopping: "🛍️ Shopping & Zentren", sports: "💪 Sport & Abenteuer", tourism: "🧭 Tourismus & Besuche", padel: "🎾 Padel", golf: "⛳ Golf", parks: "🛝 Kinderbereiche", attractions: "🎡 Freizeitparks" },
      closed: "⚠️ Vorübergehend geschlossen"
    },
    nl: {
      introTitle: "Gedeelde Google Maps-lijst",
      introBody:
        "Dit deel vat de gedeelde Google Maps-lijst van de host samen en ordent die in eenvoudigere groepen zoals restaurants, supermarkten, winkelen, sport & avontuur of kinderzones.\nDe belangrijkste actie is de volledige lijst in Google Maps te openen, op te slaan in je account en deze websamenvatting alleen als snelle referentie tijdens het verblijf te gebruiken.\nAfstanden en tijden zijn benaderingen vanaf de villa.",
      openList: "🗺️ Lijst openen en opslaan in Google Maps",
      tourism: "Toerisme Pilar de la Horadada",
      categories: { restaurants: ["Restaurants", "Eten & drinken"], supermarkets: ["Supermarkten", "Praktisch"], shopping: ["Winkelen", "Winkels & centra"], sports: ["Sport & avontuur", "Actieve plannen"], parks: ["Kinderzones", "Buiten"] },
      subgroups: { restaurants: "🍽️ Restaurants", bars: "🍹 Bars en chiringuitos", cafes: "☕ Cafés", "ice-cream": "🍦 IJs & zoet", supermarkets: "🛒 Supermarkten", shopping: "🛍️ Winkelen & centra", sports: "💪 Sport & avontuur", tourism: "🧭 Toerisme & bezoeken", padel: "🎾 Padel", golf: "⛳ Golf", parks: "🛝 Kinderzones", attractions: "🎡 Attractieparken" },
      closed: "⚠️ Tijdelijk gesloten"
    },
    sv: {
      introTitle: "Delad Google Maps-lista",
      introBody:
        "Den här delen sammanfattar värdens delade Google Maps-lista och ordnar den i enklare grupper som restauranger, stormarknader, shopping, sport & äventyr eller barnområden.\nDet viktigaste är att öppna hela listan i Google Maps, spara den i ditt konto och använda den här webbsammanfattningen som en snabb referens under vistelsen.\nAvstånd och tider visas som ungefärliga referenser från villan.",
      openList: "🗺️ Öppna och spara listan i Google Maps",
      tourism: "Turism Pilar de la Horadada",
      categories: { restaurants: ["Restauranger", "Mat & dryck"], supermarkets: ["Stormarknader", "Praktiskt"], shopping: ["Shopping", "Butiker & centrum"], sports: ["Sport & äventyr", "Aktiva planer"], parks: ["Barnområden", "Utomhus"] },
      subgroups: { restaurants: "🍽️ Restauranger", bars: "🍹 Barer och chiringuitos", cafes: "☕ Kaféer", "ice-cream": "🍦 Glass & sött", supermarkets: "🛒 Stormarknader", shopping: "🛍️ Shopping & centrum", sports: "💪 Sport & äventyr", tourism: "🧭 Turism & besök", padel: "🎾 Padel", golf: "⛳ Golf", parks: "🛝 Barnområden", attractions: "🎡 Nöjesparker" },
      closed: "⚠️ Tillfälligt stängt"
    },
    pl: {
      introTitle: "Udostępniona lista Google Maps",
      introBody:
        "Ta sekcja podsumowuje udostępnioną listę Google Maps gospodarza i porządkuje ją w prostsze grupy, takie jak restauracje, supermarkety, zakupy, sport i przygoda czy strefy dla dzieci.\nNajważniejsze jest otwarcie pełnej listy w Google Maps, zapisanie jej na swoim koncie i używanie tego podsumowania jako szybkiej pomocy podczas pobytu.\nOdległości i czasy są orientacyjne i liczone od willi.",
      openList: "🗺️ Otwórz i zapisz listę w Google Maps",
      tourism: "Turystyka Pilar de la Horadada",
      categories: { restaurants: ["Restauracje", "Jedzenie i napoje"], supermarkets: ["Supermarkety", "Zakupy codzienne"], shopping: ["Zakupy", "Sklepy i centra"], sports: ["Sport i przygoda", "Aktywne plany"], parks: ["Strefy dla dzieci", "Na zewnątrz"] },
      subgroups: { restaurants: "🍽️ Restauracje", bars: "🍹 Bary i chiringuito", cafes: "☕ Kawiarnie", "ice-cream": "🍦 Lody i słodkości", supermarkets: "🛒 Supermarkety", shopping: "🛍️ Zakupy i centra", sports: "💪 Sport i przygoda", tourism: "🧭 Turystyka i wizyty", padel: "🎾 Padel", golf: "⛳ Golf", parks: "🛝 Strefy dla dzieci", attractions: "🎡 Parki rozrywki" },
      closed: "⚠️ Tymczasowo zamknięte"
    },
    ru: {
      introTitle: "Общий список Google Maps",
      introBody:
        "Этот раздел кратко показывает общий список Google Maps хозяина и упрощает его по категориям: рестораны, супермаркеты, шопинг, спорт и приключения или детские зоны.\nГлавное действие — открыть полный список в Google Maps, сохранить его в своём аккаунте и использовать это веб-резюме как быстрый ориентир во время проживания.\nРасстояния и время указаны приблизительно от виллы.",
      openList: "🗺️ Открыть и сохранить список в Google Maps",
      tourism: "Туризм Pilar de la Horadada",
      categories: { restaurants: ["Рестораны", "Еда и напитки"], supermarkets: ["Супермаркеты", "Покупки"], shopping: ["Шопинг", "Магазины и центры"], sports: ["Спорт и приключения", "Активный отдых"], parks: ["Детские зоны", "На улице"] },
      subgroups: { restaurants: "🍽️ Рестораны", bars: "🍹 Бары и чирингито", cafes: "☕ Кафе", "ice-cream": "🍦 Мороженое и сладости", supermarkets: "🛒 Супермаркеты", shopping: "🛍️ Шопинг и центры", sports: "💪 Спорт и приключения", tourism: "🧭 Туризм и посещения", padel: "🎾 Падел", golf: "⛳ Гольф", parks: "🛝 Детские зоны", attractions: "🎡 Парки развлечений" },
      closed: "⚠️ Временно закрыто"
    },
    da: {
      introTitle: "Delt Google Maps-liste",
      introBody:
        "Denne sektion opsummerer værtens delte Google Maps-liste og samler den i enklere grupper som restauranter, supermarkeder, shopping, sport & eventyr eller børneområder.\nDet vigtigste er at åbne den fulde liste i Google Maps, gemme den på din konto og bruge denne weboversigt som hurtig reference under opholdet.\nAfstande og tider vises som omtrentlige referencer fra villaen.",
      openList: "🗺️ Åbn og gem listen i Google Maps",
      tourism: "Turisme Pilar de la Horadada",
      categories: { restaurants: ["Restauranter", "Mad og drikke"], supermarkets: ["Supermarkeder", "Praktisk indkøb"], shopping: ["Shopping", "Butikker og centre"], sports: ["Sport & eventyr", "Aktive planer"], parks: ["Børneområder", "Udendørs"] },
      subgroups: { restaurants: "🍽️ Restauranter", bars: "🍹 Barer og chiringuitos", cafes: "☕ Caféer", "ice-cream": "🍦 Is og sødt", supermarkets: "🛒 Supermarkeder", shopping: "🛍️ Shopping og centre", sports: "💪 Sport & eventyr", tourism: "🧭 Turisme og besøg", padel: "🎾 Padel", golf: "⛳ Golf", parks: "🛝 Børneområder", attractions: "🎡 Forlystelsesparker" },
      closed: "⚠️ Midlertidigt lukket"
    },
    no: {
      introTitle: "Delt Google Maps-liste",
      introBody:
        "Denne delen oppsummerer vertens delte Google Maps-liste og ordner den i enklere grupper som restauranter, supermarkeder, shopping, sport og eventyr eller områder for barn.\nDet viktigste er å åpne hele listen i Google Maps, lagre den på kontoen din og bruke denne nettsammendraget som en rask referanse under oppholdet.\nAvstander og tider vises som omtrentlige referanser fra villaen.",
      openList: "🗺️ Åpne og lagre listen i Google Maps",
      tourism: "Turisme Pilar de la Horadada",
      categories: { restaurants: ["Restauranter", "Mat og drikke"], supermarkets: ["Supermarkeder", "Praktisk"], shopping: ["Shopping", "Butikker og sentre"], sports: ["Sport og eventyr", "Aktive planer"], parks: ["Barneområder", "Utendørs"] },
      subgroups: { restaurants: "🍽️ Restauranter", bars: "🍹 Barer og chiringuitos", cafes: "☕ Kafeer", "ice-cream": "🍦 Is og søtt", supermarkets: "🛒 Supermarkeder", shopping: "🛍️ Shopping og sentre", sports: "💪 Sport og eventyr", tourism: "🧭 Turisme og besøk", padel: "🎾 Padel", golf: "⛳ Golf", parks: "🛝 Barneområder", attractions: "🎡 Fornøyelsesparker" },
      closed: "⚠️ Midlertidig stengt"
    }
  };

  const translateGenerated = (code, localeText) => {
    const base = clone(generatedPlacesData.en);
    base.foodIntro.title = localeText.introTitle;
    base.foodIntro.body = localeText.introBody;
    base.foodIntro.tags = ["Google Maps", `${generatedPlacesData.meta.totalPlaces} ${code === "ru" ? "мест" : code === "pl" ? "zapisanych miejsc" : code === "de" ? "gespeicherte Orte" : code === "fr" ? "lieux enregistrés" : code === "nl" ? "opgeslagen plekken" : code === "sv" ? "sparade platser" : code === "da" ? "gemte steder" : "lagrede steder"}`];
    base.foodIntro.links = [
      { label: localeText.openList, href: generatedPlacesData.meta.sourceUrl },
      { label: localeText.tourism, href: "https://www.visitpilardelahoradada.com/" }
    ];
    base.foodCategories = base.foodCategories.map((category) => {
      const categoryId = category.id.replace("food-", "");
      const [title, description] = localeText.categories[categoryId] || [category.title, category.description];
      return {
        ...category,
        title,
        description,
        subgroups: category.subgroups.map((subgroup) => ({
          ...subgroup,
          title: localeText.subgroups[subgroup.id] || subgroup.title,
          items: subgroup.items.map((item) => ({
            ...item,
            statusLabel: item.temporarilyClosed ? localeText.closed : item.statusLabel
          }))
        }))
      };
    });
    generatedPlacesData[code] = base;
  };

  Object.entries(generatedLocaleText).forEach(([code, localeText]) => {
    translateGenerated(code, localeText);
  });
})();
