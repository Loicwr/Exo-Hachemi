/*
let value = prompt ("Quel est le nom officiel de Javascript")

if (value.toLowerCase == "ECMAScript") {
    console.log (" bonne réponse ! ")
}
else {
    console.log (" Tu ne connais pas ECMAScript ?")
} */


        // Exercices jour 5 

        //Utilisation des variables

        /*Exercice 1
        Affichez un "Hello World !"*/

            let value = "Hello world ";
            alert (value)

        /*Exercice 2
        Créez une variable Age Affichez le contenu de cette variable*/

            let age = 19;
            alert ( age )

        /*Exercice 3
        Demandez à l'utilisateur de saisir son âge Affichez le contenu de la valeur saisie*/
    
            let ageSaisir = prompt ("Quel est votre âge ?")
            alert (ageSaisir);

        /*Exercice 4
        Demandez à l'utilisateur de saisir le rayon d'un cercle Affichez le périmètre du cercle*/

            let rayonCercle = prompt ("Quel est le rayon du cercle ?")
            resultat = 3.14 * 2 * rayonCercle
            alert ("Le périmètre du cercle est de : " + resultat)

        /*Exercice 5
        Soit 2 valeurs saisies par une utilisateur dans 2 variables Inversez ces variables*/
            let a = 5;
            let b = 10;

            let temp = a;
            a = b;
            b = temp;

    console.log(a, b)

        //Utilisation des structures conditionnelles

        //Exercice 1
        //Demandez à l'utilisateur de saisir son âge A partir de la saisie, affichez si il est majeur ou mineur

            let tonAge = prompt (" Quel est ton âge ?")
            if (tonAge < 18 ){
                alert ("Vous êtes mineur")
            }
            else {
                alert ("vous êtes majeur")
            }

        //Exercice 2
        //Demandez à l'utilisateur de saisir un nombre Indiquez si cette variable est paire ou impaire

            let nombrePairImpair = prompt ("donner moi un nombre, regardons si il est pair ou impair");
            if (nombrePairImpair % 2 == 0){
                alert ("Le nombre est pair")
            }
            else {
                alert ("le nombre est impair")
            }

        //Exercice 3
        //Demandez la saisie d'une note. Affichez le résultat suivant :

        //[0-9] : Insuffisant
        //[10-13] : Passable
        //[14-16] : Bien
        //[17-20] : Excellent

            let noteFrancais = prompt ("Quel est votre note ?")
            if ( noteFrancais < 10 ) {
                alert (" Insuffisant ")
            }
            else if ( noteFrancais >= 10 && noteFrancais <= 13 ){
                alert ("Passable")
            }
            else if ( noteFrancais >=14 && noteFrancais <= 16 ){
                alert ("Bien")
            }
            else if ( noteFrancais >= 17 && noteFrancais <= 20 ){
                alert ("Excellent")
            }

        //Exercice 4
        //Saisissez une année Affichez si l'année est bissextile ou non Pour rappel, une année bissextile c'est :

        //Une année multiple de 4
        //Une année non multiple de 100
        //OU une année multiple de 400

            let annee = parseInt(prompt("Saisissez une année :"));

            if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
                alert (annee + " est une année bissextile.");
            } else {
                alert (annee + " n'est pas une année bissextile.");
            }
