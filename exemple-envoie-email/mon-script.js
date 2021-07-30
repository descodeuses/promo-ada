document.querySelector("#envoyer").addEventListener("click", function() {
  console.log("ça fonctionne à partir du document.querySelector('#envoyer')");
})

envoyer.addEventListener("click", function() {
  console.log("ça fonctionne à partir de l'objet créer par le navigateur à partir de l'ID de l'élément HTML");
})
