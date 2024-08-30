const form = document.querySelector("#registro");
const formdata = new FormData(form);


console.log(form);
console.log(formdata.get("hobby/gusto"));


form.addEventListener("submit", function(event){
    event.preventDefault();
    for(let [key, val]of formdata){
        console.log(key,val)
    }
});
setTimeout(() =>{
    console.log("delayed for 1 second.")
}, 20000);
    