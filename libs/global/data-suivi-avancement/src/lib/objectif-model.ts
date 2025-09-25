export class Objectif {
  titre: string;
  description: string;
  accompli = false;

  constructor(titre: string, description: string) {
    this.titre = titre;
    this.description = description;
  }
}
