export class Objectif {
  titre: string;
  description: string;
  accompli: boolean;

  constructor(titre: string, description: string, accompli = false) {
    this.titre = titre;
    this.description = description;
    this.accompli = accompli;
  }
}
