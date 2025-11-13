let Annor = {
    nom: "Annor",
    pointsDeVie: 15,
    attaque: 7,
    precision: 0.5
}

let Faris = {
    nom: "Faris",
    pointsDeVie: 30,
    attaque: 5,
    precision: 1
}

function precision(precision){
if(Math.random < nom.precision) {
    return true 
    } else{
        return false
    }
}

function attaque (Annor,Faris) {
    if (precision (Annor.precision)) {
        Faris.pointsDeVie= Faris.pointsDeVie- attaque.Annor;
 console.log(Faris.nom + "a attaqué" + Annor.nom + " Avant de mourrir il vous reste"+ Vie.Annor + "points")
} else { 
console.log (Annor.nom + " est passé à côter de " + Faris.nom )
}
}

while (Annor.pointsDeVie > 0 && Faris.pointsDeVie > 0) {
  attaque(Annor, Faris);
  if (Faris.pointsDeVie <= 0) {
    console.log(  Faris + "est mort");
    break;
  }

  attaque(Faris, Annor);
  if (Annor.pointsDeVie <= 0) {
    console.log(Annor.nom + "est mort");
    break;
  }
}

