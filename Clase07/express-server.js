const express = require('express')

const aplicacion = express()

let c = 0
// Especifica el comportamiento del endpoint GET /contar
aplicacion.get("/contar",(req, res) => {
    c++
    res.end("Petición recibida....")  
 }) 


aplicacion.get("/consultar",(req, res) => { res.end(`Se recibieron ${c} peticiones....`)} ) 

aplicacion.get("/", (req, res) => { res.end("Navegue /contar o /consultar") } ) 


aplicacion.listen(8080)