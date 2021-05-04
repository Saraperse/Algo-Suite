var readline = require("readline-sync");


var chiffre1 = readline.questionInt("saisir votre chiffre : ");
var chiffre2 = readline.questionInt("saisir votre chiffre : ");


var resultat = (chiffre1 + chiffre2);


console.log ("le resultat est : " +  resultat);