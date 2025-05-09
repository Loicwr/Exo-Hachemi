/*
let value = prompt ("Quel est le nom officiel de Javascript")

if (value.toLowerCase == "ECMAScript") {
    console.log (" bonne réponse ! ")
}
else {
    console.log (" Tu ne connais pas ECMAScript ?")
} */


      // Exercices jour 5 

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