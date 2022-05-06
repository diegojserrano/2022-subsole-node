let funciones = require('./funciones')

let cantidad_pares = 0
let cantidad_impares = 0


for (let i = 0; i < 20; i++) {
    
    let x = funciones.numero_aleatorio(1,100)
    let resultado


    if (funciones.es_par(x)) { // x es par
        resultado = "es par"
        cantidad_pares++
    } else { // x es impar
        resultado = "es impar"
        cantidad_impares++
    }

    console.log(`El número ${x} ${resultado}`)
}

console.log(`Se generaron ${cantidad_pares} pares y ${cantidad_impares} impares`)
