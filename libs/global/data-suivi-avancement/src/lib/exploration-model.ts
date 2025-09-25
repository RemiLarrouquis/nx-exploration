import { Objectif } from './objectif-model';
import { DesignationExploration } from './designation-exploration';

export class Exploration {
  designation: DesignationExploration;
  titre: string;
  description: string;
  objectifs: Objectif[] = [];

  constructor(
    designation: DesignationExploration,
    titre: string,
    description: string,
    objectifFinal: Objectif,
  ) {
    this.designation = designation;
    this.titre = titre;
    this.description = description;
    this.objectifs.push(objectifFinal);
  }

  ajouterObjectif(objectif: Objectif) {
    this.objectifs.push(objectif);
  }

  completion(): number {
    const nombre = this.objectifs.length;
    const nombreAccompli = this.objectifs.filter((o) => o.accompli).length;
    return (nombreAccompli / nombre) * 100;
  }
}
