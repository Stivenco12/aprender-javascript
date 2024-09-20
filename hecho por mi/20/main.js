
class P0Element extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = `        
        <p1-element></p1-element>
        <p2-element></p2-element>
        <p3-element></p3-element>
        `;
    }  
}
customElements.define("p0-element", P0Element)

class P1Element extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = `  
        <div >
            <p id="p1">NOMBRE : JEDIER STIVENSON CORREA AMRIAS</p>
            <P id="p2">FECHA DE NACIMIENTO : 18 / 11 / 2007</p>
        </div>`;
    }  
}
customElements.define("p1-element", P1Element)

class P2Element extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = `  
        <div id="p3" >
            <img id="p3a" src="img/img1.jpg" alt="">
            <div id="p3b">
                <p>jedier stivenson correa amaris</p>
                <p>19 años</p>
                <p>perezoso profecional</p>
                <p>Doctorado en espantar viejas</p>
            </div>

            <div id="p3c"> 
                <h1>HOBBIS:</h1>
                <b>Primer hobbi:</b><p>Los videojuegos</p>
                <b>Segundo hobbi:</b><p>La programacion</p>
                <b>Tercer hobbi:</b><P>Hacer mantenimiento de pc</p> 
            </div id="p3d>
        
            <div>
            </div>
        </div>     
        `;
    }  
}
customElements.define("p2-element", P2Element)

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



