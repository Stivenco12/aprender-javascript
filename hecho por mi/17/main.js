const text = document.getElementById("parra")
const textcambio = document.getElementById("cambio")
const resultado = document.getElementById("resultado")

text.value = ""

function actualizarResultado(){
    resultado.innerHTML = ""
    const palabras = text.value.split("")
    const palabrasMagicas = textcambio.value
    const creciente = palabrasMagicas*2
    console.log(creciente)


    palabras.forEach(palabra => {
        if (palabra%palabrasMagicas){
            resultado.innerHTML += ` ${palabra}`
        }else {
            resultado.innerHTML += `<strong  class="resaltado">${palabra}</strong>`
        }          
    });
    if (creciente * i ){
           resultado.innerHTML += `<strong  class="resaltado">${palabra}</strong>`
    }
}

text.addEventListener("change", actualizarResultado)
textcambio.addEventListener("change", actualizarResultado)


