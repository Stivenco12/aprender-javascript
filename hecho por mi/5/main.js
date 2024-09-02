const miFormulario = document.querySelector("#miFormulario")
const resultado = document.querySelector("#resultado")
const resultado2 = document.querySelector("#resultado2")

miFormulario.addEventListener("submit", function(event){

    event.preventDefault();
    const datosFormularios = new FormData(miFormulario);
    console.log(datosFormularios.entries().toArray());

    let lol = ("espera se esta procesando la informacion.........")
    let lol1 = ("")
    resultado.innerHTML = `<p><strong>${lol.toUpperCase()}</strong></p>`
    resultado2.innerHTML = `<p><strong>${lol1.toUpperCase()}</strong></p>`

    new Promise ((resolve, reject) =>{
        let lol = ("el numero es par")
        let lol1 = ("el numero es impar")
        setTimeout(() =>{
            let cap = (numero.value)
            let aqnpal= cap % 2 == 0
            if (aqnpal){
                resolve("datos obtenidos con exito")
                resultado2.innerHTML = `<p><strong>${lol.toUpperCase()}</strong></p>`
            } else {
                reject("no se resolvio")
                resultado2.innerHTML = `<p><strong>${lol1.toUpperCase()}</strong></p>`
            }   
            for(let [key, value] of datosFormularios.entries()){
                resultado.innerHTML = `<p><strong>${key.toUpperCase()}</strong> = ${value}</p>`
            }
        },5000);
    });
}) ;

