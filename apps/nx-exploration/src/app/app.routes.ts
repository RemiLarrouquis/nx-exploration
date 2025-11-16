import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'architecture-feature-avancement',
  },
  {
    path: 'feature-architecture-avancement',
    loadChildren: () =>
      import('@nx-exploration/architecture-feature-avancement').then(
        (m) => m.featureArchitectureAvancementRoutes,
      ),
  },
];
