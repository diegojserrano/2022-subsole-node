const express = require('express')
const gestor = require('./gestor_personas')

let aplicacion = express.Router()

aplicacion.use(express.json())

aplicacion.get("/", async (req, res) => {
    res.json(await gestor.consultar_todas())
    res.end()
})

aplicacion.get("/:id", async (req, res) => {
    let id = parseInt(req.params.id)
    if (!isNaN(id)) {
        let encontrada = await gestor.consultar_una(id)
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


aplicacion.put("/:id", async (req, res) => {
    let id = parseInt(req.params.id)
    if (!isNaN(id)) {
        let nueva = req.body
        nueva.id = req.params.id
        // faltan las validaciones de lógica del negocio
        let encontrada = await gestor.consultar_una(id)
        if (!encontrada)
            await gestor.agregar(nueva)
        else {
            await gestor.modificar(nueva)
        }            
    }
    else {
        res.status(400)
    }
    res.end()
})


aplicacion.delete("/:id", async (req, res) => {
    let id = parseInt(req.params.id)
    if (!isNaN(id)) {
        let encontrada = await gestor.consultar_una(id)
        if (encontrada)
            await gestor.eliminar(id)
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