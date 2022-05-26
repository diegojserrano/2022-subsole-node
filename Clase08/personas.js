const express = require('express')

let aplicacion = express.Router()

let personas = [{id: 1, nombre: "Persona 1", edad: 19}]

aplicacion.use(express.json())

aplicacion.get("/", (req, res) => {
    res.json(personas)
    res.end()
})

aplicacion.get("/:id", (req, res) => {
    let id = parseInt(req.params.id)
    if (!isNaN(id)) {
        let encontrada = personas.find(p => p.id == id)
        if (encontrada) {
            res.json(encontrada)
        } 
        else {
            res.status(404)
        }
    }
    else {
        res.status(400)
    }
    res.end()
})


aplicacion.put("/:id", (req, res) => {
    let id = parseInt(req.params.id)
    if (!isNaN(id)) {
        let nueva = req.body
        nueva.id = req.params.id
        // faltan las validaciones de lógica del negocio
        let encontrada = personas.find(p => p.id == id)
        if (!encontrada)
            personas.push(nueva)
        else {
            encontrada.nombre = nueva.nombre
            encontrada.edad = nueva.edad
        }            
    }
    else {
        res.status(400)
    }
    res.end()
})


aplicacion.delete("/:id", (req, res) => {
    let id = parseInt(req.params.id)
    if (!isNaN(id)) {
        let indice = personas.findIndex(p => p.id == id)
        if (indice > -1)
            personas.splice(indice,1)
        else {
            res.status(404)
        }            
    }
    else {
        res.status(400)
    }
    res.end()
})



exports.router = aplicacion