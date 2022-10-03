const btnComprar = document.querySelectorAll(".container__btn");
const figure = document.querySelectorAll(".container__figure");
const main = document.querySelector(".container");
//console.log(figure)


function crearBtnPrecio (e){
    //console.log(e)
        let btnPrecio = document.createElement('button')
        e.target.after(btnPrecio)
        btnPrecio.innerHTML = 'Precio'
        btnPrecio.classList.add('container__btn')
        setTimeout(() => btnPrecio.remove(), 5000);
}

function redondear (e){
    //console.log(e)
    e.target.classList.add('bagette')
}

function quitarRedondo(e){
    e.target.classList.remove('bagette')
}


//btnComprar.addEventListener('click', crearBtnPrecio)
btnComprar.forEach(item => item.addEventListener('click', e => crearBtnPrecio(e)));
figure.forEach(item => item.addEventListener("mouseover", e => redondear(e)))
figure.forEach(item => item.addEventListener("mouseout", e => quitarRedondo(e)))


