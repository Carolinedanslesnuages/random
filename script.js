// Fonction pour afficher une citation aléatoire
function afficherCitationAleatoire() {
  // Liste des citations
  const citations = [
    "Dieu est amour mais l’amour est classé X. - Guy Bedos",
    "Le silence oblitère tout. - Paul Austère",
    "Le silence est un aveu. - Euripide",
    "Les femmes désirent ce qu'elles aiment, les hommes aiment ce qu'ils désirent. - Sacha Guitry",
    "La nécessité de rechercher le véritable bonheur est le fondement de notre liberté. - John Locke",
    "Moins on en sait mieux on colporte. - Grégoire Lacroix",
    "Il est des silences, parfois, qui blessent plus sûrement qu’une injure. - Philippe Besson",
    "Cela pèse lourd, une absence. Bien plus lourd qu’une disparition. Parce que avec les morts, on sait qu’ils ne reviendront pas. Tandis que les lointains nous font espérer. - Philippe Besson",
    "Tout vrai regard est un désir. - Alfred de Musset",
    "La vie est un sommeil, l’amour en est le rêve, Et vous aurez vécu, si vous avez aimé. - Alfred de Musset",
    "Le souvenir est le parfum de l'âme. - Georges Sand",
    "Le mieux serait que tu me demandes ce que tu veux savoir. Et si tu es perplexe que tu ne sais pas ce que tu dois me demander parce que tu ne sais pas ce que tu veux savoir, demande-moi autre chose. - Daniel Glattauer"
  ];

  // Génération d'un index aléatoire
  const indexAleatoire = Math.floor(Math.random() * citations.length);

  // Sélection de l'élément cible
  const elementCitation = document.getElementById("citation");

  // Vérification si l'élément existe avant de modifier son contenu
  if (elementCitation) {
    elementCitation.innerHTML = citations[indexAleatoire];
  } else {
    console.error("L'élément avec l'ID 'citation' est introuvable.");
  }
}

afficherCitationAleatoire();
