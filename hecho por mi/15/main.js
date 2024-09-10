const nombre = document.getElementById("nombre")
const edad = document.getElementById("edad")
const input3 = document.getElementById("input3")


let condicion = nombre.value != "" & edad != "";
nombre.addEventListener("change", () =>{
    if (nombre.value != ""){
        nombre.setAttribute("constestado", "true")
    } else{
        nombre.setAttribute("constestado", "false")
    }
    if (condicion) {
        input3.toggleAttribute("disabled", false)
    }
    console.log("nombre", nombre.getAttribute("constestado"))
})
edad.addEventListener("change", () =>{
    if (edad.value != ""){
        edad.setAttribute("constestado", "true")
    } else{
        edad.setAttribute("constestado", "false")
    }
    if (condicion) {
        input3.toggleAttribute("disabled", false)
    }
    console.log("edad", edad.getAttribute("constestado"))
})


