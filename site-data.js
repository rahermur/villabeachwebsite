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
      hostList: "https://maps.app.goo.gl/6kiRLdhaMThJCQia9",
      foodMapEmbed:
        "https://www.google.com/maps?q=Playa%20de%20las%20Higuericas%2C%20Pilar%20de%20la%20Horadada&output=embed",
      beach:
        "https://www.visitpilardelahoradada.com/es/disfruta_pilar_horadada/playas_calas/playa/2-playa-las-higuericas",
      beaches: "https://www.visitpilardelahoradada.com/es/que_ver_hacer/playas",
      kids: "https://www.visitpilardelahoradada.com/es/que_ver_hacer/ninyos",
      tourism: "https://www.visitpilardelahoradada.com/",
      taxiPilar: "https://taxipilardelahoradada.com/",
      taxiOliva: "https://www.taxishermanosoliva.com/es",
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
          src: "./assets/photo-placeholder-1.jpg",
          alt: {
            es: "Vista exterior de la villa con piscina privada y terraza",
            en: "Exterior view of the villa with private pool and terrace",
          },
        },
        {
          src: "./assets/photo-placeholder-1.jpg",
          alt: {
            es: "Vista exterior de la villa con piscina privada y terraza",
            en: "Exterior view of the villa with private pool and terrace",
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
          checkin: "Llegada",
          house: "Casa",
          rules: "Normas",
          food: "Planes",
          hosts: "Contacto",
          emergencies: "Ayuda",
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
          showCode: "Mostrar código",
          hideCode: "Ocultar código",
          submit: "Entrar",
          hint: "Si no lo tienes, pídelo al anfitrión.",
          error: "Código incorrecto. Inténtalo de nuevo.",
        },
        viewMoreLabel: "Ver detalle",
      },
      sections: {
        checkin: { eyebrow: "Llegada", title: "Llegada y salida" },
        house: { eyebrow: "Dentro y fuera", title: "Todo en la villa" },
        rules: { eyebrow: "Convivencia", title: "Normas de la casa" },
        food: { eyebrow: "Para disfrutar", title: "Recomendaciones" },
        hosts: { eyebrow: "Anfitriones", title: "Contacto" },
        emergencies: { eyebrow: "Emergencias", title: "Ayuda rápida y asistencia" },
      },
      hero: {
        title: "Villa Beach",
        description:
          "Bienvenidos a nuestra villa. Esperamos que disfrutéis de vuestra estancia, del buen clima y de todas las comodidades de la casa. Esta guía reúne lo esencial para la llegada, la salida, el uso de la vivienda y la información práctica de la zona.",
        actions: [
          { label: "Cómo llegar", hrefKey: "mapsRoute", style: "sea" },
          { label: "Contacto anfitrión", href: "#hosts" },
          { label: "Favoritos en Maps", hrefKey: "hostList" },
        ],
        facts: [
          { label: "Check-in", valueKey: "checkInTime" },
          { label: "Check-out", valueKey: "checkOutTime" },
          { label: "Wi-Fi", valueKey: "wifi.network" },
          { label: "Clave Wi-Fi", valueKey: "wifi.password" },
        ],
        addressHint: "",
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
          "Usa siempre pastillas de encendido o chimenea de encendido. No utilices líquidos inflamables.",
          "Para encender, abre primero las entradas de aire inferior y superior para que el carbón reciba oxígeno suficiente.",
          "Espera a que las brasas estén bien prendidas y ligeramente cubiertas de ceniza blanca antes de empezar a cocinar.",
          "Cocción directa: reparte las brasas bajo la zona donde vaya la comida. Es la mejor opción para piezas pequeñas o cocciones rápidas, como hamburguesas, verduras o brochetas.",
          "Cocción indirecta: usa las cestas preparadas para colocar las brasas en los laterales y deja el centro libre. Esta configuración funciona mejor para piezas grandes o alimentos que necesiten más tiempo.",
          "Con cocción indirecta, cocina con la tapa cerrada para que el calor circule como un horno y la comida se haga de forma más uniforme.",
          "La tapa puede encajar de forma algo delicada en el soporte lateral. Déjala bien asegurada y sin quedar mal colgada antes de manipular la parrilla o moverte alrededor.",
          "Cuando termines, cierra la entrada de aire inferior y la superior para apagar las brasas por falta de oxígeno.",
          "No hace falta retirar las cenizas después de cada uso salvo que se acumule bastante cantidad. Puedes usar el mecanismo inferior para que las cenizas caigan al depósito recogecenizas.",
          "Vacía el depósito de cenizas solo cuando esté frío y nunca manipules brasas o cenizas calientes sin protección adecuada.",
          "Deja la parrilla razonablemente limpia después de usarla y evita que queden restos grandes de comida o grasa.",
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
              title: "🐾 Mascotas",
              text:
                "Se admiten mascotas bajo petición. La estancia con mascota tiene un suplemento de 25 EUR por estancia y un depósito de garantía adicional según el peso del animal, a abonar durante el check-in por check-in online o transferencia. Hay una cama y comederos disponibles para animales pequeños o medianos, aunque recomendamos traer los propios.",
              sheetKey: "petPolicy",
            },
            {
              title: "🏊 Piscina y jacuzzi",
              text:
                "Consulta los apartados específicos de piscina y jacuzzi para ver los consejos de uso durante la estancia.",
              list: [
                "Es obligatorio ducharse antes de usar la piscina o el jacuzzi.",
                "No introducir arena en el jacuzzi.",
                "El jacuzzi no debe ser utilizado por menores de 12 años sin supervisión adulta.",
                "Los niños no deben permanecer solos en la piscina en ningún momento.",
              ],
              links: [
                { label: "Consejos sobre uso de piscina", href: "#house-pool" },
                { label: "Consejos sobre uso de jacuzzi", href: "#house-jacuzzi" },
              ],
            },
            {
              title: "🔥 Barbacoa / chimenea",
              text:
                "En el apartado de barbacoa tienes también los consejos prácticos de encendido y cierre.",
              list: [
                "Utilizar siempre pastillas de encendido y el sistema de la chimenea para encender las brasas.",
                "No utilizar líquidos inflamables.",
                "Asegurarse de que las brasas quedan completamente apagadas al finalizar.",
              ],
              links: [{ label: "Consejos sobre uso de barbacoa", href: "#house-bbq" }],
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
              "Coordina la llegada con el anfitrión a partir de las 15:00.\nAntes de venir, completa si es posible el check-in online desde el enlace personal enviado previamente por email o mensaje.\nPara llegar a la villa, lo más práctico suele ser venir en coche particular o taxi.\nEn el check-in se recordarán las normas de la casa y se resolverá cualquier duda necesaria.",
            layout: "half",
            sheetKey: "arrivalRegistration",
            links: [
              { label: "Taxi Pilar de la Horadada", hrefKey: "taxiPilar" },
              { label: "Taxi Hermanos Oliva", hrefKey: "taxiOliva" },
            ],
          },
          {
            title: "🧳 Salida",
            text:
              "La referencia de salida es hasta las 12:00.\nSi necesitas late check-out, solicítalo con antelación para comprobar disponibilidad.\nNo hace falta quedar en persona con el anfitrión para devolver las llaves: solo avisa de que vais a abandonar la vivienda y sigue las indicaciones acordadas.",
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
          petPolicy: {
            eyebrow: "Normas",
            title: "🐾 Mascotas: condiciones y depósito",
            text:
              "Las mascotas se aceptan solo bajo petición y es importante avisarlo justo después de hacer la reserva. Si no se ha informado previamente, no podemos garantizar la estancia con animal.\n\nLa estancia con mascota tiene un suplemento de 25 EUR por estancia, no por noche.\nAdemás, se solicita un depósito adicional por posibles daños o limpieza extraordinaria, que debe abonarse en el momento del check-in mediante la aplicación de check-in o por transferencia.\n\nLa vivienda dispone de una cama y comederos para animales pequeños o medianos, aunque recomendamos traer los suyos para que el animal esté más cómodo.",
            list: [
              "Hasta 10 kg: depósito de 150 EUR por estancia.",
              "Más de 10 kg: depósito de 260 EUR por estancia.",
              "La mascota debe contar con cartilla sanitaria al día, incluyendo vacunaciones y desparasitación.",
              "Los perros deben ir con correa y, cuando corresponda, con bozal y siempre bajo supervisión del propietario o cuidador autorizado.",
              "No se admiten animales potencialmente peligrosos o agresivos ni razas consideradas como tales por la normativa aplicable.",
              "No está permitido que los animales suban a camas o sofás. Deben traer su propia cama o manta.",
              "No se permite usar toallas, sábanas o ropa de cama de la vivienda para el animal, ni que haga sus necesidades dentro del apartamento.",
              "Los dueños deben limpiar cualquier suciedad dejada por el animal dentro de la vivienda, en zonas comunes o en el recorrido de acceso.",
              "Los daños, manchas, olores o limpiezas especiales en textiles, mobiliario o equipamiento se valorarán y se descontarán del depósito o, si fuera necesario, se cobrarán aparte según el coste real de reposición o reparación.",
              "Si no se detectan incidencias, el depósito se devuelve tras el check-out. Si hubiera daños o suciedad extraordinaria, se informará y se aplicará el coste correspondiente.",
            ],
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
            copyValueKey: "wifi.password",
          },
          {
            title: "📺 TV y streaming",
            text:
              "Puedes añadir tus cuentas de Netflix, Prime Video, Disney+ u otras plataformas durante la estancia.",
            list: [
              "🔐 Recuerda cerrar sesión en todas tus cuentas antes del check-out.",
            ],
            logos: [
              { id: "netflix", label: "NETFLIX" },
              { id: "prime", label: "prime video" },
              { id: "disney", label: "Disney+" },
            ],
          },
        ],
        houseAccordions: [
          {
            id: "pool",
            title: "🏊 Piscina",
            eyebrow: "Exterior",
            summary: "Consejos rápidos para usar la piscina con seguridad y sin incidencias.",
            text: "Antes de usarla, revisa que la zona esté libre de objetos y mantén siempre la supervisión de menores.",
            listKey: "pool",
          },
          {
            id: "jacuzzi",
            title: "♨️ Jacuzzi",
            eyebrow: "Relax",
            summary: "Uso cómodo y seguro del jacuzzi durante la estancia.",
            text: "El jacuzzi requiere un uso cuidadoso y debe mantenerse cerrado cuando no se utiliza.",
            listKey: "jacuzzi",
          },
          {
            id: "bbq",
            title: "🔥 Barbacoa",
            eyebrow: "Comer fuera",
            summary: "Encendido, uso directo o indirecto, limpieza y apagado seguro de la Weber de carbón de 57 cm.",
            text: "La Weber de carbón funciona mejor con una preparación tranquila y con la tapa puesta durante buena parte de la cocción. En este apartado tienes una guía rápida para encenderla bien, usar las cestas para calor indirecto y dejarla apagada y limpia al terminar.",
            listKey: "bbq",
          },
        ],
        foodIntro: {
          title: "Google Maps y favoritos del anfitrión",
          body:
            "Aquí tienes un punto de partida rápido para abrir el mapa, guardar la lista compartida del anfitrión en Google Maps y descubrir una selección corta de sitios que priorizaríamos durante la estancia.\nLa web muestra un resumen curado para móvil, pero la lista completa sigue viviendo en Google Maps.",
          tags: ["Google Maps", "Lista compartida"],
          links: [
            { label: "Abrir lista completa", hrefKey: "hostList" },
            { label: "Guía oficial", hrefKey: "restaurantsGuide" },
            { label: "Turismo Pilar de la Horadada", hrefKey: "tourism" },
          ],
        },
        foodFeatured: [
          {
            title: "No te pierdas: Playa de las Higuericas",
            text: "La referencia más cercana para playa, paseo y atardecer a pie desde la villa.",
            tags: ["★ Favorito", "Playa"],
            links: [{ label: "Ver playa", hrefKey: "beach" }],
          },
          {
            title: "No te pierdas: Pirata Club Náutico",
            text: "Muy buena opción si quieres una comida con vistas al puerto y ambiente marítimo.",
            tags: ["★ Favorito", "Restaurante"],
            links: [{ label: "Ver ficha", hrefKey: "restaurantPirata" }],
          },
          {
            title: "No te pierdas: Victoria",
            text: "Buena elección para una comida larga con arroces y cocina mediterránea.",
            tags: ["★ Favorito", "Arroces"],
            links: [{ label: "Ver ficha", hrefKey: "restaurantVictoria" }],
          },
        ],
        foodCategories: [
          {
            id: "food-restaurants",
            title: "Restaurantes",
            eyebrow: "Comer bien",
            description: "Una selección corta para decidir rápido desde el móvil.",
            items: [
              {
                title: "Pirata Club Náutico",
                text: "Restaurante junto al puerto deportivo, recomendable si buscas una comida con vistas al entorno náutico.",
                tags: ["Puerto", "Espetos"],
                links: [{ label: "Ver ficha", hrefKey: "restaurantPirata" }],
              },
              {
                title: "Pizzeria Plaza",
                text: "Buena alternativa si el grupo quiere variedad, con pizzas, arroces y menú del día.",
                tags: ["Pizza", "Arroces"],
                links: [{ label: "Ver ficha", hrefKey: "restaurantPlaza" }],
              },
              {
                title: "Victoria",
                text: "Opción muy adecuada para comidas largas o familiares, con cocina mediterránea y arroces.",
                tags: ["Mediterráneo", "Familias"],
                links: [{ label: "Ver ficha", hrefKey: "restaurantVictoria" }],
              },
            ],
          },
          {
            id: "food-walks",
            title: "Playa y paseos",
            eyebrow: "A pocos minutos",
            description: "Planes fáciles para cualquier momento del día.",
            items: [
              {
                title: "Playa de las Higuericas",
                text: "Playa cómoda para familias y paseos al atardecer, muy cerca de la vivienda.",
                tags: ["Playa cercana", "Familias"],
                links: [{ label: "Ver playa", hrefKey: "beach" }],
              },
              {
                title: "Paseo marítimo y playas cercanas",
                text: "El entorno invita a caminar, ir en bici y alternar entre varias playas cercanas con buen acceso.",
                tags: ["Paseo", "Bicicleta"],
                links: [{ label: "Ver playas", hrefKey: "beaches" }],
              },
            ],
          },
          {
            id: "food-area",
            title: "Entorno y planes",
            eyebrow: "Descubrir",
            description: "Recursos útiles para ampliar la estancia más allá de los favoritos.",
            items: [
              {
                title: "Turismo local",
                text: "La web turística del municipio reúne rutas, agenda, playas, actividades y propuestas para organizar planes durante la estancia y en los alrededores.",
                tags: ["Agenda", "Rutas"],
                links: [{ label: "Web turística", hrefKey: "tourism" }],
              },
              {
                title: "Moverse hasta la villa",
                text: "Para llegar a la vivienda, el coche particular o el taxi suelen ser la opción más práctica. Aquí tienes dos referencias locales de taxi.",
                tags: ["Transporte", "Taxi"],
                links: [
                  { label: "Taxi Pilar de la Horadada", hrefKey: "taxiPilar" },
                  { label: "Taxi Hermanos Oliva", hrefKey: "taxiOliva" },
                ],
              },
              {
                title: "Lista completa en Google Maps",
                text: "Abre la lista compartida del anfitrión y guárdala en tu cuenta para usarla directamente en el móvil durante la estancia.",
                tags: ["Google Maps", "Lista completa"],
                links: [{ label: "Abrir lista", hrefKey: "hostList" }],
              },
              {
                title: "Más restaurantes abiertos",
                text: "Si quieres ver más opciones según el momento del día o la temporada, usa la guía oficial o la búsqueda preparada.",
                tags: ["Actualizado", "Mapa"],
                links: [
                  { label: "Guía oficial", hrefKey: "restaurantsGuide" },
                  { label: "Abrir Google Maps", hrefKey: "restaurantsMap" },
                ],
              },
            ],
          },
        ],
        hostContacts: [
          {
            title: "Anfitrión principal 1",
            text:
              "Nombre: [COMPLETAR_NOMBRE]\nTeléfono / WhatsApp: [COMPLETAR_TEL]\nHorario recomendado de contacto: [COMPLETAR_HORARIO]",
            tags: ["Check-in", "Check-out", "Dudas y consultas", "Recomendaciones"],
          },
          {
            title: "Anfitrión principal 2",
            text:
              "Nombre: [COMPLETAR_NOMBRE]\nTeléfono / WhatsApp: [COMPLETAR_TEL]\nHorario recomendado de contacto: [COMPLETAR_HORARIO]",
            tags: ["Check-in", "Check-out", "Dudas y consultas", "Recomendaciones"],
          },
          {
            title: "Contacto de apoyo",
            text:
              "Nombre: Ana Montoro Rosado\nTeléfono / WhatsApp: 678267650\nUsar si los anfitriones principales no responden o si necesitas apoyo durante la estancia.",
            tags: ["Apoyo", "Incidencias"],
            copyValue: "678267650",
            links: [
              { label: "Llamar", href: "tel:+34678267650", icon: "phone" },
              { label: "WhatsApp", href: "https://wa.me/34678267650", icon: "whatsapp" },
            ],
          },
        ],
        emergencySummary: [
          {
            title: "🚨 112",
            text: "Emergencias generales, gratuito y 24h.\nPolicía, ambulancia y bomberos.",
          },
        ],
        emergencyAccordions: [
          {
            title: "🏥 Atención médica",
            summary: "Hospital y centro de salud más cercanos.",
            text:
              "Hospital Universitario de Torrevieja\nC. Madrid, s/n, 03186 Torrevieja, Alicante.\nHospital general con urgencias 24h.\nA unos 15-20 minutos en coche desde Playa de las Higuericas.\n\nCentro de Salud Pilar de la Horadada\nCalle Vicente Blasco Ibáñez s/n, 03190 Pilar de la Horadada, Alicante.\nAtención primaria y urgencias básicas diurnas.\nA pocos minutos de la vivienda.",
            links: [
              { label: "Abrir hospital", hrefKey: "hospitalTorrevieja" },
              { label: "Abrir centro de salud", hrefKey: "healthCenterPilar" },
            ],
          },
          {
            title: "💊 Farmacia y farmacia de guardia",
            summary: "Farmacia más cercana y qué hacer si necesitas una 24h.",
            text:
              "Farmacia Playa Las Higuericas Lda. M del Mar Lorenzo Bañón.\nA 450 m caminando de la vivienda.\n\nEn España las farmacias 24h funcionan por turnos y van rotando, así que la farmacia disponible puede cambiar cada día.\nPara saber cuál está de guardia en ese momento, utiliza el enlace de farmacia de guardia o consulta con el anfitrión o en el centro de salud.",
            links: [
              { label: "Abrir farmacia", hrefKey: "pharmacyHiguericas" },
              { label: "Ver farmacia de guardia", hrefKey: "dutyPharmacy" },
            ],
          },
          {
            title: "🏡 En la vivienda",
            summary: "Elementos básicos de seguridad y precauciones importantes.",
            text:
              "La vivienda dispone de elementos básicos para reaccionar ante una incidencia dentro de la casa.",
            list: [
              "🧯 Extintor contra incendios en zona visible y accesible.",
              "🧰 Botiquín de primeros auxilios dentro del armario de la entrada.",
              "👶 Los niños deben estar siempre supervisados en zonas exteriores, piscina y jacuzzi.",
              "🙏 El uso responsable es esencial para evitar accidentes en una vivienda vacacional con piscina y exterior.",
            ],
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
          checkin: "Arrival",
          house: "Villa",
          rules: "Rules",
          food: "Plans",
          hosts: "Contact",
          emergencies: "Help",
        },
        sectionLabels: {
          address: "Address",
        },
        gate: {
          eyebrow: "Guest Access",
          title: "Private access",
          description: "Enter your guest code to view the full villa guide.",
          inputLabel: "Access code",
          showCode: "Show code",
          hideCode: "Hide code",
          submit: "Enter",
          hint: "If you do not have it, ask the host.",
          error: "Incorrect code. Please try again.",
        },
        viewMoreLabel: "View details",
      },
      sections: {
        checkin: { eyebrow: "Arrival", title: "Arrival & departure" },
        house: { eyebrow: "Inside and outside", title: "Everything at the villa" },
        rules: { eyebrow: "Stay well", title: "House rules" },
        food: { eyebrow: "To enjoy", title: "Recommendations" },
        hosts: { eyebrow: "Hosts", title: "Contact" },
        emergencies: { eyebrow: "Emergency", title: "Quick help and assistance" },
      },
      hero: {
        title: "Villa Beach",
        description:
          "Welcome to the villa. This guide brings together the essentials for arrival, departure, house use and practical local information for a smooth stay by the sea.",
        actions: [
          { label: "How to get here", hrefKey: "mapsRoute", style: "sea" },
          { label: "Host contact", href: "#hosts" },
          { label: "Saved places", hrefKey: "hostList" },
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
          "Always use lighter cubes or a chimney starter. Do not use flammable liquids.",
          "Before lighting, open both the bottom and top vents so the charcoal gets enough oxygen.",
          "Wait until the coals are properly lit and lightly covered with white ash before you start cooking.",
          "Direct heat: spread the coals under the cooking area. This works best for smaller pieces or quick cooks such as burgers, vegetables or skewers.",
          "Indirect heat: use the charcoal baskets provided to place the coals on the sides and leave the centre clear. This works better for larger cuts or food that needs longer cooking.",
          "When cooking indirectly, keep the lid closed so the heat circulates like an oven and food cooks more evenly.",
          "The lid can be a bit awkward to seat on the side holder. Make sure it is properly secured and not left hanging badly before moving around or handling the grill.",
          "When you finish, close both the bottom and top vents to extinguish the coals by cutting off the airflow.",
          "There is no need to remove the ash after every use unless a large amount has built up. You can use the lower cleaning mechanism so the ash drops into the ash catcher.",
          "Empty the ash catcher only when everything is cold, and never handle hot coals or ash without proper protection.",
          "Leave the cooking grate reasonably clean after use and avoid leaving large food scraps or grease behind.",
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
              title: "🐾 Pets",
              text:
                "Pets are allowed on request. Staying with a pet has a 25 EUR fee per stay and an additional security deposit depending on the animal's weight, payable at check-in through the check-in app or by bank transfer. A pet bed and feeding bowls are available for small or medium animals, although bringing your own is recommended.",
              sheetKey: "petPolicy",
            },
            {
              title: "🏊 Pool and hot tub",
              text:
                "See the dedicated pool and hot tub sections for practical use tips during the stay.",
              list: [
                "Showering before using the pool or hot tub is mandatory.",
                "Do not bring sand into the hot tub.",
                "The hot tub must not be used by children under 12 without adult supervision.",
                "Children must never be left alone in the pool area.",
              ],
              links: [
                { label: "Pool use tips", href: "#house-pool" },
                { label: "Hot tub use tips", href: "#house-jacuzzi" },
              ],
            },
            {
              title: "🔥 Barbecue / fireplace",
              text:
                "You can also jump to the barbecue section for practical ignition and closing tips.",
              list: [
                "Always use firelighters and the fireplace system to light the coals.",
                "Do not use flammable liquids.",
                "Make sure the coals are fully extinguished when finished.",
              ],
              links: [{ label: "Barbecue use tips", href: "#house-bbq" }],
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
              "Coordinate the arrival with the host from 3:00 pm onwards.\nBefore travelling, complete the online check-in if possible using the personal link previously sent by email or message.\nTo reach the villa, travelling by private car or taxi is usually the easiest option.\nDuring check-in, the house rules can be reviewed and any questions can be answered.",
            layout: "half",
            sheetKey: "arrivalRegistration",
            links: [
              { label: "Taxi Pilar de la Horadada", hrefKey: "taxiPilar" },
              { label: "Taxi Hermanos Oliva", hrefKey: "taxiOliva" },
            ],
          },
          {
            title: "🧳 Departure",
            text:
              "Reference check-out time is by 12:00 noon.\nIf you need a late check-out, ask in advance so availability can be confirmed.\nThere is no need to meet the host in person to return the keys: just let them know you are leaving and follow the agreed departure instructions.",
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
          petPolicy: {
            eyebrow: "Rules",
            title: "🐾 Pets: conditions and deposit",
            text:
              "Pets are only accepted on request, and it is important to notify this just after booking. If it has not been reported in advance, we cannot guarantee the stay with an animal.\n\nStaying with a pet has a 25 EUR fee per stay, not per night.\nAn additional security deposit is also required for possible damage or extra cleaning, payable at check-in through the check-in app or by bank transfer.\n\nThe villa has a pet bed and feeding bowls available for small or medium animals, although we recommend bringing your own so the animal feels more comfortable.",
            list: [
              "Up to 10 kg: 150 EUR deposit per stay.",
              "Over 10 kg: 260 EUR deposit per stay.",
              "The animal must have an up-to-date health card, including vaccinations and deworming.",
              "Dogs must be kept on a lead and, when required, muzzled, always under the supervision of the owner or an authorised carer.",
              "Potentially dangerous or aggressive animals, including breeds considered as such under applicable regulations, are not accepted.",
              "Pets are not allowed on beds or sofas. They must have their own bed or blanket.",
              "Villa towels, sheets and bed linen may not be used for the animal, and pets must not relieve themselves inside the apartment.",
              "Owners must clean any dirt left by the animal inside the property, in common areas or on access routes.",
              "Damage, stains, odours or special cleaning affecting textiles, furniture or equipment will be assessed and deducted from the deposit or, if necessary, charged separately based on the real replacement or repair cost.",
              "If no issues are found, the deposit is returned after check-out. If there is damage or extraordinary dirt, the guest will be informed and the corresponding cost will be applied.",
            ],
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
            copyValueKey: "wifi.password",
          },
          {
            title: "📺 TV / streaming",
            text:
              "You can add your own Netflix, Prime Video, Disney+ or other streaming accounts during your stay.",
            list: [
              "🔐 Remember to log out of all your accounts before check-out.",
            ],
            logos: [
              { id: "netflix", label: "NETFLIX" },
              { id: "prime", label: "prime video" },
              { id: "disney", label: "Disney+" },
            ],
          },
        ],
        houseAccordions: [
          {
            id: "pool",
            title: "🏊 Pool",
            eyebrow: "Outdoor",
            summary: "Quick guidance for safe and easy pool use.",
            text: "Before using it, make sure the area is clear and always supervise children.",
            listKey: "pool",
          },
          {
            id: "jacuzzi",
            title: "♨️ Hot tub",
            eyebrow: "Relax",
            summary: "Simple guidance for comfortable and safe hot tub use.",
            text: "The hot tub should be used carefully and kept closed when it is not in use.",
            listKey: "jacuzzi",
          },
          {
            id: "bbq",
            title: "🔥 Barbecue",
            eyebrow: "Outdoor dining",
            summary: "Lighting, direct or indirect use, cleaning and safe shutdown for the 57 cm Weber charcoal barbecue.",
            text: "This Weber charcoal barbecue works best with a calm setup and with the lid closed for much of the cooking. This section gives you a practical guide to light it properly, use the baskets for indirect cooking and leave it safely shut down and tidy afterwards.",
            listKey: "bbq",
          },
        ],
        foodIntro: {
          title: "Google Maps and host favourites",
          body:
            "This section gives you a fast starting point to open the map, save the host's shared list in Google Maps and browse a short set of places we would prioritise during the stay.\nThe website offers a mobile-friendly summary, while the full list continues to live in Google Maps.",
          tags: ["Google Maps", "Shared list"],
          links: [
            { label: "Open full list", hrefKey: "hostList" },
            { label: "Official guide", hrefKey: "restaurantsGuide" },
            { label: "Pilar de la Horadada tourism", hrefKey: "tourism" },
          ],
        },
        foodFeatured: [
          {
            title: "Don't miss: Playa de las Higuericas",
            text: "The closest reference for beach time, walking and sunset plans near the villa.",
            tags: ["★ Favourite", "Beach"],
            links: [{ label: "View beach", hrefKey: "beach" }],
          },
          {
            title: "Don't miss: Pirata Club Nautico",
            text: "A strong choice if you want a meal with marina views and a seaside atmosphere.",
            tags: ["★ Favourite", "Restaurant"],
            links: [{ label: "View listing", hrefKey: "restaurantPirata" }],
          },
          {
            title: "Don't miss: Victoria",
            text: "A reliable pick for longer meals with rice dishes and Mediterranean cooking.",
            tags: ["★ Favourite", "Rice dishes"],
            links: [{ label: "View listing", hrefKey: "restaurantVictoria" }],
          },
        ],
        foodCategories: [
          {
            id: "food-restaurants",
            title: "Restaurants",
            eyebrow: "Eating well",
            description: "A short selection to help you decide quickly from your phone.",
            items: [
              {
                title: "Pirata Club Nautico",
                text: "Restaurant by the marina, recommended if you want a meal with views over the nautical setting.",
                tags: ["Marina", "Grilled fish"],
                links: [{ label: "View listing", hrefKey: "restaurantPirata" }],
              },
              {
                title: "Pizzeria Plaza",
                text: "A good option if the group wants variety, with pizzas, rice dishes and a daily menu.",
                tags: ["Pizza", "Rice dishes"],
                links: [{ label: "View listing", hrefKey: "restaurantPlaza" }],
              },
              {
                title: "Victoria",
                text: "A strong option for longer or family meals, with Mediterranean cuisine and rice dishes.",
                tags: ["Mediterranean", "Families"],
                links: [{ label: "View listing", hrefKey: "restaurantVictoria" }],
              },
            ],
          },
          {
            id: "food-walks",
            title: "Beach and walks",
            eyebrow: "Close by",
            description: "Easy plans for any time of day.",
            items: [
              {
                title: "Playa de las Higuericas",
                text: "An easy beach for families and sunset walks, very close to the house.",
                tags: ["Nearby beach", "Families"],
                links: [{ label: "View beach", hrefKey: "beach" }],
              },
              {
                title: "Promenade and nearby beaches",
                text: "The area is ideal for walking, cycling and moving between nearby beaches with easy access.",
                tags: ["Walks", "Cycling"],
                links: [{ label: "View beaches", hrefKey: "beaches" }],
              },
            ],
          },
          {
            id: "food-area",
            title: "Area and plans",
            eyebrow: "Explore",
            description: "Useful resources to expand the stay beyond the core favourites.",
            items: [
              {
                title: "Local tourism",
                text: "The town tourism website brings together routes, events, beaches, activities and useful ideas for the stay and the surrounding area.",
                tags: ["Events", "Routes"],
                links: [{ label: "Tourism website", hrefKey: "tourism" }],
              },
              {
                title: "Getting to the villa",
                text: "To reach the property, travelling by private car or taxi is usually the most practical option. Here are two local taxi references.",
                tags: ["Transport", "Taxi"],
                links: [
                  { label: "Taxi Pilar de la Horadada", hrefKey: "taxiPilar" },
                  { label: "Taxi Hermanos Oliva", hrefKey: "taxiOliva" },
                ],
              },
              {
                title: "Full list in Google Maps",
                text: "Open the host's shared list and save it to your account to use it directly from your phone during the stay.",
                tags: ["Google Maps", "Full list"],
                links: [{ label: "Open list", hrefKey: "hostList" }],
              },
              {
                title: "More restaurants open now",
                text: "If you want more options depending on season or time of day, use the official guide or the prepared map search.",
                tags: ["Up to date", "Map"],
                links: [
                  { label: "Official guide", hrefKey: "restaurantsGuide" },
                  { label: "Open Google Maps", hrefKey: "restaurantsMap" },
                ],
              },
            ],
          },
        ],
        hostContacts: [
          {
            title: "Main host 1",
            text:
              "Name: [COMPLETAR_NOMBRE]\nPhone / WhatsApp: [COMPLETAR_TEL]\nRecommended contact hours: [COMPLETAR_HORARIO]",
            tags: ["Check-in", "Check-out", "Questions", "Recommendations"],
          },
          {
            title: "Main host 2",
            text:
              "Name: [COMPLETAR_NOMBRE]\nPhone / WhatsApp: [COMPLETAR_TEL]\nRecommended contact hours: [COMPLETAR_HORARIO]",
            tags: ["Check-in", "Check-out", "Questions", "Recommendations"],
          },
          {
            title: "Backup contact",
            text:
              "Name: Ana Montoro Rosado\nPhone / WhatsApp: 678267650\nUse this contact if the main hosts do not reply or if you need support during the stay.",
            tags: ["Support", "Issues"],
            copyValue: "678267650",
            links: [
              { label: "Call", href: "tel:+34678267650", icon: "phone" },
              { label: "WhatsApp", href: "https://wa.me/34678267650", icon: "whatsapp" },
            ],
          },
        ],
        emergencySummary: [
          {
            title: "🚨 112",
            text: "General emergencies, free and available 24/7.\nPolice, ambulance and fire brigade.",
          },
        ],
        emergencyAccordions: [
          {
            title: "🏥 Medical care",
            summary: "Nearest hospital and health centre.",
            text:
              "Torrevieja University Hospital\nC. Madrid, s/n, 03186 Torrevieja, Alicante.\nGeneral hospital with 24h emergency care.\nAround 15-20 minutes away by car from Playa de las Higuericas.\n\nPilar de la Horadada Health Centre\nCalle Vicente Blasco Ibanez s/n, 03190 Pilar de la Horadada, Alicante.\nPrimary care and basic daytime urgent care.\nA few minutes from the house.",
            links: [
              { label: "Open hospital", hrefKey: "hospitalTorrevieja" },
              { label: "Open health centre", hrefKey: "healthCenterPilar" },
            ],
          },
          {
            title: "💊 Pharmacy and duty pharmacy",
            summary: "Nearest pharmacy and what to do if you need a 24-hour one.",
            text:
              "Farmacia Playa Las Higuericas Lda. M del Mar Lorenzo Banon.\n450 m walking from the house.\n\nIn Spain 24-hour pharmacies work on a rotating duty system, so the available pharmacy may change every day.\nTo find the active duty pharmacy at that moment, use the duty pharmacy link or ask the host or the health centre.",
            links: [
              { label: "Open pharmacy", hrefKey: "pharmacyHiguericas" },
              { label: "Duty pharmacy", hrefKey: "dutyPharmacy" },
            ],
          },
          {
            title: "🏡 In the house",
            summary: "Basic safety items and important precautions.",
            text: "The house includes basic items to react to an incident inside the property.",
            list: [
              "🧯 Fire extinguisher in a visible and accessible location.",
              "🧰 First-aid kit inside the hall cupboard.",
              "👶 Children must always be supervised in outdoor areas, around the pool and around the hot tub.",
              "🙏 Responsible use is essential to avoid accidents in a holiday home with a pool and outdoor areas.",
            ],
          },
        ],
      },
    },
  },
};
