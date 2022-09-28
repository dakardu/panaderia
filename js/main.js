const imagen2 = document.querySelector(".img2");
const imagen3 = document.querySelector(".img3");
const main = document.querySelector(".main");

function cambiarColor (){
    main.style.backgroundColor = "#f17929";
}
function cambiarPosicion (){
    imagen3.style.order = -1;
}
imagen2.addEventListener("click", cambiarColor);
imagen3.addEventListener("click", cambiarPosicion);