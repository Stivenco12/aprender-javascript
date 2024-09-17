import ContenedorTareas from "./componentes/ContenedorTareas.js";

function AgregarTarea(input){
    const textotareas = input.value;
    const parrafos = document.createElement("p")
    parrafos.textContent = textotareas

    const botonElemininar = document.createElement("button")
    botonElemininar.textContent = "Eliminar"

    ContenedorTareas.appead(parrafos, botonElemininar)
}

function EliminarTarea(){}

export { AgregarTarea, EliminarTarea }