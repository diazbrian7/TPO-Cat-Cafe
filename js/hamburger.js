let btnHamburger = document.getElementById('hamburger');
let home = document.getElementById('home');
let quienesSomos = document.getElementById('quienes-somos');
let losMichis = document.getElementById('los-michis');
let carta = document.getElementById('carta');
let reserva = document.getElementById('reserva');

btnHamburger.addEventListener('click', function(){
    home.classList.toggle('desplegado');
    quienesSomos.classList.toggle('desplegado');
    losMichis.classList.toggle('desplegado');
    carta.classList.toggle('desplegado');
    reserva.classList.toggle('desplegado');
})