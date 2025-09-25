import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'feature-liste-taches',
  },
  {
    path: 'feature-liste-taches',
    loadChildren: () =>
      import('@nx-exploration/feature-liste-taches').then(
        (m) => m.featureListeTachesRoutes,
      ),
  },
];
