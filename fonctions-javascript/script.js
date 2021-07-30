// Aussi derniere question, dans les cours OpenClassroom ils marquent souvent une syntaxe qu'on a pas vu en cours et qui s'écrit un peu comme ca :
//
const additionConstEtFleche = (premier, deuxieme) => { return premier + deuxieme; }

const additionConst = function (premier, deuxieme) { return premier + deuxieme; }

function additionClassique(premier, deuxieme) { return premier + deuxieme; }

calcul.addEventListener("click", function() {
  let premiereValeur = parseInt(premier.value, 10),
    deuxiemeValeur = parseInt(deuxieme.value, 10);

  resultatConstEtFleche.innerHTML = additionConstEtFleche(premiereValeur, deuxiemeValeur)
  resultatConst.innerHTML = additionConst(premiereValeur, deuxiemeValeur)
  resultatClassique.innerHTML = additionClassique(premiereValeur, deuxiemeValeur)
});

//je parle du " =>" apres la constante, dans quelle situation on utilise ce signe la?
