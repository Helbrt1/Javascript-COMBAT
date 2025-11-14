let boutonCouleur = document.getElementById("changerCouleur")
let divs = document.querySelectorAll("div")

boutonCouleur.addEventListener('click',function() {
    divs.forEach(div => div.classList.toggle('dark'))

    
})

let infoButton = document.getElementById("infoButton")
let INFO = document.getElementById("INFO")


infoButton.addEventListener("click", function () {

    
    INFO.classList.toggle("open")
})
