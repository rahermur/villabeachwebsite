window.siteData = {
  localeOptions: {
    auto: { code: "auto", flag: "🌍" },
    es: { code: "es", flag: "🇪🇸", label: "Español" },
    en: { code: "en", flag: "🇬🇧", label: "English" },
  },
  shared: {
    auth: {
      sessionKey: "villa-guide-access",
      codeHash: "4c4d26e1476ca1f1d92b4cfc798b11ba033422fc21fef89580b106e5544e1bae",
    },
    address: "Calle Dalia 31, Pilar de la Horadada, Alicante",
    links: {
      mapsRoute:
        "https://www.google.com/maps/search/?api=1&query=Calle+Dalia+31%2C+Pilar+de+la+Horadada",
      hostList: "https://maps.app.goo.gl/abxeaTyqkJ7zVvQr8",
      beach:
        "https://www.visitpilardelahoradada.com/es/disfruta_pilar_horadada/playas_calas/playa/2-playa-las-higuericas",
      beaches: "https://www.visitpilardelahoradada.com/es/que_ver_hacer/playas",
      kids: "https://www.visitpilardelahoradada.com/es/que_ver_hacer/ninyos",
      tourism: "https://www.visitpilardelahoradada.com/",
      restaurantsGuide:
        "https://www.visitpilardelahoradada.com/es/donde_comer/guia_hosteleria/torre-de-la-horadada",
      restaurantsMap:
        "https://www.google.com/maps/search/restaurantes+Torre+de+la+Horadada/",
      restaurantPirata:
        "https://www.visitpilardelahoradada.com/es/donde_comer/guia_hosteleria/torre-de-la-horadada/restaurante-pirata-club-nautico",
      restaurantPlaza:
        "https://www.visitpilardelahoradada.com/es/donde_comer/guia_hosteleria/torre-de-la-horadada/restaurante-pizzeria-plaza",
      restaurantVictoria:
        "https://www.visitpilardelahoradada.com/es/donde_comer/guia_hosteleria/torre-de-la-horadada/victoria",
      hospitalTorrevieja: "https://maps.app.goo.gl/RAt93ryTqsfxW2Sk8?g_st=ic",
      healthCenterPilar: "https://maps.app.goo.gl/EtXs98aJRLowzuaFA?g_st=ic",
      pharmacyHiguericas: "https://maps.app.goo.gl/wHhwLXKyxJy2RuLa9?g_st=ic",
      dutyPharmacy:
        "https://mas.diarioinformacion.com/farmacias/zona/pilar_de_la_horadada",
    },
    property: {
      wifi: {
        network: "Flexa_B2A4",
        password: "YGwXpRE8",
      },
      checkInTime: "15:00",
      checkOutTime: "12:00",
      photos: [
        {
          src: "./assets/playa.jpg",
          alt: {
            es: "Vista exterior de la villa con piscina privada y terraza",
            en: "Exterior view of the villa with private pool and terrace",
          },
        },
        {
          src: "./assets/photo-placeholder-1.jpg",
          alt: {
            es: "Añadir foto del salón o la cocina",
            en: "Add a living room or kitchen photo",
          },
        },
        {
          src: "./assets/photo-placeholder-3.jpeg",
          alt: {
            es: "Añadir foto del jacuzzi o del exterior",
            en: "Add a hot tub or outdoor photo",
          },
        },
      ],
    },
  },
  translations: {
    es: {
      meta: {
        title: "Guía de la Villa | Playa de las Higuericas",
        description:
          "Guía digital para huéspedes de una villa en la calle Dalia 31, Pilar de la Horadada.",
        htmlLang: "es",
      },
      ui: {
        heroEyebrow: "Beach House Guide",
        summaryEyebrow: "Resumen",
        languageLabel: "Idioma",
        selectedLanguageLabel: "Seleccionado",
        logoutLabel: "Cerrar acceso",
        autoLabel: "Auto",
        activeLanguage: "Español",
        activeLanguageAuto: "Automático (%s)",
        nav: {
          checkin: "Llegada y salida",
          house: "Casa",
          rules: "Normas",
          food: "Para disfrutar",
          hosts: "Anfitrión",
          emergencies: "Emergencias",
        },
        sectionLabels: {
          address: "Dirección",
        },
        gate: {
          eyebrow: "Guest Access",
          title: "Acceso privado",
          description:
            "Introduce tu código de huésped para ver la guía completa de la villa.",
          inputLabel: "Código de acceso",
          submit: "Entrar",
          hint: "Si no lo tienes, pídelo al anfitrión.",
          error: "Código incorrecto. Inténtalo de nuevo.",
        },
        viewMoreLabel: "Ver detalle",
      },
      sections: {
        checkin: { eyebrow: "Llegada", title: "Llegada y salida" },
        house: { eyebrow: "En la villa", title: "Todo en la villa" },
        rules: { eyebrow: "Convivencia", title: "Normas de la casa" },
        food: { eyebrow: "Para disfrutar", title: "Restaurantes, planes y favoritos" },
        hosts: { eyebrow: "Anfitriones", title: "Contacto del anfitrión" },
        emergencies: { eyebrow: "Emergencias", title: "Ayuda rápida y asistencia" },
      },
      hero: {
        title: "Villa Dalia 31",
        description:
          "Bienvenidos a nuestra villa. Esperamos que disfrutéis de vuestra estancia, del buen clima y de todas las comodidades de la casa. Esta guía reúne lo esencial para la llegada, la salida, el uso de la vivienda y la información práctica de la zona.",
        actions: [
          { label: "Cómo llegar", hrefKey: "mapsRoute", style: "sea" },
          { label: "Lista de sitios", hrefKey: "hostList" },
          { label: "Anfitrión", href: "#hosts" },
        ],
        facts: [
          { label: "Check-in", valueKey: "checkInTime" },
          { label: "Check-out", valueKey: "checkOutTime" },
          { label: "Wi-Fi", valueKey: "wifi.network" },
          { label: "Clave Wi-Fi", valueKey: "wifi.password" },
        ],
        addressHint:
          "A pocos minutos andando de la Playa de las Higuericas y con acceso sencillo en coche.",
      },
      property: {
        arrivalFlow: {
          details: [],
        },
        jacuzzi: [
          "Ducharse antes de usarlo y mantener la tapa cerrada cuando no se utilice.",
          "No introducir arena ni objetos de cristal.",
          "No manipular el cuadro técnico, los filtros ni la química del agua.",
          "El uso del jacuzzi implica un coste adicional de 60 EUR y debe solicitarse con al menos 2 días de antelación.",
        ],
        pool: [
          "No correr alrededor de la piscina ni dejar a menores sin supervisión.",
          "La piscina exterior puede climatizarse con un coste adicional de 60 EUR solicitándolo con al menos 5 días de antelación.",
          "No introducir objetos de cristal ni comida en el agua.",
        ],
        bbq: [
          "Usar siempre pastillas de encendido y el sistema de la chimenea para encender las brasas.",
          "No utilizar líquidos inflamables.",
          "Asegurarse de que las brasas queden completamente apagadas al finalizar.",
        ],
        houseRules: {
          intro:
            "🙏 Te pedimos tratar la vivienda con cuidado y respeto, como si fuera tuya. Estas normas ayudan a mantener una estancia cómoda, segura y tranquila para todos. Cualquier daño o incidencia debe comunicarse lo antes posible.",
          sections: [
            {
              title: "🚭 No fumar en el interior",
              text:
                "No está permitido fumar dentro de la vivienda. Utiliza las zonas exteriores habilitadas.",
            },
            {
              title: "🔇 Horas de descanso",
              text:
                "A partir de las 23:00 h, rogamos mantener un nivel de ruido bajo para respetar el descanso del vecindario.",
            },
            {
              title: "🎉 No fiestas ni eventos",
              text:
                "No están permitidas fiestas, celebraciones o reuniones que alteren la tranquilidad de la vivienda o del entorno.",
            },
            {
              title: "👥 Visitas y ocupación",
              text:
                "No se permite alojar o invitar a personas no registradas previamente durante el check-in. La ocupación debe respetar siempre la reserva confirmada.",
            },
            {
              title: "🏊 Piscina y jacuzzi",
              list: [
                "Es obligatorio ducharse antes de usar la piscina o el jacuzzi.",
                "No introducir arena en el jacuzzi.",
                "El jacuzzi no debe ser utilizado por menores de 12 años sin supervisión adulta.",
                "Los niños no deben permanecer solos en la piscina en ningún momento.",
              ],
            },
            {
              title: "🔥 Barbacoa / chimenea",
              list: [
                "Utilizar siempre pastillas de encendido y el sistema de la chimenea para encender las brasas.",
                "No utilizar líquidos inflamables.",
                "Asegurarse de que las brasas quedan completamente apagadas al finalizar.",
              ],
            },
            {
              title: "❄️ Aire acondicionado y calefacción",
              text:
                "Utiliza el aire acondicionado y la calefacción de forma responsable y apágalos al salir de la vivienda.",
            },
            {
              title: "🗑️ Basura y reciclaje",
              text:
                "La basura debe depositarse periódicamente en los contenedores cercanos. Ayúdanos a mantener el entorno limpio.",
              list: [
                "🟩 Verde: residuos generales",
                "🟦 Azul: papel y cartón",
                "🟨 Amarillo: envases y plásticos",
                "♻️ Vidrio: contenedores específicos de vidrio",
              ],
            },
          ],
        },
      },
      content: {
        checkInCards: [
          {
            title: "🛬 Llegada",
            text:
              "Coordina la llegada con el anfitrión a partir de las 15:00.\nAntes de venir, completa si es posible el check-in online desde el enlace personal enviado previamente por email o mensaje.\nEn el check-in se recordarán las normas de la casa y se resolverá cualquier duda necesaria.",
            tags: ["Llegada", "Desde las 15:00"],
            layout: "half",
            sheetKey: "arrivalRegistration",
          },
          {
            title: "🧳 Salida",
            text:
              "La referencia de salida es hasta las 12:00.\nSi necesitas late check-out, solicítalo con antelación para comprobar disponibilidad.\nNo hace falta quedar en persona con el anfitrión para devolver las llaves: solo avisa de que vais a abandonar la vivienda y sigue las indicaciones acordadas.",
            tags: ["Check-out", "Late check-out"],
            layout: "half",
            list: [
              "🍽️ Deja la cocina recogida y saca la basura si es posible.",
              "💡 Apaga luces y climatización y cierra puertas y ventanas.",
              "📩 Avisa al anfitrión cuando salgáis de la vivienda.",
            ],
          },
        ],
        infoSheets: {
          arrivalRegistration: {
            eyebrow: "Llegada",
            title: "🪪 Registro de viajeros y check-in online",
            text:
              "Todas las personas alojadas deben registrarse en la aplicación de check-in porque en España es obligatorio comunicar esos datos a la policía.\nEl entorno es seguro y los datos del documento de identidad solo se usan para cumplir con esta obligación.\nNormalmente recibirás previamente por email o mensaje un enlace personal para hacerlo online con antelación, pero si no lo hubieras completado, uno de los anfitriones tomará los datos durante el check-in antes de entrar en la vivienda.",
          },
        },
        houseBasics: [
          {
            title: "📶 Wi-Fi",
            text:
              "Red: [COMPLETAR_NOMBRE_WIFI]\nContraseña: [COMPLETAR_PASSWORD_WIFI]",
            list: [
              "💡 La conexión es de 1 Gb, así que debería ser bastante estable salvo si estás muy lejos del router.",
            ],
            tags: ["Internet", "1 Gb"],
          },
          {
            title: "📺 TV y streaming",
            text:
              "Puedes añadir tus cuentas de Netflix, Prime Video, Disney+ u otras plataformas durante la estancia.",
            list: [
              "🔐 Recuerda cerrar sesión en todas tus cuentas antes del check-out.",
            ],
            tags: ["TV", "Streaming"],
          },
        ],
        houseAccordions: [
          {
            title: "🏊 Piscina",
            eyebrow: "Exterior",
            summary: "Consejos rápidos para usar la piscina con seguridad y sin incidencias.",
            text: "Antes de usarla, revisa que la zona esté libre de objetos y mantén siempre la supervisión de menores.",
            listKey: "pool",
          },
          {
            title: "♨️ Jacuzzi",
            eyebrow: "Relax",
            summary: "Uso cómodo y seguro del jacuzzi durante la estancia.",
            text: "El jacuzzi requiere un uso cuidadoso y debe mantenerse cerrado cuando no se utiliza.",
            listKey: "jacuzzi",
          },
          {
            title: "🔥 Barbacoa",
            eyebrow: "Comer fuera",
            summary: "Cómo encenderla y dejarla bien al terminar.",
            text: "Utiliza la barbacoa con calma, sin acelerantes y dejando siempre las brasas completamente apagadas al final.",
            listKey: "bbq",
          },
        ],
        restaurants: [
          {
            title: "Restaurante Pirata Club Náutico",
            text:
              "Restaurante junto al puerto deportivo, recomendable si buscas una comida con vistas al entorno náutico.",
            tags: ["Puerto", "Espetos"],
            links: [{ label: "Ver ficha", hrefKey: "restaurantPirata" }],
          },
          {
            title: "Restaurante Pizzeria Plaza",
            text:
              "Buena alternativa si el grupo quiere variedad, con pizzas, arroces y menú del día.",
            tags: ["Arroces", "Pizza"],
            links: [{ label: "Ver ficha", hrefKey: "restaurantPlaza" }],
          },
          {
            title: "Victoria",
            text:
              "Opción muy adecuada para comidas largas o familiares, con cocina mediterránea y arroces.",
            tags: ["Familias", "Mediterráneo"],
            links: [{ label: "Ver ficha", hrefKey: "restaurantVictoria" }],
          },
          {
            title: "Más restaurantes",
            text:
              "La oferta cambia según la temporada. Si quieres ver más opciones abiertas en ese momento, usa la guía oficial o la búsqueda ya preparada.",
            tags: ["Actualizado", "Mapa"],
            links: [
              { label: "Guía oficial", hrefKey: "restaurantsGuide" },
              { label: "Abrir Google Maps", hrefKey: "restaurantsMap" },
            ],
          },
        ],
        activities: [
          {
            title: "Playa de las Higuericas",
            text:
              "Playa cómoda para familias y paseos al atardecer, muy cerca de la vivienda.",
            tags: ["Playa cercana", "Familias"],
            links: [{ label: "Ver playa", hrefKey: "beach" }],
          },
          {
            title: "Paseo marítimo y playas cercanas",
            text:
              "El entorno invita a caminar, ir en bici y alternar entre varias playas cercanas con buen acceso.",
            tags: ["Paseo", "Bicicleta"],
            links: [{ label: "Ver playas", hrefKey: "beaches" }],
          },
          {
            title: "Turismo local",
            text:
              "La web turística del municipio reúne rutas, agenda y propuestas para organizar planes durante la estancia.",
            tags: ["Agenda", "Rutas"],
            links: [{ label: "Web turística", hrefKey: "tourism" }],
          },
          {
            title: "Lista compartida del anfitrión",
            text:
              "Puedes abrir la lista compartida en Google Maps y guardarla en tu cuenta para tener a mano restaurantes, compras, farmacia y otros favoritos seleccionados por el anfitrión.",
            tags: ["Google Maps", "Útil"],
            links: [{ label: "Abrir lista", hrefKey: "hostList" }],
          },
        ],
        hostContacts: [
          {
            title: "Anfitrión principal",
            text:
              "Nombre: [COMPLETAR_NOMBRE]\nTeléfono / WhatsApp: [COMPLETAR_TEL]\nHorario recomendado de contacto: [COMPLETAR_HORARIO]",
            tags: ["Reserva", "Check-in"],
          },
          {
            title: "Contacto de apoyo",
            text:
              "Nombre: [COMPLETAR_NOMBRE]\nTeléfono / WhatsApp: [COMPLETAR_TEL]\nUsar si el contacto principal no responde.",
            tags: ["Incidencias"],
          },
        ],
        emergencies: [
          {
            title: "🚨 Número de emergencias",
            text:
              "👉 112 (Emergencias generales - gratuito, 24h)\nPolicía, ambulancia y bomberos.",
            tags: ["112", "Urgente"],
          },
          {
            title: "🏥 Hospital más cercano",
            text:
              "Hospital Universitario de Torrevieja\nC. Madrid, s/n, 03186 Torrevieja, Alicante.\nHospital general con urgencias 24h.\nA unos 15-20 minutos en coche desde Playa de las Higuericas.",
            tags: ["Hospital", "Urgencias 24h"],
            links: [{ label: "Abrir hospital", hrefKey: "hospitalTorrevieja" }],
          },
          {
            title: "🏥 Centro de salud más cercano",
            text:
              "Centro de Salud Pilar de la Horadada\nCalle Vicente Blasco Ibáñez s/n, 03190 Pilar de la Horadada, Alicante.\nAtención primaria.\nUrgencias básicas diurnas.\nA pocos minutos de la vivienda.",
            tags: ["Centro de salud", "Atención primaria"],
            links: [{ label: "Abrir centro de salud", hrefKey: "healthCenterPilar" }],
          },
          {
            title: "💊 Farmacia más cercana",
            text:
              "Farmacia Playa Las Higuericas Lda. M del Mar Lorenzo Bañón.\nA 450 m caminando de la vivienda.\nLa farmacia de guardia puede variar cada día.",
            tags: ["Farmacia", "Cerca"],
            links: [
              { label: "Abrir farmacia", hrefKey: "pharmacyHiguericas" },
              { label: "Ver farmacia de guardia", hrefKey: "dutyPharmacy" },
            ],
          },
          {
            title: "🏡 Seguridad dentro de la vivienda",
            text:
              "La vivienda dispone de elementos básicos para reaccionar ante una incidencia dentro de la casa.",
            list: [
              "🧯 Extintor contra incendios (ubicado en zona visible y accesible).",
              "🧰 Botiquín de primeros auxilios dentro del armario de la entrada.",
            ],
            tags: ["Seguridad", "Vivienda"],
          },
          {
            title: "👶 Supervisión de menores",
            text:
              "Los niños deben estar siempre supervisados en zonas exteriores, piscina y jacuzzi. La responsabilidad recae en los adultos acompañantes.",
            tags: ["Menores", "Piscina"],
          },
          {
            title: "🙏 Nota importante",
            text:
              "La vivienda está diseñada para ser segura, pero como en cualquier entorno vacacional con piscina y exterior, el uso responsable es esencial para evitar accidentes.",
            tags: ["Prevención"],
          },
        ],
      },
    },
    en: {
      meta: {
        title: "Villa Guide | Higuericas Beach",
        description:
          "Digital guest guide for a villa on Calle Dalia 31, Pilar de la Horadada.",
        htmlLang: "en",
      },
      ui: {
        heroEyebrow: "Beach House Guide",
        summaryEyebrow: "Summary",
        languageLabel: "Language",
        selectedLanguageLabel: "Selected",
        logoutLabel: "Sign out",
        autoLabel: "Auto",
        activeLanguage: "English",
        activeLanguageAuto: "Automatic (%s)",
        nav: {
          checkin: "Arrival & departure",
          house: "House",
          rules: "Rules",
          food: "To enjoy",
          hosts: "Host",
          emergencies: "Emergency",
        },
        sectionLabels: {
          address: "Address",
        },
        gate: {
          eyebrow: "Guest Access",
          title: "Private access",
          description: "Enter your guest code to view the full villa guide.",
          inputLabel: "Access code",
          submit: "Enter",
          hint: "If you do not have it, ask the host.",
          error: "Incorrect code. Please try again.",
        },
        viewMoreLabel: "View details",
      },
      sections: {
        checkin: { eyebrow: "Arrival", title: "Arrival & departure" },
        house: { eyebrow: "At the villa", title: "Everything at the villa" },
        rules: { eyebrow: "Stay well", title: "House rules" },
        food: { eyebrow: "To enjoy", title: "Restaurants, plans and favourites" },
        hosts: { eyebrow: "Hosts", title: "Host contact" },
        emergencies: { eyebrow: "Emergency", title: "Quick help and assistance" },
      },
      hero: {
        title: "Villa Dalia 31",
        description:
          "Welcome to the villa. This guide brings together the essentials for arrival, departure, house use and practical local information for a smooth stay by the sea.",
        actions: [
          { label: "How to get here", hrefKey: "mapsRoute", style: "sea" },
          { label: "Places list", hrefKey: "hostList" },
          { label: "Host", href: "#hosts" },
        ],
        facts: [
          { label: "Check-in", valueKey: "checkInTime" },
          { label: "Check-out", valueKey: "checkOutTime" },
          { label: "Wi-Fi", valueKey: "wifi.network" },
          { label: "Wi-Fi password", valueKey: "wifi.password" },
        ],
        addressHint: "A short walk from Playa de las Higuericas, with easy access by car.",
      },
      property: {
        arrivalFlow: {
          details: [],
        },
        jacuzzi: [
          "Shower before using it and keep the cover closed when it is not in use.",
          "Do not bring sand or glass objects into the hot tub.",
          "Do not touch the technical panel, filters or water treatment settings.",
          "Using the hot tub has an additional 60 EUR fee and must be requested at least 2 days before arrival.",
        ],
        pool: [
          "Do not run around the pool or leave children unsupervised.",
          "The outdoor pool can be heated for an additional 60 EUR if requested at least 5 days before arrival.",
          "Do not bring glass objects or food into the water.",
        ],
        bbq: [
          "Always use firelighters and the fireplace system to light the coals.",
          "Do not use flammable liquids.",
          "Make sure the coals are fully extinguished when finished.",
        ],
        houseRules: {
          intro:
            "🙏 Please treat the home with care and respect, as if it were your own. These rules help keep the stay comfortable, safe and calm for everyone. Any damage or issue should be reported as soon as possible.",
          sections: [
            {
              title: "🚭 No smoking indoors",
              text:
                "Smoking is not allowed inside the house. Please use the designated outdoor areas.",
            },
            {
              title: "🔇 Quiet hours",
              text:
                "From 11:00 pm onwards, please keep noise to a low level to respect the neighbours and the surrounding area.",
            },
            {
              title: "🎉 No parties or events",
              text:
                "Parties, celebrations or gatherings that disturb the house or the neighbourhood are not allowed.",
            },
            {
              title: "👥 Visitors and occupancy",
              text:
                "Guests may not host or invite people who were not previously registered at check-in. Occupancy must always match the confirmed reservation.",
            },
            {
              title: "🏊 Pool and hot tub",
              list: [
                "Showering before using the pool or hot tub is mandatory.",
                "Do not bring sand into the hot tub.",
                "The hot tub must not be used by children under 12 without adult supervision.",
                "Children must never be left alone in the pool area.",
              ],
            },
            {
              title: "🔥 Barbecue / fireplace",
              list: [
                "Always use firelighters and the fireplace system to light the coals.",
                "Do not use flammable liquids.",
                "Make sure the coals are fully extinguished when finished.",
              ],
            },
            {
              title: "❄️ Air conditioning and heating",
              text:
                "Please use air conditioning and heating responsibly and switch them off when leaving the house.",
            },
            {
              title: "🗑️ Rubbish and recycling",
              text:
                "Rubbish should be taken regularly to the nearby bins. Help us keep the area clean.",
              list: [
                "🟩 Green: general waste",
                "🟦 Blue: paper and cardboard",
                "🟨 Yellow: packaging and plastics",
                "♻️ Glass: dedicated glass containers",
              ],
            },
          ],
        },
      },
      content: {
        checkInCards: [
          {
            title: "🛬 Arrival",
            text:
              "Coordinate the arrival with the host from 3:00 pm onwards.\nBefore travelling, complete the online check-in if possible using the personal link previously sent by email or message.\nDuring check-in, the house rules can be reviewed and any questions can be answered.",
            tags: ["Arrival", "From 3:00 pm"],
            layout: "half",
            sheetKey: "arrivalRegistration",
          },
          {
            title: "🧳 Departure",
            text:
              "Reference check-out time is by 12:00 noon.\nIf you need a late check-out, ask in advance so availability can be confirmed.\nThere is no need to meet the host in person to return the keys: just let them know you are leaving and follow the agreed departure instructions.",
            tags: ["Check-out", "Late check-out"],
            layout: "half",
            list: [
              "🍽️ Leave the kitchen tidy and take rubbish out if possible.",
              "💡 Turn off lights and climate control and close doors and windows.",
              "📩 Let the host know when you leave the property.",
            ],
          },
        ],
        infoSheets: {
          arrivalRegistration: {
            eyebrow: "Arrival",
            title: "🪪 Traveller registration and online check-in",
            text:
              "All staying guests must register through the check-in app because in Spain those details must be reported to the police.\nThe environment is secure and identity document data is only used to comply with that legal obligation.\nGuests will normally receive a personal link by email or message in advance so they can complete it online, but if it has not been done, one of the hosts will collect the details during check-in before access to the property.",
          },
        },
        houseBasics: [
          {
            title: "📶 Wi-Fi",
            text:
              "Network: [COMPLETAR_NOMBRE_WIFI]\nPassword: [COMPLETAR_PASSWORD_WIFI]",
            list: [
              "💡 The connection is 1 Gb, so it should be quite stable unless you are far from the router.",
            ],
            tags: ["Internet", "1 Gb"],
          },
          {
            title: "📺 TV / streaming",
            text:
              "You can add your own Netflix, Prime Video, Disney+ or other streaming accounts during your stay.",
            list: [
              "🔐 Remember to log out of all your accounts before check-out.",
            ],
            tags: ["TV", "Streaming"],
          },
        ],
        houseAccordions: [
          {
            title: "🏊 Pool",
            eyebrow: "Outdoor",
            summary: "Quick guidance for safe and easy pool use.",
            text: "Before using it, make sure the area is clear and always supervise children.",
            listKey: "pool",
          },
          {
            title: "♨️ Hot tub",
            eyebrow: "Relax",
            summary: "Simple guidance for comfortable and safe hot tub use.",
            text: "The hot tub should be used carefully and kept closed when it is not in use.",
            listKey: "jacuzzi",
          },
          {
            title: "🔥 Barbecue",
            eyebrow: "Outdoor dining",
            summary: "How to light it and leave it safely afterwards.",
            text: "Use the barbecue calmly, avoid accelerants and always leave the coals fully extinguished at the end.",
            listKey: "bbq",
          },
        ],
        restaurants: [
          {
            title: "Pirata Club Nautico",
            text:
              "Restaurant by the marina, recommended if you want a meal with views over the nautical setting.",
            tags: ["Marina", "Grilled fish"],
            links: [{ label: "View listing", hrefKey: "restaurantPirata" }],
          },
          {
            title: "Pizzeria Plaza",
            text:
              "A good option if the group wants variety, with pizzas, rice dishes and a daily menu.",
            tags: ["Rice dishes", "Pizza"],
            links: [{ label: "View listing", hrefKey: "restaurantPlaza" }],
          },
          {
            title: "Victoria",
            text:
              "A strong option for longer or family meals, with Mediterranean cuisine and rice dishes.",
            tags: ["Families", "Mediterranean"],
            links: [{ label: "View listing", hrefKey: "restaurantVictoria" }],
          },
          {
            title: "More restaurants",
            text:
              "The offer changes by season. Use the official guide or the prepared search to see what is open.",
            tags: ["Up to date", "Map"],
            links: [
              { label: "Official guide", hrefKey: "restaurantsGuide" },
              { label: "Open Google Maps", hrefKey: "restaurantsMap" },
            ],
          },
        ],
        activities: [
          {
            title: "Playa de las Higuericas",
            text: "An easy beach for families and sunset walks, very close to the house.",
            tags: ["Nearby beach", "Families"],
            links: [{ label: "View beach", hrefKey: "beach" }],
          },
          {
            title: "Promenade and nearby beaches",
            text:
              "The area is ideal for walking, cycling and moving between nearby beaches with easy access.",
            tags: ["Walks", "Cycling"],
            links: [{ label: "View beaches", hrefKey: "beaches" }],
          },
          {
            title: "Local tourism",
            text:
              "The town tourism website gathers routes, events and ideas for the stay.",
            tags: ["Events", "Routes"],
            links: [{ label: "Tourism website", hrefKey: "tourism" }],
          },
          {
            title: "Host's shared list",
            text:
              "Open the shared Google Maps list and save it to your account to keep restaurants, shopping, pharmacy and other host favourites close at hand.",
            tags: ["Google Maps", "Useful"],
            links: [{ label: "Open list", hrefKey: "hostList" }],
          },
        ],
        hostContacts: [
          {
            title: "Main host",
            text:
              "Name: [COMPLETAR_NOMBRE]\nPhone / WhatsApp: [COMPLETAR_TEL]\nRecommended contact hours: [COMPLETAR_HORARIO]",
            tags: ["Booking", "Check-in"],
          },
          {
            title: "Backup contact",
            text:
              "Name: [COMPLETAR_NOMBRE]\nPhone / WhatsApp: [COMPLETAR_TEL]\nUse this contact if the main host does not reply.",
            tags: ["Issues"],
          },
        ],
        emergencies: [
          {
            title: "🚨 Emergency number",
            text: "👉 112 (general emergencies - free, 24h)\nPolice, ambulance and fire brigade.",
            tags: ["112", "Urgent"],
          },
          {
            title: "🏥 Nearest hospital",
            text:
              "Torrevieja University Hospital\nC. Madrid, s/n, 03186 Torrevieja, Alicante.\nGeneral hospital with 24h emergency care.\nAround 15-20 minutes away by car from Playa de las Higuericas.",
            tags: ["Hospital", "24h emergency"],
            links: [{ label: "Open hospital", hrefKey: "hospitalTorrevieja" }],
          },
          {
            title: "🏥 Nearest health centre",
            text:
              "Pilar de la Horadada Health Centre\nCalle Vicente Blasco Ibanez s/n, 03190 Pilar de la Horadada, Alicante.\nPrimary care.\nBasic daytime urgent care.\nA few minutes from the house.",
            tags: ["Health centre", "Primary care"],
            links: [{ label: "Open health centre", hrefKey: "healthCenterPilar" }],
          },
          {
            title: "💊 Nearest pharmacy",
            text:
              "Farmacia Playa Las Higuericas Lda. M del Mar Lorenzo Banon.\n450 m walking from the house.\nThe duty pharmacy may vary each day.",
            tags: ["Pharmacy", "Nearby"],
            links: [
              { label: "Open pharmacy", hrefKey: "pharmacyHiguericas" },
              { label: "Duty pharmacy", hrefKey: "dutyPharmacy" },
            ],
          },
          {
            title: "🏡 Safety inside the house",
            text: "The house includes basic items to react to an incident inside the property.",
            list: [
              "🧯 Fire extinguisher in a visible and accessible location.",
              "🧰 First-aid kit inside the hall cupboard.",
            ],
            tags: ["Safety", "House"],
          },
          {
            title: "👶 Child supervision",
            text:
              "Children must always be supervised in outdoor areas, around the pool and around the hot tub. Responsibility lies with the accompanying adults.",
            tags: ["Children", "Pool"],
          },
          {
            title: "🙏 Important note",
            text:
              "The house is designed to be safe, but as in any holiday setting with a pool and outdoor areas, responsible use is essential to avoid accidents.",
            tags: ["Prevention"],
          },
        ],
      },
    },
  },
};
