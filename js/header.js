const button = document.getElementById("menu");
const header = document.getElementById("header-principal");
const tamanho = window.innerWidth;
const subMenuA = document.getElementById("sub-sub-menu");
const homeText = document.getElementById("homeText");

function abrir() {
if (header.style.display == "block") {
    header.style.display = "none";
} else {
    header.style.display = "block";
}
}
button.addEventListener("click", abrir)

if (tamanho >= 800) {
    header.style.display = "block";
} else {
    header.style.display = "none";
}


function abrirMini() {
    if (homeText.style.display == "none") {
        homeText.style.display = "block";
    } else {
        homeText.style.display = "none";
    }
}

homeText.addEventListener("click", abrirMini);