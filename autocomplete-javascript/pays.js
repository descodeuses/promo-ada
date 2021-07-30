// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

function trouveDesSuggestionsAPartirDeLa(saisieEnCours) {
  if (saisieEnCours == "") return [];

  let suggestions = []
  listePays.forEach(function (paysDeListe) {
    let debutDuPays = paysDeListe.slice(0, saisieEnCours.length);

    if (debutDuPays.toLowerCase() == saisieEnCours.toLowerCase()){
      suggestions.push(paysDeListe);
    };
  })
  return suggestions;
}

function afficheLesSuggestionsDePays(suggestions) {
  suggestions.forEach(function(suggestion){

    let elementDeListe = document.createElement("li");
    elementDeListe.textContent = suggestion
    elementDeListe.classList.add("suggestion")

    elementDeListe.addEventListener("click", function (liSelectionne) {
      // document.querySelector("#pays").value
      // document.getElementById("pays").value
      pays.value = liSelectionne.target.innerHTML
    })

    document.querySelector('#suggestions').appendChild(elementDeListe);
  })
}

// document.querySelector("#pays").addEventListener(
// document.getElementById("pays").addEventListener(
pays.addEventListener("input", function(evenement) {
  // initialisation
  document.querySelector('#suggestions').innerHTML = "";
  let saisieEnCours = evenement.target.value;

  // rechercher les pays possible
  let suggestions = trouveDesSuggestionsAPartirDeLa(saisieEnCours);

  // afficher les suggestions de pays
  afficheLesSuggestionsDePays(suggestions);
})
