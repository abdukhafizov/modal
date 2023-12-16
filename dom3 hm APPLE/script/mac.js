let mac_img = document.querySelector(".mac_img")
let whitee = document.querySelector(".White")
let Space_Grey = document.querySelector(".Space_Grey")
let color = document.querySelector(".color")

let price = document.querySelector("#price")
let first_ggbs = document.querySelector("#first_ggbs")
let second_ggbs = document.querySelector("#second_ggbs")
let third_ggbs = document.querySelector("#third_ggbs")
let fourth_ggbs = document.querySelector("#fourth_ggbs")

Space_Grey.onclick = () =>{
    Space_Grey.style.background = '#0071E3';
    whitee.style.background = '#CFE7FF';
    mac_img.style.backgroundImage = 'url(../img/mac_grey.svg)'
    color.innerText = "Space Grey"
}
whitee.onclick = () =>{
    whitee.style.background = '#0071E3';
    Space_Grey.style.background = '#CFE7FF'
    mac_img.style.backgroundImage = 'url(../img/macwhite.svg)'
    color.innerText = "White"
}

first_ggbs.onclick = () => {
    price.innerText = "$1,999"
    first_ggbs.style.borderColor = "#007FFF"
    second_ggbs.style.borderColor = "#CFE7FF"
    third_ggbs.style.borderColor = "#CFE7FF"
    fourth_ggbs.style.borderColor = "#CFE7FF"
}
second_ggbs.onclick = () => {
    price.innerText = "$2,199"
    second_ggbs.style.borderColor = "#007FFF"
  first_ggbs.style.borderColor = "#CFE7FF"
    third_ggbs.style.borderColor = "#CFE7FF"
    fourth_ggbs.style.borderColor = "#CFE7FF"
}
third_ggbs.onclick = () => {
    price.innerText = "$2,599"
    third_ggbs.style.borderColor = "#007FFF"
    second_ggbs.style.borderColor = "#CFE7FF"
    first_ggbs.style.borderColor = "#CFE7FF"
    fourth_ggbs.style.borderColor = "#CFE7FF"
}
fourth_ggbs.onclick = () => {
    price.innerText = "$3,199"
    fourth_ggbs.style.borderColor = "#007FFF"
    second_ggbs.style.borderColor = "#CFE7FF"
    third_ggbs.style.borderColor = "#CFE7FF"
    first_ggbs.style.borderColor = "#CFE7FF"
}

