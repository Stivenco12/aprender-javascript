class P3Element extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `  

        <style>
            *{
            margin:1vw;
            font-size: 1.4vw;
            }
            #p4{
                position: absolute;
                left: 53vw;
                border: 2px solid black;
                width: 40vw;
                height: 35vw;
                border-radius: 2vw;
            }
        </style>

        <div id="p4" >
            <h1>QUIEN SOY:</h1>
            <p>Soy un estudiante de bachillerato del colegio Francisco José de Caldas del municipio de Tibú, Norte de Santander,
            apasionado por la tecnología, sobre todo la parte del cómputo, gracias a mi padre y hermano que también les gustan
            mucho estos temas.</p>
            <h1>PROGRAMACIÓN, PORQUÉ ME GUSTA:</h1>
            <p>Me gusta la programación principalmente por el hecho de que algún día me gustaría producir mi hobby favorito que
            es el mundo de los videojuegos.</p>
            <h1>COMPARA NUESTRA EDAD: 16 años</h1>
            <label for="edad2">Ingresa tu edad:</label>
            <input name="edad2" type="number" id="edad2" placeholder="Ingresa la segunda edad">
            <button id="comparar">Comparar</button>
            <p id="resultado"></p>  
        </div>     
        `;

        const compararBtn = shadow.getElementById("comparar");
        const resultado = shadow.getElementById("resultado");
        
        compararBtn.addEventListener("click", () => {
            const edad1 = 16
            const edad2 = parseInt(shadow.getElementById("edad2").value);

            if (isNaN(edad1) || isNaN(edad2)) {
                resultado.textContent = "Por favor, introduce edades válidas.";
                return;
            }
            const diferencia = Math.abs(edad1 - edad2);
            resultado.textContent = `La diferencia de edad es de ${diferencia} años.`;
        });
    }  
}   

customElements.define("p3-element", P3Element);
