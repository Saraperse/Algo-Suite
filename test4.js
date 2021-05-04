var resultat = 1;
var readline = require("readline-sync");
var chiffresaisie = readline.questionInt("saisir la factirielle  a calculer : ");

for (cpt = 1 ; cpt <= chiffresaisie; cpt++){
    resultat = resultat * cpt;
}
console.log(resultat);