let btnHamburger = document.getElementById('hamburger');
let home = document.getElementById('home');
let quienesSomos = document.getElementById('quienes-somos');
let losMichis = document.getElementById('los-michis');
let cafe = document.getElementById('cafe');
let reserva = document.getElementById('reserva');

btnHamburger.addEventListener('click', function(){
    home.classList.toggle('desplegado');
    quienesSomos.classList.toggle('desplegado');
    losMichis.classList.toggle('desplegado');
    cafe.classList.toggle('desplegado');
    reserva.classList.toggle('desplegado');
})