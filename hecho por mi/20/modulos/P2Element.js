class P2Element extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = `  
        <div id="p3" >
            <img id="p3a" src="img/img1.jpg" alt="">
            <div id="p3b">
                <p>jedier stivenson correa amaris</p>
                <p>16 años</p>
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