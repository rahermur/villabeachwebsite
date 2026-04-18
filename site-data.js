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
        network: "[COMPLETAR_NOMBRE_WIFI]",
        password: "[COMPLETAR_PASSWORD_WIFI]",
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
          checkin: "Check-in",
          checkout: "Check-out",
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
      },
      sections: {
        checkin: { eyebrow: "Llegada", title: "Check-in" },
        checkout: { eyebrow: "Salida", title: "Check-out" },
        house: { eyebrow: "Dentro y fuera", title: "La casa y cómo usarla" },
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
        ],
        addressHint:
          "A pocos minutos andando de la Playa de las Higuericas y con acceso sencillo en coche.",
      },
      property: {
        checkIn: {
          details: [
            "Check-in a partir de las 15:00.",
            "La llegada puede ser autónoma o asistida según la reserva. Confirma el método exacto con el anfitrión el mismo día.",
            "Si prevés llegar más tarde de lo acordado, avisa cuanto antes.",
          ],
        },
        checkOut: {
          details: [
            "Check-out hasta las 12:00.",
            "Existe opción de late check-out bajo consulta previa y según disponibilidad.",
            "Deja cerradas puertas y ventanas, apaga luces y climatización y devuelve llaves o mandos según te hayan indicado.",
          ],
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
        checkInPanel: {
          title: "Llegada sin estrés",
          body:
            "Check-in a partir de las 15:00.\nConfirma con el anfitrión el método exacto de acceso antes del viaje.",
          tags: ["Llegada", "Acceso"],
          links: [{ label: "Abrir ubicación", hrefKey: "mapsRoute" }],
        },
        checkInCards: [
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
            title: "Ubicación y favoritos",
            text:
              "Desde la portada puedes abrir tanto la ruta en Google Maps como la lista compartida de sitios recomendados para usarla durante la estancia.",
            tags: ["Google Maps", "Lista"],
            links: [{ label: "Abrir lista", hrefKey: "hostList" }],
          },
        ],
        checkOutPanel: {
          title: "Salida sencilla",
          body:
            "Check-out hasta las 12:00.\nSi necesitas late check-out, consúltalo previamente con el anfitrión.",
          tags: ["Salida", "Checklist"],
        },
        checkOutCards: [
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
        ],
        houseCards: [
          {
            title: "Wi-Fi",
            text:
              "Red: [COMPLETAR_NOMBRE_WIFI]\nContraseña: [COMPLETAR_PASSWORD_WIFI]",
            tags: ["Internet"],
          },
          {
            title: "Uso del jacuzzi",
            text: "Indicaciones básicas para un uso seguro y sin incidencias.",
            listKey: "jacuzzi",
            tags: ["Jacuzzi"],
          },
          {
            title: "Uso de la piscina",
            text: "Consejos básicos para un uso seguro y cómodo.",
            listKey: "pool",
            tags: ["Piscina"],
          },
          {
            title: "Barbacoa de carbón",
            text: "Recomendaciones para usarla de forma segura y limpia.",
            listKey: "bbq",
            tags: ["Exterior", "Carbón"],
          },
          {
            title: "La villa",
            text:
              "Villa moderna con piscina privada, jacuzzi y barbacoa, a solo 400 m de la playa. Cuenta con 3 dormitorios dobles, 2 baños en suite, cocina equipada con cafetera y air fryer, terrazas soleadas, solárium con jacuzzi, aire acondicionado, Wi-Fi y parking privado.",
            tags: ["3 dormitorios", "Piscina privada"],
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
          checkin: "Check-in",
          checkout: "Check-out",
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
      },
      sections: {
        checkin: { eyebrow: "Arrival", title: "Check-in" },
        checkout: { eyebrow: "Departure", title: "Check-out" },
        house: { eyebrow: "Inside & outside", title: "The house and how to use it" },
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
        ],
        addressHint: "A short walk from Playa de las Higuericas, with easy access by car.",
      },
      property: {
        checkIn: {
          details: [
            "Check-in from 3:00 pm.",
            "Arrival may be self check-in or assisted, depending on the booking. Confirm the exact access method with the host on the same day.",
            "If you expect to arrive late, let the host know as soon as possible.",
          ],
        },
        checkOut: {
          details: [
            "Check-out by 12:00 noon.",
            "Late check-out may be possible on prior request and subject to availability.",
            "Leave doors and windows closed, turn off lights and climate control, and return keys or remotes as instructed.",
          ],
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
        checkInPanel: {
          title: "Arrival without stress",
          body:
            "Check-in from 3:00 pm.\nPlease confirm the exact access method with the host before you travel.",
          tags: ["Arrival", "Access"],
          links: [{ label: "Open location", hrefKey: "mapsRoute" }],
        },
        checkInCards: [
          {
            title: "Before leaving for the villa",
            text:
              "Keep the host phone number handy, review the exact arrival point and confirm whether you need a code, key or assistance.",
            tags: ["Preparation"],
          },
          {
            title: "If you arrive late",
            text:
              "If you expect to arrive later than planned, let the host know as early as possible.",
            tags: ["Important"],
          },
          {
            title: "Route and saved places",
            text:
              "From the cover you can open both the route in Google Maps and the shared list of recommended places for the stay.",
            tags: ["Google Maps", "List"],
            links: [{ label: "Open list", hrefKey: "hostList" }],
          },
        ],
        checkOutPanel: {
          title: "Easy departure",
          body:
            "Check-out by 12:00 noon.\nIf you need a late check-out, please ask the host in advance.",
          tags: ["Departure", "Checklist"],
        },
        checkOutCards: [
          {
            title: "Kitchen and rubbish",
            text:
              "Leave the kitchen tidy, take out rubbish if possible and avoid leaving charcoal or food remains outside.",
            tags: ["Closing"],
          },
          {
            title: "Climate and security",
            text:
              "Before leaving, check air conditioning, lights, doors, windows, awnings and any outdoor element affected by wind.",
            tags: ["Safety"],
          },
          {
            title: "Keys and remotes",
            text:
              "Return keys, remotes or codes exactly as the host indicates to avoid charges or issues.",
            tags: ["Hand-over"],
          },
        ],
        houseCards: [
          {
            title: "Wi-Fi",
            text:
              "Network: [COMPLETAR_NOMBRE_WIFI]\nPassword: [COMPLETAR_PASSWORD_WIFI]",
            tags: ["Internet"],
          },
          {
            title: "Using the hot tub",
            text: "Basic guidance for safe use.",
            listKey: "jacuzzi",
            tags: ["Hot tub"],
          },
          {
            title: "Using the pool",
            text: "Simple advice for safe and easy use.",
            listKey: "pool",
            tags: ["Pool"],
          },
          {
            title: "Charcoal barbecue",
            text: "Recommendations for safe and tidy use.",
            listKey: "bbq",
            tags: ["Outdoor", "Charcoal"],
          },
          {
            title: "The villa",
            text:
              "Modern villa with private pool, hot tub and barbecue only 400 m from the beach. It has 3 double bedrooms, 2 en-suite bathrooms, a fully equipped kitchen with coffee machine and air fryer, sunny terraces, a rooftop solarium, air conditioning, Wi-Fi and private parking.",
            tags: ["3 bedrooms", "Private pool"],
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
