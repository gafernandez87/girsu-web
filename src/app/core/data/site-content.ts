import {
  DownloadItem,
  LibraryGroup,
  NavigationItem,
  ResourceItem,
  VideoItem,
} from '../models/site-content.model';

export const NAVIGATION: readonly NavigationItem[] = [
  { label: 'Presentación', fragment: 'presentacion' },
  { label: 'Estrategia', fragment: 'estrategia' },
  { label: 'Recursos', fragment: 'recursos' },
  { label: 'Biblioteca', fragment: 'biblioteca' },
];

export const STRATEGY_DOWNLOADS: readonly DownloadItem[] = [
  {
    title:
      'Estrategia Provincial de Educación Ambiental para la Gestión Integral de Residuos Sólidos Urbanos',
    description: 'Diagnóstico, objetivos, ejes, acciones, indicadores y mecanismos de monitoreo.',
    format: 'PDF',
  },
];

export const PEDAGOGICAL_RESOURCES: readonly ResourceItem[] = [
  {
    eyebrow: 'Para el aula',
    title: 'Manual para docentes',
    image: {
      src: 'assets/resources/card-1.png',
      alt: 'Jóvenes participando en una actividad de educación ambiental',
    },
    description:
      'Fundamentos, estrategias pedagógicas, actividades y orientaciones para trabajar la GIRSU en el aula.',
    tags: ['Docentes', 'Todos los niveles'],
  },
  {
    eyebrow: 'Uso cotidiano',
    title: 'Cartillas prácticas',
    image: {
      src: 'assets/resources/card-2.png',
      alt: 'Grupo participando en una jornada de separación de residuos',
    },
    description:
      'Fichas sintéticas, actividades listas para usar y recursos gráficos para acompañar cada clase.',
    tags: ['Actividades', 'Imprimible'],
  },
  {
    eyebrow: 'Aprender jugando',
    title: 'Kits educativos',
    image: { src: 'assets/resources/card-3.png', alt: 'Mi bitácora de residuos GIRSUMANÍA' },
    description:
      'Memotest, cuadernillos, origami, cómic, juego de rol e introducción a biomateriales.',
    tags: ['Inicial', 'Primario', 'Secundario'],
  },
  {
    eyebrow: 'Innovación digital',
    title: 'Aplicación educativa',
    image: {
      src: 'assets/resources/card-4.png',
      alt: 'Captura del juego Separación en origen de la aplicación educativa',
    },
    description:
      'Desafíos interactivos, contenidos sobre separación en origen y un sistema de puntos y ranking.',
    tags: ['Android', 'Interactivo'],
    href: '/aplicacion',
  },
];

// Fuente: Feedback videos + productos, VIDEOS - Resumen, columnas G e I.
export const VIDEOS: readonly VideoItem[] = [
  {
    title: 'Residuos: el problema y la solución',
    duration: 'Video breve',
  },
  {
    title: 'Lo que tirás, vuelve.',
    duration: 'Video breve',
  },
  {
    title: 'El verdadero “costo” de la basura',
    duration: 'Video breve',
  },
  {
    title: 'El camino de los residuos',
    duration: 'Video breve',
    youtubeUrl: 'https://youtu.be/oRxi7tpuX4E',
  },
  {
    title: 'El camino de los residuos - Parte II',
    duration: 'Video breve',
  },
  {
    title: '♫La Regla de las 3 R ♫',
    duration: 'Video breve',
  },
  {
    title: 'Reciclaje en Acción: ¿A dónde va?',
    duration: 'Video breve',
  },
  {
    title: 'Del residuo a la tierra',
    duration: 'Video breve',
  },
  {
    title: 'Cadena de valor: Todos somos parte',
    duration: 'Video breve',
  },
  {
    title: 'Todo se transforma: Economía Circular',
    duration: 'Video breve',
  },
  {
    title: 'Experiencia de acción en cooperativas - Donde otros ven basura…',
    duration: 'Video breve',
  },
  {
    title: 'Centro Ambiental Jujuy: El Corazón del sistema',
    duration: 'Video breve',
  },
  {
    title: 'El cambio empieza en la escuela',
    duration: 'Video breve',
    youtubeUrl: 'https://youtu.be/-H0rtREZwFA',
  },
  {
    title: 'El poder de la ciudadanía',
    duration: 'Video breve',
    youtubeUrl: 'https://youtu.be/WIeI0roXnIo',
  },
];

export const LIBRARY_GROUPS: readonly LibraryGroup[] = [
  {
    title: 'Normativa nacional',
    items: [
      {
        title: 'Ley N.º 27.621',
        description: 'Ley para la implementación de la Educación Ambiental Integral.',
        format: 'PDF',
      },
      {
        title: 'Ley Nacional de Educación N.º 26.206',
        description: 'Marco normativo del sistema educativo nacional.',
        format: 'PDF',
      },
      {
        title: 'Ley Yolanda N.º 27.592',
        description: 'Formación integral en ambiente para la función pública.',
        format: 'PDF',
      },
    ],
  },
  {
    title: 'Normativa provincial',
    items: [
      {
        title: 'Ley Provincial N.º 6.105',
        description: 'Educación Ambiental y Decreto Reglamentario N.º 6134-E.',
        format: 'PDF',
      },
      {
        title: 'Ley Provincial N.º 6.403',
        description: 'Modificatoria de la Ley N.º 5.954 de Gestión Integral de RSU.',
        format: 'PDF',
      },
    ],
  },
  {
    title: 'Consulta pública',
    items: [
      {
        title: 'Plan Provincial de Educación Ambiental',
        description: 'Plan de acción para la provincia de Jujuy.',
        format: 'PDF',
      },
      {
        title: 'Programa Escuelas Sustentables',
        description: 'Lineamientos y herramientas para comunidades educativas.',
        format: 'PDF',
      },
    ],
  },
];
