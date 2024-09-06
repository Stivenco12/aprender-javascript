

fetch("https://api.escuelajs.co/api/v1/users/1",     
    {method: "GET",
    headers: {
    "Content-Type" : "application/json"}
    }).then(Response => Response.json()).then(data => console.log(data));       
