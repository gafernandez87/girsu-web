import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((page) => page.Home),
    title: 'GIRSU | Educación Ambiental de Jujuy',
  },
  {
    path: 'aplicacion',
    loadComponent: () =>
      import('./pages/application-detail/application-detail').then(
        (page) => page.ApplicationDetail,
      ),
    title: 'Aplicación educativa | GIRSU Jujuy',
  },
  { path: '**', redirectTo: '' },
];
