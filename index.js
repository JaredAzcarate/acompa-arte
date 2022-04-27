    
/* Activar menu responsive */
    let btnHamburguesa = document.getElementById ("botonHamburguesa");

    let navegacionMenu = document.getElementById ("navMenu");

    btnHamburguesa.addEventListener('click', function(){
        navegacionMenu.classList.toggle('menu-activo');  
    });
    
/* ----------------------------------------------- */

/* Controles carrusel de testimonios */

let testimonios = document.getElementById ("testimonials");
let dot1 = document.getElementById ("dot1");
let dot2 = document.getElementById ("dot2");
let dot3 = document.getElementById ("dot3");
let slide1 = document.getElementById ("slide1");
let slide2 = document.getElementById ("slide2");
let slide3 = document.getElementById ("slide3");

dot1.onclick = function () {
    testimonios.style.transform = "translateX(0px)";
    dot1.classList.add("active");
    dot2.classList.remove("active");
    dot3.classList.remove("active");
}

dot2.onclick = function () {
    testimonios.style.transform = "translateX(-33.33%)";
    dot2.classList.add("active");
    dot1.classList.remove("active");
    dot3.classList.remove("active");
}

dot3.onclick = function () {
    testimonios.style.transform = "translateX(-66.66%)";
    dot3.classList.add("active");
    dot2.classList.remove("active");
    dot1.classList.remove("active");
}



/* ----------------------------------------------- */