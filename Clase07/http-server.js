const http = require('http')

let c = 0 


//function atender_peticiones(req, res) { ... }

//const servidor = http.createServer(atender_peticiones)

// http://localhost:8080/contar: incrementar el contador
// http://localhost:8080/consultar: responder el contador
// cualquier otra: mostrar mensaje de error
const servidor = http.createServer((req, res) => {
    console.log(req.url)

    if (req.url == "/contar") {
        c++
        res.end("Petición recibida")
    } else if (req.url == "/consultar")
        res.end(`Se recibieron ${c} peticiones`)
    else
        res.end("Error. Navegue /contar o /consultar")
})



servidor.listen(8080)

