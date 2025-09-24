import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'ui-main-bar',
    loadChildren: () =>
      import('@nx-exploration/ui-main-bar').then((m) => m.uiMainBarRoutes),
  },
  {
    path: 'ui-main-menu',
    loadChildren: () =>
      import('@nx-exploration/ui-main-menu').then((m) => m.uiMainMenuRoutes),
  },
];
