const containerEl = document.querySelector(".container");
console.log(typeof  containerEl);
console.log(containerEl);
const boxEl = document.querySelector(".box");
console.log(typeof  boxEl);
console.log(boxEl);
const iconSun = document.querySelector(".bi-brightness-high");
console.log(iconSun);
const bodyEl = document.querySelector("body");
console.log(iconSun);
const iconMoon = document.querySelector(".bi-moon-stars-fill");
boxEl.addEventListener('click', () => {
    bodyEl.classList.toggle("bodystyle");
    boxEl.classList.toggle("boxactive"); 
    if(iconSun.style.display == "block"){
        iconSun.style.display = "none";
    }
    else{
        iconSun.style.display = "block";   
    }
    if(iconMoon.style.display == "none"){
        iconMoon.style.display = "block";
    }
    else{
        iconMoon.style.display = "none";   
    }
})