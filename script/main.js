window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>80);
})

function openNav() {
    document.getElementById("mySidenav").style.width = "30vh";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}