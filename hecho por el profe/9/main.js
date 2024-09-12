const terminosCondiciones = document.getElementById("terminos");
const miForm = document.getElementById("miForm")

console.log(terminosCondiciones.classList   )

function isCheckboxOn() {
    if (terminosCondiciones.checked) {
        miForm.innerHTML += addForm()
        const miInput = document.getElementById("miInput")
        console.log(miInput)
    }else if(!terminosCondiciones.checked){
        miForm.innerHTML = ""
        
    }
}
function addForm(){
    let resultado = ""
    resultado += `<input type"text" id="miInput"/>`;
    resultado += `<label for="miInput" >ingresa tu edad</label>` 
    return resultado                                                        
}
terminosCondiciones.addEventListener("change", isCheckboxOn)

