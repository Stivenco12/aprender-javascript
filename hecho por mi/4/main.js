const miFormulario = document.querySelector("#miFormulario")
const resultado = document.querySelector("#resultado")
const resultado2 = document.querySelector("#resultado2")


miFormulario.addEventListener("submit", function(event){
    event.preventDefault();

    const datosFormularios = new FormData(miFormulario);

    console.log(datosFormularios.entries().toArray());

    let lol = ("caítal final es")
    let $ = ("$")
    let pesos = ("pesos")
    let cap = (capital.value)
    let int = (interes.value)
    let anu = (anual.value)
    let Cd = cap*((1+ int)**anu) 
    console.log($,Cd,pesos)    

    
    for(let [key, value] of datosFormularios.entries()){
        resultado.innerHTML += `<p><strong>${key.toUpperCase()}</strong> = ${value}</p>`
        resultado2.innerHTML = `<p><strong>${lol}</strong> = ${Cd}</p>`
    }
}) 
