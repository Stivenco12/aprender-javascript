let miKey = "stiven"
let miValue = {nombre : "juan", edad : 17  };

function createStorage (Key, value){
    if (typeof(Key) != "string"){
        console.error("lo siento, las llaves solo pueden ser texto")
        return
    }
    const valorjson = JSON.stringify(value)
    localStorage.setItem(Key,value)
    console.log(localStorage)
}

function updateStorageItem(Key, value){
    let newValue;
    const resultado = JSON.parse(localStorage.getItem(Key));
    if (resultado == null){
        console.error("no existe esa entrada")
        return
    }
    switch (typeof(value)){
        case "object":
            newValue = {...resultado, ...value}
            console.log(newValue);
            break;
        default:
            break
    }
    createStorageItem(Key, newValue)
}

function getItemBykey(){
    let dato = JSON.parse(localStorage.getItem(Key))
    console.log(dato)
}

function deleteItemBykey(Key){
    localStorage.removeItem(Key)
}

function verStorage(){
    console.log(localStorage)
}
function deleAllStorage(){
    localStorage.clear()
}

