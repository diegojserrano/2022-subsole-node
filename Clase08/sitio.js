const express = require('express')
const visitas = require('./visitas')
const saludos = require('./saludos')
const personas = require('./personas')


const aplicacion = express()

aplicacion.use("/visitas", visitas.router)
aplicacion.use("/saludos", saludos.router)
aplicacion.use("/personas", personas.router)


aplicacion.listen(8080)