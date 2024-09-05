const miFormulario = document.querySelector("#miFormulario")
const resultado = document.querySelector("#resultado")
const url = "https://api.escuelajs.co/api/v1/users/";


miFormulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(miFormulario);
    let datousuario = formData.get("ID")

    const datospersonas = await traerDatos(datousuario)

    mostrarResultados(datospersonas)

})
function mostrarResultados(ocjetopersona){
    resultado.innerHTML = `<h3>email</h3><p>${ocjetopersona.id}</p>`
}

async function traerDatos(ID){
    return fetch(url + ID)
        .then(archivo => {return archivo.json})
        .then(data =>console.log(data))

}

