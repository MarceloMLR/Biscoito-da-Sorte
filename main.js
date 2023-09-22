const Biscoito = document.querySelector("#BiscoitoClick")
const BiscoitoClose = document.querySelector(".screen1")
const BiscoitoOpen = document.querySelector(".screen2")
const BiscoitoOpenButton = document.querySelector(".screen2 button")


const BiscoitoClick = (e) => {
    e.preventDefault()
    BiscoitoClose.classList.toggle("hide")
    BiscoitoOpen.classList.toggle("hide")
}

const BiscoitoBack = (e) => {
    e.preventDefault()
    BiscoitoClose.classList.toggle("hide")
    BiscoitoOpen.classList.toggle("hide")
}


document.addEventListener("click", BiscoitoClick)

