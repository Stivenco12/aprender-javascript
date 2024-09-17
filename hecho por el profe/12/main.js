// const persona = {
//     nombre: "juan",
//     presentacion: function() {
//         console.log(this.nombre);
//     }
// }
// const persona2 = {
//     nombre: "juan",
//     presentacion: function() {
//         console.log(this.nombre);
//     }
// }

// const persona3 = {}
// // OBJETO       -       CLASE
// const formulario = new FormData();
// const promesa = new Promise();

class estudiante {
    edad;
    constructor(nombre){
        this.nombre = nombre;
        // console.log(`hola soy ${nombre}`)
    };
    estudiar(){
        console.log("estoy estudiando")
    }
}

class estudianteUni extends estudiante{
    #semestre = 8

    constructor(nombre){
        super(nombre) //new estudiante
    }

    estudiar(){
        console.log("estoy estudiando en la universidad")
    }

    get semestre(){
        return `Estoy en ${this.#semestre} semestre`
    }
}   
new estudiante("andres").estudiar();
const estudiante1 = new estudianteUni();
estudiante1.edad = 16
estudiante1.nombre = "juan"
estudiante1.estudiar();
console.log(estudiante1.semestre)

// const estudiante1 = new estudiante("juan");
// estudiante1.edad = 16;
// const estudiante2 = new estudiante("stiven")
// console.log(estudiante1)
// console.log(estudiante2)