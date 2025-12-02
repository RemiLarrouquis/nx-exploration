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
  new Objectif(
    'Composant : gestion des inputs par signal',
    'Simple input, requis ou non requis',
    true,
  ),
  new Objectif(
    'Composant : gestion des inputs par signal',
    'Model input pour un double binding.',
  ),
  new Objectif(
    'Composant : gestion des ouputs par signal ?',
    'Est-ce possible ?',
  ),
  new Objectif(
    "Http : Appel d'une resource ?",
    'Quels sont les prérequis ? Les avantages ? Et peut-on ce passer des pipes ?',
  ),
  new Objectif(
    'HTML : Flow contrôl',
    'Utilisation intensives des possibilités',
  ),
];
