const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")

input1.setAttribute("placeholder", "Colombia vs Argentina")
const currentYear =new Date().getFullYear().toString();
console.log(currentYear)
input2.setAttribute("max", currentYear)

input3.addEventListener("click", () => {
    setTimeout(() =>{
        input1.setAttribute("type", "text");
    },10000);
})

input2.addEventListener("change", () =>{
    const hola = input3.toggleAttribute("disabled", false)
    if (hola == "disabled", false){
        input3.toggleAttribute("disabled", true)
    }else if(hola == "true"){
        input3.toggleAttribute("disabled", true)
    }
})