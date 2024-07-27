// Menú de encabezado dinámico
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>80);
})

// Funciones de control de menú lateral
function abrirMenu() {
    document.getElementById("mySidenav").style.width = "30vh";
}

function cerrarMenu() {
    document.getElementById("mySidenav").style.width = "0";
}

// Inicializamos Animate On Scroll
AOS.init({
    offset: 200,
    duration: 1500,
    delay: 100,
    once: true
});