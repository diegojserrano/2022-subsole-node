let mariadb = require('mariadb')

const configuracion = {
    host: "localhost",
    database: "Personas",
    user: "root",
    password: "samaria"
}
 
async function conectar() {
    let conexion = await mariadb.createConnection(configuracion)
    console.log(conexion)
    let resultados = await conexion.query("select concat(nombre,' ', apellido) as nombrecompleto from personas2 limit 5")
    
    resultados.map(x => x.nombrecompleto).forEach(x => console.log(x))

}

conectar()

