export class Objectif {
  titre: string;
  description: string;
  commentaire: string;
  accompli: boolean;

  constructor(
    titre: string,
    description: string,
    accompli = false,
    commentaire = '',
  ) {
    this.titre = titre;
    this.description = description;
    this.accompli = accompli;
    this.commentaire = commentaire;
  }
}
