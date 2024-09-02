const estudiantes = [
    {id: 1, nombre: `Ana`, edad: 20},
    {id: 2, nombre: `Juan`, edad: 22},
    {id: 3, nombre: `Maria`, edad: 21},
]
const promesa1 = Promise.estudiantes;
const promesa2 = new Promise ((resolve) => setTimeout(() => resolve("foo"), 3000))
const promesa3 = Promise.estudiantes;
resultados = console.log(promesa1, promesa2 ,promesa3)
Promise.all([promesa1, promesa2 ,promesa3])
    .then((resultados) =>{
        console.log(resultados);
    })
    .catch((error)=> {
        console.log("error", error)
    }) 