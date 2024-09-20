const miarray = []

const botonPush = document.getElementById("push_botton")
const inputPuhs = document.getElementById("input_input")
const resultado = document.getElementById("aqui")

botonPush.addEventListener("click", () => {
   
    miarray.push(inputPuhs.value)
    console.log(miarray)
    
    resultado.innerHTML = `<br>datos del array = ${miarray}`
    resultado.innerHTML += `<p>dato colocado = ${inputPuhs.value}</p>`
})

const botonPushEliminar = document.getElementById("push_botton_eliminar")

botonPushEliminar.addEventListener("click", () => {
    miarray.pop(inputPuhs.value)
    resultado.innerHTML = `<br>datos del array = ${miarray}`
})