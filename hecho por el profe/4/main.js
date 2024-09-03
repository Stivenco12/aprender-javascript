let contactos = []

const persona1 = crearocbjeto("juan","33333","juan@gmail.com")

function crearocbjeto(nombreC,telefonoC,emailC){
    return{
        nombre :nombreC,
        telefono : telefonoC,
        emailC : emailC,
    };
}
function agregarcontacto(contacto){
    try{
        contactos.push(contacto)
        console.log("si se agrego: ", contacto);
    } catch(e){
        console.error("no se agregado")
    }
}