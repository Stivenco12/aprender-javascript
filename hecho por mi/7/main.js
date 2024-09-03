let contactos = [
]

const form = document.querySelector("#miform");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const formData = new FormData(form);

    const nombreinput = formData.get("nombre");
    const telinput = formData.get("telefono");
    const emailinput = formData.get("email");

    const nuevoContacto = crearocbjetoContacto
})

function mostrarcontactos(){
    contactos.forEach(({nombre,telefono,email}) => {
        console.log(`${nombre} identificado con el numero de ${telefono} y con el correo de ${email}`)
    });
}

function agregarcontacto(contacto){
    try {
        contactos.push(contacto);
        console.log("si se agrego: " , contacto)
    } catch{
        console.error("no se ha agregado")
    }
}

function crearocbjetoContacto(nombreC, telefonoC, emailC){
    return{
        nombre: nombreC,
        telefono: telefonoC,
        email: emailC,
    }
}