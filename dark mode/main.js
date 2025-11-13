let boutonCouleur = document.getElementById("changerCouleur")
let divs = document.querySelectorAll("div")

boutonCouleur.addEventListener('click',function() {
    divs.forEach(div => div.classList.toggle('dark'))
})
