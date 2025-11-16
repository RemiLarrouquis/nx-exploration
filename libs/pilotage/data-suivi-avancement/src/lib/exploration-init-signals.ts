import { Objectif } from './objectif-model';

export const explorationInitSignal: Objectif[] = [
  new Objectif(
    'Manipulation template - basique',
    'Manipulation simple du template avec un signal de fin de chargement',
    true,
  ),
  new Objectif(
    'Manipulation de données vers le template',
    'Manipulation de data. Initialisation et mise à jour des données',
  ),
];
