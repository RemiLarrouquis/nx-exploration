import { Objectif } from './objectif-model';

export const explorationInitNxCloud: Objectif[] = [
  new Objectif('Suivi CI', "Consulter facilement l'état du dernier pipeline"),
  new Objectif(
    'Suivi CI - Erreurs',
    "Quels sont les avantages afin d'identifier une erreur",
  ),
  new Objectif('Local binding Nx Cloud', 'Ressenti et avantages ?'),
  new Objectif(
    'Local binding - Execution des tests',
    'Ressenti et avantages ?',
    true,
    'Exécution très rapide, interface en ligne de commande mais très propre et claire. (voir nxcloud-cmd-test-execution.png)',
  ),
];
