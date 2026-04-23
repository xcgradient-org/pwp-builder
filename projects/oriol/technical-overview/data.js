module.exports = {
  id: "technical-overview",
  title: "Technical Overview",
  subtitle: "XC Gradient para Santander X",
  author: "Oriol Farres - XC Gradient",

  cover: {
    eyebrow: "XC GRADIENT - SANTANDER X",
    title: "TECHNICAL\nOVERVIEW",
    subtitle: "Por Oriol Farres, CEO",
    caption: "Guion en espanol - 5 minutos",
    questions: [
      "Por que la IA es imprescindible",
      "Por que la mayoria no la usa",
      "Por que nosotros si podemos",
    ],
  },

  intro: {
    number: "01",
    title: "La IA es clave, pero no lo es todo",
    objective:
      "La IA es imprescindible. Pero, como toda tecnologia, tiene sus casos de uso y no sustituye a todo.",
    truths: [
      {
        label: "VERDAD",
        text: "Implementarla ya no es opcional para seguir siendo competitivo.",
      },
      {
        label: "PERO",
        text: "Ser clave no significa sustituirlo todo. Toda tecnologia tiene limites.",
      },
      {
        label: "LIMITE",
        text: "Donde hacen falta algoritmos deterministas con garantia matematica, la IA no compite. Por naturaleza no es determinista.",
      },
    ],
    question: "Entonces, donde aporta valor de verdad?",
  },

  shine: {
    number: "01 bis",
    title: "Donde brilla la IA - y por que las pymes se quedan fuera",
    objective:
      "Con contexto automatico y vigilancia proactiva, la IA deja de ser un juguete. Pero a las pymes nadie les entra a montarselo.",
    bad: {
      label: "USO TIPICO HOY",
      points: [
        "Abres ChatGPT y copias contexto cada vez",
        "Se olvida la mitad en la siguiente pregunta",
        "Frustracion y desconfianza acumuladas",
      ],
    },
    good: {
      label: "LO QUE CAMBIA TODO",
      points: [
        "Informacion centralizada, recuperada en automatico",
        "IA vigilando maquinas, auditorias y regulaciones",
        "Te avisa antes de que el problema ocurra",
      ],
    },
    closing:
      "A las pymes nadie les entra a hacer esto. Es costoso, cada caso es diferente, y no les sale rentable a los grandes.",
  },

  product: {
    number: "02",
    title: "Un sistema vivo que aprende con el tiempo",
    objective:
      "Montamos documentacion centralizada e ingesta continua. El sistema se vuelve exponencialmente mas inteligente cada semana.",
    phases: [
      {
        label: "MONTAJE",
        text: "Centralizamos la documentacion dispersa: manuales, protocolos, historicos.",
      },
      {
        label: "INGESTA",
        text: "Flujo continuo: incidencias, decisiones, aprendizajes del dia a dia.",
      },
      {
        label: "APRENDIZAJE",
        text: "Cada semana sabe mas que la anterior. Cada mes entiende mejor la planta.",
      },
      {
        label: "RESULTADO",
        text: "Un cerebro interno moldeado al detalle por la realidad de esa fabrica.",
      },
    ],
    tagline: "No es una herramienta estatica. Es un sistema vivo.",
  },

  engine: {
    number: "03",
    title: "El motor tecnico - RAG para negocios",
    objective:
      "Profundidad tecnica explicada con una analogia que cualquier inversor entiende.",
    opening:
      "Usamos RAG (Retrieval Augmented Generation). En negocio: convertimos el desorden documental en decisiones accionables.",
    analogy:
      "Una base de datos tradicional es 2D - filas y columnas. Eso no captura la complejidad de una planta industrial.",
    pipeline: [
      { label: "FUENTES", detail: "manuales\nregistros\nnotas" },
      { label: "EMBEDDINGS", detail: "espacio\nmultidimensional" },
      { label: "RAG", detail: "enrutamiento\nsemantico" },
    ],
    payoff:
      "Cada fragmento se posiciona por su significado, no por su orden. Eso es lo que permite responder con precision.",
  },

  caseStudy: {
    number: "04",
    title: "Un caso concreto - que vive el operario",
    objective:
      "Como se ve esto, en la vida real, dentro de una planta de produccion.",
    errorCode: "E-47",
    errorLabel: "ERROR EN MAQUINA",
    before: {
      label: "HOY, SIN NOSOTROS",
      points: [
        "Llama al tecnico de mantenimiento",
        "Si no esta, espera horas",
        "Busca en un manual de 500 paginas",
      ],
    },
    after: {
      label: "CON EL SISTEMA",
      response:
        "No te preocupes. Este error E-47 ya aparecio hace cinco anos en esta misma maquina. Se soluciono recalibrando el sensor de presion del eje 2. Si despues de recalibrarlo sigue fallando, verifica tambien que la valvula de refrigeracion no este obstruida - aparece como causa secundaria en el historico.",
    },
    impact:
      "Respuesta con el contexto exacto de esa fabrica. No una respuesta generica de internet: la respuesta concreta de su planta.",
  },

  moat: {
    number: "05",
    title: "Nuestra barrera defensiva - La ventaja del tiempo",
    objective:
      "Por que ningun competidor puede replicar esto de un dia para otro.",
    narrative: [
      "Centralizar el conocimiento operativo no se logra en una tarde. Es un proceso progresivo.",
      "Cada incidencia, protocolo y ajuste entra al instante en la base de conocimiento.",
      "Con los meses: exponencialmente mas inteligente e hiper-especializado en esa planta.",
      "Al cabo de un ano, literalmente irremplazable. Nadie lo reproduce desde fuera.",
      "En USA lo hacen para oficinas. Nosotros, en planta industrial, donde se crea el valor.",
    ],
    phases: ["Mes 1", "Mes 3", "Mes 6", "Mes 12"],
    phaseLabels: ["Instalacion", "Primer ROI", "Especializacion", "Irremplazable"],
    banner:
      "Barrera defensiva = aprendizaje local acumulado + integracion en la operativa real",
  },

  closing: {
    headline: "NO VENDEMOS\nCHATBOTS.",
    subline: "Construimos el cerebro operativo de la pyme industrial.",
    caption: "XC Gradient - IA aplicada donde se crea el valor: dentro de la planta.",
  },
};
