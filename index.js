// ----------------------slide-image-----start--------------------------
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");

const images = document.querySelectorAll(".image")
let slideNumber = 1;
const length = images.length
right.addEventListener('click',()=>{
    if (slideNumber < length) {
        
        slider.style.transform = `translateY(-${slideNumber*100}%)`;
        slideNumber++
    }else{
        slider.style.transform = `translateY(0%)`;
        slideNumber = 1;
    }
})
left.addEventListener('click',()=>{
    if (slideNumber > 1) {
        
        slider.style.transform = `translateY(-${(slideNumber-2)*100}%)`;
        slideNumber--
    }else{
        slider.style.transform = `translateY(-${(length-1)*100}%)`;
        slideNumber = 1;
    }
})
// ----------------------slide-image-----end--------------------------

var sidemenu = document.getElementById("sidemenu")

function openmenu() {
    sidemenu.style.bottom = "0"
}
function closemenu() {
    sidemenu.style.bottom = "-800px"
}
// -------------------------------
const search = document.getElementById("input")
const iconopen = document.getElementById("icon-2")

function opensearch() {
    search.style.display = "block"
    iconopen.style.display = "block"
}
function closesearch() {
    search.style.display = "none"
    iconopen.style.display = "none"
} 


// ---------------------------


