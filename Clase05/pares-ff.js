const funciones = require("../Clase02/funciones")


v = []
for (let i = 0; i < 10; i++)
    v.push(funciones.numero_aleatorio(1,1000))

    
let imprimir = function(x) { console.log(x) }

console.log("Listado de todos")
v.forEach(imprimir)

console.log("Listado de los cuadrados de todos")
//let cuadrados = v.map(cuadrado)
//cuadrados.forEach(imprimir)
v.map(x => x ** 2).forEach(imprimir)

console.log("Listado de los pares")
pares = v.filter(x => x % 2 == 0)
pares.forEach(imprimir)

console.log("Listado de los cuadrados de los pares")
pares.map(cuadrado).forEach(imprimir)
