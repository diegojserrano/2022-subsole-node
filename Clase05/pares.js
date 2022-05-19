const funciones = require("../Clase02/funciones")


v = []
for (let i = 0; i < 10; i++)
    v.push(funciones.numero_aleatorio(1,1000))

    
let imprimir = function(x) { console.log(x) }
let cuadrado = function(x) { return x ** 2 }



console.log("Listado de todos")
v.forEach(imprimir)

console.log("Listado de los cuadrados de todos")
//let cuadrados = v.map(cuadrado)
//cuadrados.forEach(imprimir)
v.map(cuadrado).forEach(imprimir)

console.log("Listado de los pares")
v.filter(funciones.es_par).forEach(imprimir)

console.log("Listado de los cuadrados de los pares")
v.filter(funciones.es_par).map(cuadrado).forEach(imprimir)
