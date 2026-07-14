import { Application, FAQItem } from "./types";

export const APPLICATIONS: Application[] = [
  {
    id: "cerebro-familiar",
    name: "Cerebro Familiar",
    tagline: "El centro de control inteligente para la armonía de tu hogar",
    description: "Consolida las tareas, calendarios, finanzas, menús semanales y recuerdos de tu familia en un solo espacio interactivo accesible para todos. Olvídate del caos de los mensajes de chat perdidos y las notas de papel en la nevera. Diseñado para simplificar el día a día familiar y recuperar el tiempo de calidad.",
    url: "https://familia-3b89d.web.app",
    priceText: "39€",
    priceSub: "pago único, acceso de por vida",
    priceValue: 39,
    badge: "Favorito Familiar",
    category: "Organización",
    benefits: [
      "Sincronización instantánea en la nube para todos los miembros",
      "Gestión de tareas y responsabilidades domésticas gamificadas",
      "Planificador de comidas con generación de lista de compras",
      "Control de gastos, presupuestos familiares y ahorros compartidos"
    ],
    features: [
      {
        title: "Calendario Unificado",
        description: "Sincroniza actividades, consultas médicas y eventos para evitar solapamientos.",
        icon: "Calendar"
      },
      {
        title: "Lista de Compras Inteligente",
        description: "Los ingredientes se añaden automáticamente de acuerdo a los menús planificados.",
        icon: "ShoppingCart"
      },
      {
        title: "Deberes Gamificados",
        description: "Asigna tareas a los niños y conviértelas en un juego interactivo con puntos.",
        icon: "Trophy"
      }
    ],
    accentColor: "indigo",
    gradientFrom: "from-indigo-600",
    gradientTo: "to-blue-600"
  },
  {
    id: "nunca-mas-manana",
    name: "Nunca Más Mañana",
    tagline: "La cura definitiva a la procrastinación. Entra en estado de hiperfoco hoy",
    description: "Un ecosistema de productividad de alto rendimiento diseñado para personas ambiciosas que quieren adueñarse de su tiempo. Integra bloques de concentración con control de estímulos, tareas priorizadas psicológicamente y medidores de energía biológica para que ejecutes hoy, sin excusas ni retrasos.",
    url: "https://nunca-mas-manana-app.web.app/",
    priceText: "19€",
    priceSub: "un solo pago para siempre",
    priceValue: 19,
    badge: "Enfoque Científico",
    category: "Productividad",
    benefits: [
      "Metodología científica anti-procrastinación y de bloqueo de estímulos",
      "Visualización avanzada de rachas, consistencia y foco diario",
      "Temporizadores personalizables de alto rendimiento con audio ambiental",
      "Priorización inteligente de tareas por impacto real y nivel de energía"
    ],
    features: [
      {
        title: "Bloqueador de Impulsos",
        description: "Técnicas interactivas para desactivar la tentación de revisar el móvil.",
        icon: "ZapOff"
      },
      {
        title: "Temporizador de Hiperfoco",
        description: "Intervalos adaptativos de respiración y acción según tus ondas de concentración.",
        icon: "Timer"
      },
      {
        title: "Medidor de Energía",
        description: "Organiza tu agenda del día según tus picos y valles circadianos naturales.",
        icon: "Activity"
      }
    ],
    accentColor: "emerald",
    gradientFrom: "from-emerald-600",
    gradientTo: "to-teal-600"
  },
  {
    id: "pets-mastery",
    name: "Academia Pets Mastery",
    tagline: "Entiende y educa a tu fiel compañero. De obediencia básica a trucos expertos",
    description: "Una academia interactiva completamente gratuita dedicada al adiestramiento de perros y gatos. Diseñada bajo la filosofía de refuerzo positivo, ofrece cursos estructurados de obediencia, soluciones efectivas de comportamiento canino y felino, y guías prácticas para asegurar el bienestar físico y emocional de tu compañero de vida.",
    url: "https://pet-mastery-web-835.web.app",
    priceText: "GRATIS",
    priceSub: "sin cuotas, sin anuncios molestos",
    priceValue: 0,
    badge: "Refuerzo Positivo",
    category: "Bienestar / Mascotas",
    benefits: [
      "Lecciones guiadas paso a paso con vídeos, infografías e ilustraciones",
      "Metodología moderna enfocada 100% en la recompensa y el refuerzo positivo",
      "Solución de problemas comunes (tirones de correa, ladridos, ansiedad por separación)",
      "Comunidad activa de cuidadores para compartir avances y recibir feedback"
    ],
    features: [
      {
        title: "Cursos Estructurados",
        description: "Desde enseñar a sentarse hasta modales avanzados para caminar sin correa.",
        icon: "Award"
      },
      {
        title: "Clínica de Comportamiento",
        description: "Protocolos para erradicar conductas destructivas o miedos irracionales.",
        icon: "HeartPulse"
      },
      {
        title: "Diario de Adiestramiento",
        description: "Registra los avances de tu mascota y visualiza su evolución de aprendizaje.",
        icon: "Dog"
      }
    ],
    accentColor: "rose",
    gradientFrom: "from-rose-500",
    gradientTo: "to-pink-600"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "¿Las aplicaciones son de pago único o suscripción?",
    answer: "Nuestras aplicaciones de pago (Cerebro Familiar y Nunca Más Mañana) se ofrecen bajo un modelo de pago único. Esto significa que pagas una sola vez y tienes acceso ilimitado para siempre, incluyendo todas las actualizaciones futuras, sin suscripciones mensuales ocultas. Por otro lado, la Academia Pets Mastery es completamente gratuita."
  },
  {
    question: "¿Cómo accedo a las aplicaciones tras la compra?",
    answer: "Cada botón te redirigirá directamente a la aplicación oficial. Una vez allí, podrás registrarte o iniciar sesión para acceder a las funcionalidades premium correspondientes. El proceso de pago se realiza de manera segura y directa en la plataforma de cada app."
  },
  {
    question: "¿Puedo usar Cerebro Familiar con todos los miembros de mi casa?",
    answer: "¡Sí, por supuesto! Al adquirir Cerebro Familiar con tu pago único, se te permite invitar a todos los miembros de tu núcleo familiar sin ningún tipo de recargo adicional. Todos compartirán los calendarios, finanzas, comidas y tareas en tiempo real."
  },
  {
    question: "¿Por qué la Academia Pets Mastery es 100% gratuita?",
    answer: "Creemos firmemente que una tenencia responsable de mascotas y una educación basada en el amor y el respeto cambian vidas. Queremos hacer que la información científica de adiestramiento en positivo sea accesible para cualquier cuidador de animales en el mundo, sin barreras económicas."
  },
  {
    question: "¿Qué garantía de soporte tienen las aplicaciones?",
    answer: "Todas las aplicaciones de la suite Nomadax cuentan con soporte técnico continuo. Si tienes algún inconveniente de acceso, dudas sobre las funcionalidades o deseas reportar alguna sugerencia, disponemos de canales de atención directa en cada una de las herramientas."
  }
];
