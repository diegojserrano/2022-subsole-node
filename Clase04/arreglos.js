let { numero_aleatorio } = require("../Clase02/funciones")
const prompt = require('prompt-sync')()


function cargar_arreglo(tamaño) {
    let v = []
    console.log(`Ingrese ${tamaño} números`)
    for (let i = 0; i < tamaño; i++) 
        v.push(parseInt(prompt()))
    
    return v
}

function imprimir(v) {
    for (let x of v)
        console.log(x)    
    
}

function promedio(v) {
    let suma = 0
    for (let x of v)
        suma += x

    return suma / v.length
}

function contar_mayores(v, minimo) {
    let cantidad = 0
    for (let x of v)
        if (x > minimo)
            cantidad++

    return cantidad
}

function mayor(v) {
    let may = v[0]

    for(let x of v)
        may = (x > may)? x: may

    return may
}


let cantidad = prompt("Ingrese la cantidad de números que desea: ")
while(cantidad <= 0) {
    cantidad = prompt("Ingrese la cantidad de números que desea (sólo mayor 0): ")
}


numeros = cargar_arreglo(cantidad)
imprimir(numeros)
let prom = promedio(numeros)
console.log(`El promedio de los números es: ${prom}`)
console.log(`Hay ${contar_mayores(numeros, prom)} mayores que el promedio`)
console.log(`El mayor valor es ${mayor(numeros)}`)
