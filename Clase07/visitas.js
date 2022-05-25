const express = require('express')

let aplicacion = express.Router()

let c = 0

// Especifica el comportamiento del endpoint GET /contar
aplicacion.get("/contar",(req, res) => {
    c++
    res.end("Petición recibida....")  
 }) 


aplicacion.get("/consultar",(req, res) => { res.end(`Se recibieron ${c} peticiones....`)} ) 

exports.router = aplicacion

