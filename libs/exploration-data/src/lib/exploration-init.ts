import { Exploration } from './exploration-model';
import { Objectif } from './objectif-model';
import { explorationInitSignal } from './exploration-init-signals';
import { explorationInitArchitecture } from './exploration-init-architecture';
import { explorationInitProjets } from './exploration-init-projets';
import { explorationInitNxCloud } from './exploration-init-nxcloud';
import { explorationInitNxGradle } from './exploration-init-nxgradle';
import { explorationInitDoc } from './exploration-init-doc';
import { Designation } from './designation-model';
import { DesignationCode } from './designation-code';
import { PrimeIcons } from 'primeng/api';

export const initialisationExplorations: Exploration[] = [
  new Exploration(
    new Designation(DesignationCode.SIGNAL, '#fbbf24', PrimeIcons.BOLT),
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
    new Designation(DesignationCode.DOC, '#60faed', PrimeIcons.PRINT),
    'Documentation et changelog',
    'Produire de la lecture directement depuis le code',
    new Objectif(
      'Documentation et Changelog',
      'Production, industrialisation de docs et changelog, automatisés bien sûr.',
    ),
    explorationInitDoc,
  ),
  new Exploration(
    new Designation(
      DesignationCode.ARCHITECTURE,
      '#34d399',
      PrimeIcons.BUILDING_COLUMNS,
    ),
    'Architecture',
    "Appliquer l'architecture définie et l'éprouvée.",
    new Objectif(
      'Architecture validée',
      "La mise en place de l'architecture est un succès et le résultat est satisfaisant.",
      true,
    ),
    explorationInitArchitecture,
  ),
  new Exploration(
    new Designation(DesignationCode.NX_PROJECT, '#245afb', PrimeIcons.COG),
    'Nx Projects',
    "Tester l'inférence de tâches Nx et s'il est possible de réduire les fichiers de configuration.",
    new Objectif(
      'Un seul fichier projects par lib Nx',
      'Réussir à réduire la configuration au maximum théorique',
    ),
    explorationInitProjets,
  ),
  new Exploration(
    new Designation(
      DesignationCode.NX_GRADLE,
      '#d460fa',
      PrimeIcons.HEART_FILL,
    ),
    'Nx Gradle',
    'NX x Gradle love storie',
    new Objectif(
      'Production de livrable',
      'On build en angular on produit en java',
    ),
    explorationInitNxGradle,
  ),
  new Exploration(
    new Designation(DesignationCode.NX_CLOUD, '#fa606d', PrimeIcons.CLOUD),
    'Nx Cloud',
    'Voir à quoi ressemble le fameux Cloud Nx.',
    new Objectif('Curiosité assouvie', 'Plus rien à voir on remballe'),
    explorationInitNxCloud,
  ),
];
