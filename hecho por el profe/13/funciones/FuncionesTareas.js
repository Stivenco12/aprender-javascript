import ContenedorTareas from "../componentes/ContenedorTareas.js";


function agregarTarea(input){
    const textoTarea = input.value;
    const parrafoTarea = document.createElement("p")
    parrafoTarea.textContent = textoTarea;
    console.log(textoTarea)

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "eliminar";
    botonEliminar.addEventListener("click", () => eliminarTarea(parrafoTarea, botonEliminar));

    ContenedorTareas.append(parrafoTarea, botonEliminar);

}

function eliminarTarea(tarea, boton) {
    tarea.remove();// elimina el boton
    boton.remove();// elimina la tarea
}

    export { agregarTarea, eliminarTarea}
