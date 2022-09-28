const btnGeneral = document.querySelector(".container__btn");
const imagenes = document.querySelector(".container__img");
const figure = document.querySelectorAll(".container__figure");
const main = document.querySelector(".container");
console.log(figure)


function cambiarColor (){
       main.style.backgroundColor = "#D7EB78";
    //btnGeneral.style.color = "white";
}
function redondear (e){
    e.target.classList.add('bagette')
}

function quitarRedondo(e){
    e.target.classList.remove('bagette')
}


btnGeneral.addEventListener("click", cambiarColor);
figure.forEach(item => item.addEventListener("mouseover", e => redondear(e)))
figure.forEach(item => item.addEventListener("mouseout", e => quitarRedondo(e)))


