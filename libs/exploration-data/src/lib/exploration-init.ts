import { Exploration } from './exploration-model';
import { Objectif } from './objectif-model';
import { DesignationExploration } from './designation-exploration';
import { explorationInitSignal } from './exploration-init-signals';
import { explorationInitArchitecture } from './exploration-init-architecture';

export const initialisationExplorations: Exploration[] = [
  new Exploration(
    DesignationExploration.SIGNAL,
    'Angular Signal',
    "Expérimenter avec Signal d'Angular et les détections de changements.",
    new Objectif(
      'Maitriser les bases',
      "Comprendre un signal, l'utiliser et savoir éviter les pièges",
      false,
    ),
    explorationInitSignal,
  ),
  new Exploration(
    DesignationExploration.ARCHITECTURE,
    'Architecture',
    "Appliquer l'architecture définie et l'éprouvée.",
    new Objectif(
      'Architecture validée',
      "La mise en place de l'architecture est un succès et le résultat est satisfaisant.",
    ),
    explorationInitArchitecture,
  ),
  new Exploration(
    DesignationExploration.NX_PROJECT,
    'Nx Projects',
    "Tester l'inférence de tâches Nx et s'il est possible de réduire les fichiers de configuration.",
    new Objectif(
      'Un seul fichier projects par lib Nx',
      'Réussir à réduire la configuration au maximum théorique',
    ),
  ),
  new Exploration(
    DesignationExploration.NX_CLOUD,
    'Nx Cloud',
    'Voir à quoi ressemble le fameux Cloud Nx.',
    new Objectif('Curiosité assouvie', 'Plus rien à voir on remballe'),
  ),
];
