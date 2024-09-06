const miFormulario = document.querySelector("#miFormulario")
const resultado = document.querySelector("#resultado")
const url = "https://doodles.google/search/";


miFormulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(miFormulario);
    let datousuario1 = formData.get("fecha1")
    let datousuario2 = formData.get("fecha2")
    let datousuario3 = formData.get("fecha3")
    
    const año = "?date_like_year="
    const mes = "&date_like_month="
    const dia = "&date_like_day="

    const final = url + año + datousuario1 + mes + datousuario2 + dia + datousuario3
    console.log(final)
    
    window.location.href = final
})


