const express = require('express')

let app = express.Router()

app.get("/saludar", (req, res) => { res.end("Hola") })


exports.router = app