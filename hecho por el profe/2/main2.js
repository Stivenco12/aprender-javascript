const miFormulario = document.querySelector("#miFormulario")
const resultado = document.querySelector("#resultado")

miFormulario.addEventListener("submit", function(event){
    event.preventDefault();

    const datosFormularios = new FormData(miFormulario);

    console.log(datosFormularios.entries().toArray());

    for(let [key, value] of datosFormularios.entries()){
         resultado.innerHTML += `<p><strong>${key.toUpperCase()}</strong> - ${value}</p>`
    }
})
