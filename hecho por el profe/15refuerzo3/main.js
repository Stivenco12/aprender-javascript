import "./formulario.js"

class P0Element extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = `        
        <p1-element></p1-element>
        <p>Hola mundo</p>
        `;
    }  
}
customElements.define("p0-element", P0Element)