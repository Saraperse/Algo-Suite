var tab = [];
var resultat = 0;

for( i= 0; i <4; i ++ )
{
tab[i] = Math.floor(Math.random() * 21);
resultat = resultat + tab[i];
}

resultat = resultat / tab.length
console.log("la moyenne est de  : " + resultat);