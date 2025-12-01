import { Objectif } from './objectif-model';

export const explorationInitProjets: Objectif[] = [
  new Objectif(
    'Configurations globale',
    'Regrouper toute la configuration à la racine Nx ?',
  ),
  new Objectif(
    'Configurations globale - Désactiver une tâche',
    "Une fois la configuration retiré d'une lib, peut-on toujours décider de désactiver une tâche ?",
  ),
  new Objectif(
    'Générateur @nx/angular',
    "Peut-on l'étendre afin de le customiser ?",
  ),
];
