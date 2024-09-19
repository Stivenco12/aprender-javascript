

class P1Element extends HTMLElement {
    constructor(){
        super()
        this.id = "miId"
        miId.style = `
        border: 1px solid red;
        display : flex;
        `
        this.innerHTML = `  <div class="hola">
                                <p>hola mi buen compañero</p>
                            </div>`;
        
        //etTimeout(() => {
        //    this.textContent = "que bien que ande bien"
        //}, 5000);
    }  
    connectedCallback() {
        console.log("Se ha creado el documento");
        // setTimeout(() => {
        //     this.remove();
        // }, 5000)
    }
    disconnectedCallback(){
        console.log("se ha eliminado esta etiqueta")     
    }
}
customElements.define("jedier-element", P1Element)
