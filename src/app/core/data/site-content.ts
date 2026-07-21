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
    title: 'Estrategia provincial completa',
    description: 'Diagnóstico, objetivos, ejes, acciones, indicadores y mecanismos de monitoreo.',
    format: 'PDF',
  },
  {
    title: 'Resumen ejecutivo',
    description: 'Síntesis de la estrategia y matriz consolidada de acciones.',
    format: 'PDF',
  },
  {
    title: 'Lineamientos generales',
    description: 'Bases para el Centro Educativo de Economía Circular de Jujuy.',
    format: 'PDF',
  },
];

export const PEDAGOGICAL_RESOURCES: readonly ResourceItem[] = [
  {
    eyebrow: 'Para el aula',
    title: 'Manual para docentes',
    description:
      'Fundamentos, estrategias pedagógicas, actividades y orientaciones para trabajar la GIRSU en el aula.',
    tags: ['Docentes', 'Todos los niveles'],
  },
  {
    eyebrow: 'Uso cotidiano',
    title: 'Cartillas prácticas',
    description:
      'Fichas sintéticas, actividades listas para usar y recursos gráficos para acompañar cada clase.',
    tags: ['Actividades', 'Imprimible'],
  },
  {
    eyebrow: 'Aprender jugando',
    title: 'Kits educativos',
    description:
      'Memotest, cuadernillos, origami, cómic, juego de rol e introducción a biomateriales.',
    tags: ['Inicial', 'Primario', 'Secundario'],
  },
  {
    eyebrow: 'Innovación digital',
    title: 'Aplicación educativa',
    description:
      'Desafíos interactivos, contenidos sobre separación en origen y un sistema de puntos y ranking.',
    tags: ['Android', 'Interactivo'],
    href: '/aplicacion',
  },
];

export const VIDEOS: readonly VideoItem[] = Array.from({ length: 14 }, (_, index) => ({
  title: `Microspot educativo ${String(index + 1).padStart(2, '0')}`,
  duration: 'Video breve',
}));

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
