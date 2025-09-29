import { Objectif } from './objectif-model';

export const explorationInitArchitecture: Objectif[] = [
  new Objectif(
    'Arborescence des dossier',
    'Essayer une arborescence simple. Un domaine, plusieurs libs précédés de la mention data / feature / ui / utils',
    true,
  ),
  new Objectif(
    'Hierarchie des domaines',
    'Héritage entre domaines. Est-ce une bonne pratique ? Peut-on avoir une protection (tags Nx) ?',
  ),
];
