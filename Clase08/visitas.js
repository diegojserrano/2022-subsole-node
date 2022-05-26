const express = require('express')

let aplicacion = express.Router()

let c = 0

// Especifica el comportamiento del endpoint GET /contar
aplicacion.post("/cantidad",(req, res) => {
    c++
    res.end("Petición recibida....")  
}) 


aplicacion.get("/cantidad",(req, res) => { 
    res.end(`Se recibieron ${c} peticiones....`)
}) 

aplicacion.put("/cantidad", (req, res) => {
    let v = parseInt(req.query.valor ?? 0)

    if (!isNaN(v))    
        c = v
    else
        res.status(400)
    res.end()
})


// http:/localhost:8080/visitas/cantidad?valor=1234

aplicacion.put("/cantidad/:valor", (req, res) => {
    let v = parseInt(req.params.valor)

    if (!isNaN(v)) 
        c = v
    else
        res.status(400)
    res.end()
})





exports.router = aplicacion

