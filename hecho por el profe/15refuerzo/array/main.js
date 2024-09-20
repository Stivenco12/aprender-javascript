const cuadro1 = document.getElementById("cuadro1")
const cuadro2 = document.getElementById("cuadro2")
const cuadro3 = document.getElementById("cuadro3")
const cuadro4 = document.getElementById("cuadro4")
const cuadro5 = document.getElementById("cuadro5")
const cuadro6 = document.getElementById("cuadro6")
const cuadro7 = document.getElementById("cuadro7")
const cuadro8 = document.getElementById("cuadro8")
const cuadro9 = document.getElementById("cuadro9")




cuadro1.addEventListener("click", function(){
    cuadro1.innerText = "X"
    if (cuadro1){
        cuadro1 = "X"
        console.log("se añadio")
        console.log(datos)
    }
})
cuadro2.addEventListener("click", function(){
    cuadro2.innerText = "X"
})
cuadro3.addEventListener("click", function(){
    cuadro3.innerText = "X"
})
cuadro4.addEventListener("click", function(){
    cuadro4.innerText = "X"
})
cuadro5.addEventListener("click", function(){
    cuadro5.innerText = "X"
})
cuadro6.addEventListener("click", function(){
    cuadro6.innerText = "X"
})
cuadro7.addEventListener("click", function(){
    cuadro7.innerText = "X"
})
cuadro8.addEventListener("click", function(){
    cuadro8.innerText = "X"
})
cuadro9.addEventListener("click", function(){
    cuadro9.innerText = "X"
})

datos = [[cuadro1,cuadro2,cuadro3][cuadro4,cuadro5,cuadro6][cuadro7,cuadro8,cuadro9]]

