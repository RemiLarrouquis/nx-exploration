import { Objectif } from './objectif-model';

export const explorationInitNxGradle: Objectif[] = [
  new Objectif(
    'Gradle - Piloter une tache',
    'Essayer de contrôler une tache gradle',
  ),
  new Objectif(
    'Gradle - Créer projet springBoot',
    'Insérer un projet spring boot gradle et contrôler le build avec Nx.',
  ),
  new Objectif(
    'Gradle / Angular - Créer une webjar avec le build',
    'Convertir la production du build angular en webjar.',
  ),
  new Objectif(
    'Gradle / Angular - Insérer la webjar dans le projet springBoot',
    'Une fois le build réalisé, insérer le webjar produit dans spring boot',
  ),
  new Objectif(
    'Nx / Gradle - Orchestration',
    "Build Angular -> webjar -> spring boot, Comment produire un livrable .war à partir d'un build angular.",
  ),
];
