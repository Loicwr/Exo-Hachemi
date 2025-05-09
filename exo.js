/*
let value = prompt ("Quel est le nom officiel de Javascript")

if (value.toLowerCase == "ECMAScript") {
    console.log (" bonne réponse ! ")
}
else {
    console.log (" Tu ne connais pas ECMAScript ?")
} */


      // Exercices jour 5 

    let value = "Hello world ";
    alert (value)

    //

    let age = 19;
    alert ( age )

    //
    
    let ageSaisir = prompt ("Quel est votre âge ?")
    alert (ageSaisir);

    //

    let rayonCercle = prompt ("Quel est le rayon du cercle ?")
    resultat = 3.14 * 2 * rayonCercle
    alert ("Le périmètre du cercle est de : " + resultat)

    //

    let a = 5;
    let b = 10;

    let temp = a;
    a = b;
    b = temp;

    console.log(a, b)