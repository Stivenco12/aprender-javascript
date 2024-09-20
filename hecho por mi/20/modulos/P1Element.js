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