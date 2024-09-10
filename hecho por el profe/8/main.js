const mibody = document.querySelector("body")

for (let i = 1; i <= 6; ++i){
    mibody.innerHTML += 
    `<h${i} id="etiqueta${i}">
        hola mundo
    </h${i}>`
    const miEtiqueta = document.getElementById(`etiqueta${i}`)
    console.log(miEtiqueta)
}