const prompt = require('prompt-sync')()

class Articulo {

    constructor (nombre, precio, stock, tipo) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.tipo = tipo
    }

    to_string() {
        return `${this.nombre} ${this.precio} ${this.stock} ${this.tipo}`
    }

}


function cargar_articulos(cantidad) {
    let v = []
    for (let i = 0; i < cantidad; i++) {
        console.log(`Ingrese los datos del artículo ${i+1}`)
        let nombre = prompt('Nombre: ')
        let precio = parseFloat(prompt('Precio: '))
        let stock = parseInt(prompt('Stock: '))
        let tipo = parseInt(prompt('Tipo: '))

        v.push(new Articulo(nombre, precio, stock, tipo))
    }

    return v
}

function mostrar_arreglo(v) {
    console.log("------------------------")
    for (x of v)
        console.log(x.to_string())
    console.log("------------------------")
}

let cantidad = prompt('Ingrese la cantidad de artículos: ')
let arts = cargar_articulos(cantidad)
mostrar_arreglo(arts)
