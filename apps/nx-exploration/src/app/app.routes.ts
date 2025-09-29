import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'feature-architecture-avancement',
  },
  {
    path: 'feature-architecture-avancement',
    loadChildren: () =>
      import('@nx-exploration/feature-architecture-avancement').then(
        (m) => m.featureArchitectureAvancementRoutes,
      ),
  },
];
