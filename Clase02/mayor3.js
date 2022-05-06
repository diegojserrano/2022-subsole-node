let { numero_aleatorio: na } = require('./funciones')

let a = na(1,100)
let b = na(1,100)
let c = na(1,100)

if (a > b && a > c) { mayor = a }
else {
    if (b > c) { mayor = b }
    else { mayor = c }
}

console.log(`Entre los números ${a}, ${b} y ${c}, el mayor es ${mayor}`)