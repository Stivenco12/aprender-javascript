
class P0Element extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = `        
        <p1-element></p1-element>
        <p2-element></p1-element>
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
        <div id="p3" ></div>             
        <div id="p4" ></div>
        `;
    }  
}
customElements.define("p2-element", P2Element)