const express = require('express')
const personas = require('./router_personas')


const aplicacion = express()

aplicacion.use("/personas", personas.router)

aplicacion.listen(8080)