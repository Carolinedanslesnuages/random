function aleatoire(){
  var nombreCitation = 12
  var nombreAleatoire = Math.random()
  var numero = Math.round ((nombreCitation - 1 )*nombreAleatoire)+1 

  textes =new Array

  textes[1] = "“Dieu est amour mais l’amour est classé X.”- Guy Bedos"
  textes[2] = "“Le silence oblitère tout.”- Paul Austère"
  textes[3] = "“Le silence est un aveu.”- Euripide"
  textes[4] = "“Les femmes désirent ce qu'elles aiment, les hommes aiment ce qu'ils désirent.” - Sacha Guitry"
  textes[5] = "“La nécessité de rechercher le véritable bonheur est le fondement de notre liberté.” - John Locke "
  textes[6] = "“Moins on en sait mieux on colporte.”- Grégoire Lacroix"
  textes[7] = "“Il est des silences, parfois, qui blessent plus sûrement qu’une injure.” - Philippe Besson"
  textes[8] = "“Cela pèse lourd, une absence. Bien plus lourd qu’une disparition. Parce que avec les morts, on sait qu’ils ne reviendront pas. Tandis que les lointains nous font espérer.” - Philippe Besson"
  textes[9] = "“Tout vrai regard est un désir. ”- Alfred de Musset"
  textes[10] = "“La vie est un sommeil, l’amour en est le rêve, Et vous aurez vécu, si vous avez aimé.”- Alfred de Musset"
  textes[11] = "“Le souvenir est le parfum de l'âme.”- Georges Sand"
  textes[12]="“Le mieux serait que tu me demandes ce que tu veux savoir. Et si tu es perplexe que tu ne sais pas ce que tu dois me demander parce que tu ne sais pas ce que tu veux savoir, demande-moi autre chose.” - Daniel Glattauer"


  document.getElementById("citation").innerHTML = textes[numero];

}

function afficher