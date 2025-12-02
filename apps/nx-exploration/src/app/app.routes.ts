import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'exploration-feature-affichage-descriptions',
  },
  {
    path: 'feature-architecture-avancement',
    loadChildren: () =>
      import('@nx-exploration/architecture-feature-avancement').then(
        (m) => m.featureArchitectureAvancementRoutes,
      ),
  },
  {
    path: 'exploration-feature-affichage-descriptions',
    loadChildren: () =>
      import('@nx-exploration/exploration-feature-affichage-descriptions').then(
        (m) => m.explorationFeatureAffichageDescriptionsRoutes,
      ),
  },
  {
    path: '**',
    redirectTo: 'exploration-feature-affichage-descriptions',
  },
];
