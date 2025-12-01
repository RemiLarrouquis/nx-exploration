import { Objectif } from './objectif-model';
import { Designation } from './designation-model';

export class Exploration {
  designation: Designation;
  titre: string;
  description: string;
  objectifs: Objectif[] = [];

  constructor(
    designation: Designation,
    titre: string,
    description: string,
    objectifFinal: Objectif,
    objectifs: Objectif[] = [],
  ) {
    this.designation = designation;
    this.titre = titre;
    this.description = description;
    this.objectifs = objectifs;
    this.objectifs.push(objectifFinal);
  }

  recupererObjectifs(): Objectif[] {
    return this.objectifs;
  }

  ajouterObjectif(objectif: Objectif) {
    this.objectifs.push(objectif);
  }

  completion(): number {
    const nombre = this.objectifs.length;
    const nombreAccompli = this.objectifs.filter((o) => o.accompli).length;
    return Math.round((nombreAccompli / nombre) * 100);
  }
}
