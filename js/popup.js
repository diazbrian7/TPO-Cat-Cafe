let btnAbrirReglas = document.getElementById("btn-reglas");
let overlay = document.getElementById("overlay");
let popupReglas = document.getElementById("popup-reglas");
let btnCerrarReglas = document.getElementById("btn-cerrar-popup");

btnAbrirReglas.addEventListener('click', function(){
    overlay.classList.add('active');
    popupReglas.classList.add('active');
});

btnCerrarReglas.addEventListener('click', function(){
    overlay.classList.remove('active');
    popupReglas.classList.remove('active');

})