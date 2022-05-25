const express = require('express')
const visitas = require('./visitas')
const saludos = require('./saludos')


const aplicacion = express()

aplicacion.use("/visitas", visitas.router)
aplicacion.use("/saludos", saludos.router)


aplicacion.listen(8080)