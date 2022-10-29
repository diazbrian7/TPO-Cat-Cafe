let btnAbrirCafe = document.getElementById('btn-cafe');
let btnAbrirSalados = document.getElementById('btn-salados');
let btnAbrirTortas = document.getElementById('btn-tortas');
let cafe = document.getElementById('cafe');
let salados = document.getElementById('salados');
let tortas = document.getElementById('tortas');

btnAbrirCafe.addEventListener('click', function(){
    cafe.classList.add('abierto');
    salados.classList.remove('abierto');
    tortas.classList.remove('abierto');
    btnAbrirCafe.classList.add('seleccionado');
    btnAbrirSalados.classList.remove('seleccionado');
    btnAbrirTortas.classList.remove('seleccionado');
});

btnAbrirSalados.addEventListener('click', function(){
    salados.classList.add('abierto');
    cafe.classList.remove('abierto');
    tortas.classList.remove('abierto');
    btnAbrirSalados.classList.add('seleccionado');
    btnAbrirCafe.classList.remove('seleccionado');
    btnAbrirTortas.classList.remove('seleccionado');
});

btnAbrirTortas.addEventListener('click', function(){
    tortas.classList.add('abierto');
    salados.classList.remove('abierto');
    cafe.classList.remove('abierto');
    btnAbrirTortas.classList.add('seleccionado');
    btnAbrirSalados.classList.remove('seleccionado');
    btnAbrirCafe.classList.remove('seleccionado');
});