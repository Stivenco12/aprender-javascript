
const boton = document.getElementById("boton");
const agregar = document.querySelector("#agregar")

var contar = 0;

agregar.textContent = 0;

boton.onclick = function(){
    contar++;
    agregar.textContent = contar
}


