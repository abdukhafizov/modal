let colorText = document.querySelector(".color")

let naturalTitan = document.querySelector("#natural")
let blueTitan = document.querySelector("#blue")
let whitelTitan = document.querySelector("#white")
let blackTitan = document.querySelector("#black")

let credit = document.querySelector(".credit")
let iphon = document.querySelector(".iphon")

let model_Pro = document.querySelector(".model_Pro")
let model_ProMax = document.querySelector(".model_ProMax")

let first = document.querySelector("#first")
let second = document.querySelector("#second")
let third = document.querySelector("#third")
let fourt = document.querySelector("#fourt")

let none_block = document.querySelector(".none_block")

first.onclick = () => {
    first.style.borderColor = '#0071e3';
    second.style.borderColor = '#86868b';
    third.style.borderColor = '#86868b';
    fourt.style.borderColor = '#86868b';
    
}

second.onclick = () => {
    second.style.borderColor = '#0071e3';
    first.style.borderColor = '#86868b';
    third.style.borderColor = '#86868b';
    fourt.style.borderColor = '#86868b';
    
}

third.onclick = () => {
    first.style.borderColor = '#86868b';
    second.style.borderColor = '#86868b';
    third.style.borderColor = '#0071e3';
    fourt.style.borderColor = '#86868b';
    
}

fourt.onclick = () => {
    first.style.borderColor = '#86868b';
    second.style.borderColor = '#86868b';
    third.style.borderColor = '#86868b';
    fourt.style.borderColor = '#0071e3' ;
    
}

model_Pro.onclick = () => {
    none_block.style.display = "block"
    model_Pro.style.borderColor = '#0071e3';
    model_ProMax.style.borderColor = '#86868b';
    credit.innerText = "From $999 or $41.62/mo.per month for 24 mo.*";
    iphon.style.backgroundImage = 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846363993")';
}

model_ProMax.onclick = () => {
    none_block.style.display = "block"
    model_ProMax.style.borderColor = '#0071e3';
    model_Pro.style.borderColor = '#86868b';
    credit.innerText = "From $1199 or $49.95/mo.per month for 24 mo.*";
    iphon.style.backgroundImage = 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845702708")';
}

console.log(model_Pro);


naturalTitan.onmouseenter = () => {
    colorText.innerText = "Color - Natural Titanium"
}
naturalTitan.onmouseleave = () => {
    colorText.innerText = "Color"
}

blueTitan.onmouseenter = () => {
    colorText.innerText = "Color - Blue Titanium"
}
blueTitan.onmouseleave = () => {
    colorText.innerText = "Color"
}

whitelTitan.onmouseenter = () => {
    colorText.innerText = "Color - White Titanium"
}
whitelTitan.onmouseleave = () => {
    colorText.innerText = "Color"
}

blackTitan.onmouseenter = () => {
    colorText.innerText = "Color - Black Titanium"
}
blackTitan.onmouseleave = () => {
    colorText.innerText = "Color"
}

naturalTitan.onclick = () =>{
    iphon.style.backgroundImage = 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium_AV3?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011642028")'
}
blueTitan.onclick = () =>{
    iphon.style.backgroundImage = 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium_AV3?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011640626")'
}
whitelTitan.onclick = () =>{
    iphon.style.backgroundImage = 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium_AV3?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693011642423")'
}
blackTitan.onclick = () =>{
    iphon.style.backgroundImage = 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium_AV3?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693011640275")'
}

//-------------


let see_deals = document.querySelector(".see_deals")
let modal_wind_global = document.querySelector(".modal_wind_global")
let close = document.querySelector(".close")
let choose = document.querySelector("#choose")

see_deals.onclick = () =>{
    modal_wind_global.style.display = "block"
}

close.onclick = () =>{
    modal_wind_global.style.display = "none"
}

choose.onclick = () =>{
    choose.style.borderColor = "blue"
}