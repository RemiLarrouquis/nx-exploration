import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'exploration-feature-affichage-descriptions',
    loadChildren: () =>
      import('@nx-exploration/exploration-feature-affichage-descriptions').then(
        (m) => m.explorationFeatureAffichageDescriptionsRoutes,
      ),
  },
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
