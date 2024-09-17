import TareaInput from "./TareaInput.js"
import BotonEnviar from "./BontonEnviar.js"
import { AgregarTarea } from "../funciones/FuncionesTareas.js"
const CrearTareaContenedor = document.createElement("div")

BotonEnviar.addEventListener("click", () => AgregarTarea(TareaInput))

CrearTareaContenedor.append(TareaInput)
CrearTareaContenedor.append(BotonEnviar)

export default CrearTareaContenedor