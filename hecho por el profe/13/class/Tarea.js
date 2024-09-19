class Tarea{
    #etiqueta = document.createElement("p")
    constructor(texto){
        this.#etiqueta.textContent = texto
    }
    get etiqueta(){
        return this.#etiqueta
    }
    get (nuevoTexto){
        if (nuevoTexto == ""){
            return
        }
    }
}

export default Tarea