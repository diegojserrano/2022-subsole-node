let mariadb = require('mariadb')

const configuracion = {
    host: "localhost",
    database: "Personas",
    user: "root",
    password: "samaria"
}

async function consultar_todas() {
    let conexion = await mariadb.createConnection(configuracion)
    return await conexion.query("select * from personas2 order by nombre, apellido")
}


async function consultar_una(documento) {
    let conexion = await mariadb.createConnection(configuracion)
    let resultado = await conexion.query("select * from personas2 where documento = ?", [documento])
    return resultado[0]
}


async function eliminar(documento) {
    let conexion = await mariadb.createConnection(configuracion)
    await conexion.query("delete from personas2 where documento = ?", [documento])
}

async function agregar(nueva) {
    let conexion = await mariadb.createConnection(configuracion)
    await conexion.query("insert into personas2(documento, nombre, apellido, edad) values (?,?,?,?)", [nueva.documento, nueva.nombre, nueva.apellido, nueva.edad])
}

async function modificar(persona) {
    let conexion = await mariadb.createConnection(configuracion)
    await conexion.query("update personas2 set nombre = ?, apellido = ?, edad = ? where documento = ?", [persona.nombre, persona.apellido, persona.edad, persona.documento])
}

exports.consultar_todas = consultar_todas
exports.consultar_una = consultar_una
exports.eliminar = eliminar
exports.agregar = agregar
exports.modificar = modificar