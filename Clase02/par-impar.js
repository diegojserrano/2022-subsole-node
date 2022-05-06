let funciones = require('./funciones')

let x = funciones.numero_aleatorio(50,100)
let resultado


if (funciones.es_par(x)) { // x es par
    resultado = "es par"
} else { // x es impar
    resultado = "es impar"   
}

// con operador ternario
// resultado = (x % 2 == 0)? "es par": "es impar"

console.log(`El número ${x} ${resultado}`)
