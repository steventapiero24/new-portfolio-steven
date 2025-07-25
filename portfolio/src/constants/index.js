// index.js
export const servicesData = [
  {
    title: "Diseño y Desarrollo Frontend",
    description:
      "Creo interfaces intuitivas, rápidas y atractivas que conectan con tus usuarios. Desarrollo aplicaciones web con tecnologías modernas, optimizadas para ofrecer una experiencia fluida en cualquier dispositivo.",
    items: [
      {
        title: "Arquitectura Frontend",
        description: "(Componentes escalables, buenas prácticas, TypeScript)",
      },
      {
        title: "UI/UX Interactivo",
        description: "(Diseños centrados en el usuario, animaciones suaves, microinteracciones)",
      },
      {
        title: "Accesibilidad Web",
        description: "(WCAG, navegación con teclado, contraste y legibilidad)",
      },
    ],
  },
  {
    title: "Optimizaciones Visuales y de Rendimiento",
    description:
      "Un buen diseño no sirve si no carga rápido. Mejoro el rendimiento y diseño visual con técnicas modernas, garantizando tiempos de carga óptimos y una experiencia de usuario impecable.",
    items: [
      {
        title: "Performance UI",
        description: "(Lazy loading, optimización de assets, Lighthouse 90+)",
      },
      {
        title: "Responsive Design",
        description: "(Diseño adaptado a móviles, tablets y escritorio)",
      },
      {
        title: "Testing Visual",
        description: "(Pruebas de interfaz, regresión visual, pixel-perfect control)",
      },
    ],
  },
  {
    title: "Sistemas de Diseño y Consistencia Visual",
    description:
      "Mantener la coherencia en tu producto es clave. Construyo y mantengo sistemas de diseño escalables para asegurar identidad visual y eficiencia en el desarrollo.",
    items: [
      {
        title: "Design Systems",
        description: "(Storybook, Figma → Código, tokens de diseño)",
      },
      {
        title: "Componentes Reutilizables",
        description: "(Buttons, Modals, Forms personalizados)",
      },
      {
        title: "Tematización y Branding",
        description: "(Dark mode, estilos personalizados por marca)",
      },
    ],
  },
  {
    title: "Aplicaciones Frontend Modernas",
    description:
      "Desde landing pages hasta apps complejas, desarrollo interfaces modernas con atención al detalle, enfocadas en una navegación clara, diseño atractivo y alto rendimiento.",
    items: [
      {
        title: "Single Page Applications",
        description: "(React, Vue, Angular con rutas dinámicas y estados)",
      },
      {
        title: "Progressive Web Apps",
        description: "(Experiencia tipo app, offline-ready, push notifications)",
      },
      {
        title: "Integración con APIs",
        description: "(Conexión fluida con backend, manejo visual de estados)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Banco interamericano - cartera inteligente",
    description:
      "Participé en el desarrollo de un sistema bancario basado en un panel de control integral, diseñado para administradores de préstamos. Este panel incluía tablas dinámicas, indicadores clave, informes automatizados, cálculo de cifras financieras y múltiples estados en cada componente, permitiendo la gestión eficiente de créditos y la generación de informes anuales sobre el portafolio crediticio. Mi rol se centró en el prototipado y la definición del Design System, aplicando la metodología Atomic Design para estructurar pantallas, componentes y microcomponentes de manera modular y escalable. Posteriormente, llevé estos diseños a la maquetación en Angular, creando los componentes iniciales del proyecto para que el equipo de desarrollo frontend integrara la lógica necesaria. Para garantizar escalabilidad y mantenimiento eficiente, se emplearon bibliotecas especializadas de Angular Material y otras herramientas del ecosistema. Esta metodología permitió optimizar el desarrollo, asegurando una interfaz consistente y una experiencia de usuario fluida y para todo el tema de estilos utilice Sass, implementando variables, ng class, estilos aisaldos y generales dependiendo el componente a trabajar",
    href: "",
    image: "/assets/projects/reactcartera.JPG",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Figma" },
      { id: 2, name: "Angular.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Sass" },
      { id: 5, name: "Git - Gitlab" },
      { id: 6, name: "AngularUI" },
      { id: 7, name: "PrimeNg" },
    ],
  },
  {
    id: 2,
    name: "Spylt",
    description:
      "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
    href: "",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "clickerbait",
    description:
      "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    href: "",
    image: "/assets/projects/clickerbait.webp",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Wordpress" },
      { id: 2, name: "Elementor Pro" },
      { id: 3, name: "Figma" },
      { id: 4, name: "Js - Css" },
    ],
  },
  {
    id: 4,
    name: "Futuro valor",
    description:
      "Un sitio web completo para la empresa de consultoria financiera, realice la marca, el trabajo completo de UX/UI y finalmente el desarrollo en Wordpress.",
    href: "",
    image: "/assets/projects/futuro-valor.webp",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Wordpress" },
      { id: 2, name: "Elementor Pro" },
      { id: 3, name: "Figma" },
      { id: 4, name: "Js - Css" },
    ],
  },
  {
    id: 5,
    name: "Banco interamericano - Client portal",
    description:
      "Sistema bancario basado en un panel de control integral, diseñado para administradores de préstamos.",
    href: "",
    image: "/assets/projects/idbangular.JPG",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "AngularUI" },
      { id: 3, name: "Figma" },
      { id: 4, name: "Material UI" },
      { id: 5, name: "Git - Gitlab" },
    ],
  },
  {
    id: 6,
    name: "Inst. de siverseguridad de España - Incibe",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "",
    image: "/assets/projects/idsob.PNG",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/steventapiero.visual/" },
  {
    name: "Youtube",
    href: "https://www.youtube.com/channel/UCZhtUWTtk3bGJiMPN9T4HWA",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/steven-tapiero" },
  { name: "GitHub", href: "https://github.com/steventapiero24?tab=overview&from=2025-07-01&to=2025-07-24" },
];
