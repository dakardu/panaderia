const btnBaguet = document.querySelector(".baguet");
const btnPueblo = document.querySelector(".pueblo");
const btnIntegral = document.querySelector(".integral");
const btnCroissant = document.querySelector(".croissant");
const btnQueso = document.querySelector(".queso");
const btnBocaditos = document.querySelector(".bocaditos");

const btnGeneral = document.querySelector(".container__btn");

const imagenes = document.querySelector(".container__img");

const main = document.querySelector(".container");

const contenedor = document.querySelector(".container__article");


function cambiarColor (){
    main.style.backgroundColor = "#D7EB78";
    btnGeneral.style.color = "white";
}
function redondear (){
    imagenes.style.borderRadius = "100px" ;
}
btnGeneral.addEventListener("click", cambiarColor);

main.addEventListener("mouseover", redondear);
