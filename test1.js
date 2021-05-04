var chiffre1;
var chiffre2;
var resultat;

chiffre1 = Math.floor(Math.random() * 21);
chiffre2 = Math.floor(Math.random() * 21);

console.log("Mon premier chiffre : " + chiffre1);
console.log("Mon seconde chiffre : " + chiffre2);

resultat = chiffre1 - chiffre2;
console.log(resultat);