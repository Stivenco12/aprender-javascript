const miFormulario = document.querySelector("#miFormulario")
const resultado = document.querySelector("#resultado")
const url = "https://doodles.google/search/";


miFormulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(miFormulario);
    const datousuario1 = formData.get("fecha1")
    const datousuario2 = formData.get("fecha2")
    const datousuario3 = formData.get("fecha3")
    
    let urlFinal = url;

    let validyear = datousuario1 >= 1997 & datousuario1 <= 2024;
    let validmonths = datousuario2 >=1 & datousuario2 <= 12;
    let validDay = datousuario3 >=1 & datousuario3 <= 31;

    if (validyear){
        urlFinal += `?date_like_year=${datousuario1}`
    }
    if (validmonths){
        urlFinal += `&date_like_month=${datousuario2}`
    }
    if (validDay){
        urlFinal += `&date_like_day=${datousuario3}`
    }


    window.location.href = urlFinal

    miFormulario.reset()
});


