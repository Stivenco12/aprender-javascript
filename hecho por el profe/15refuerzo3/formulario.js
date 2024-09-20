class P1Element extends HTMLElement{
    constructor(){
        super()
        this.innerText=`hola colombia`
    }
}

customElements.define("p1-element", P1Element)

export default P1Element