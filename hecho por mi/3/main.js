let capital = int.prompt("ingrese el numero de su capiltal")
let interes = int.prompt("ingrese su interes compuesto")
let anual = int.prompt("ingreseel interes compuesto anual")

function cf(){
   let Cd = capital*((1+ interes)**anual) 
   console.log(Cd)
}
