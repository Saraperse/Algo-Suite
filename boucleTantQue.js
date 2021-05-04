var readline = require("readline-sync");

do{
    var chiffre = readline.questionInt("saisir un chiffre ente 10 et 20 : " );
if(chiffre <10)
{
    console.log("le chiffre est trop petit ! ");
 8
} else
    {
    if (chiffre>20)
    {
        console.log("le chiffre est trop grand! ");
    }
    else
    {
        console.log("le chiffre est bien entre 10 et 20");


    }
}
} while(chiffre<10 || chiffre>20);

