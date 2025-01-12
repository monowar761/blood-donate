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
