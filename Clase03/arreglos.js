let { numero_aleatorio } = require("../Clase02/funciones")


function crear_arreglo_aleatorio(tamaño, minimo, maximo) {
    let v = []
    for (let i = 0; i < tamaño; i++) 
        v.push(numero_aleatorio(minimo, maximo))
    
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

numeros = crear_arreglo_aleatorio(20,1,1000)
imprimir(numeros)
let prom = promedio(numeros)
console.log(`El promedio de los números es: ${prom}`)
console.log(`Hay ${contar_mayores(numeros, prom)} mayores que el promedio`)
console.log(`El mayor valor es ${mayor(numeros)}`)
