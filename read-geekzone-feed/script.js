
function afficheArticle(article) {

  let element = document.createElement("li")

  let lien = document.createElement("a")
  lien.href = article.url
  lien.textContent = article.title

  element.appendChild(lien)
  return element
}

let liste = document.createElement("ul")

for(let i = 0; i < 10; i++) {
  article = afficheArticle(data.items[i])
  liste.appendChild(article)
}

document.querySelector("body").appendChild(liste)

