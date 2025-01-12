var sidemenu = document.getElementById("sidemenu")

function openmenu() {
    sidemenu.style.bottom = "0"
}
function closemenu() {
    sidemenu.style.bottom = "-800px"
}



const search = document.getElementById("input--1")
const iconopen = document.getElementById("icon-2-1")

function opensearch() {
    search.style.display = "block"
    iconopen.style.display = "block"
}
function closesearch() {
    search.style.display = "none"
    iconopen.style.display = "none"
} 


const dropdown =document.querySelectorAll('.dropdown')

function opendrop() {
    for (const link of dropdown){
        link.style.display='block'
    }
}