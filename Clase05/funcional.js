let saludar = function () { console.log("Hola") } 
saludar
typeof(saludar)
saludar()
saludar = function () { console.log("Chau") }
saludar()
let sumar = Function("return 45 + 167")
sumar
sumar()
let v = [34,67,98,3,467,9]
let imprimir = function(x) { console.log(x)}
imprimir(676)
v.forEach(imprimir)
let duplicar_imprimir = function(x) { console.log (x*2) }
v.forEach(duplicar_imprimir)
let duplicar = function(x) { return x*2 }
duplicar(45)
v.map(duplicar)
v
dobles = v.map(duplicar)
v
dobles
let es_par = function(x) { return x % 2 == 0 }
es_par(34)
es_par(33)
v.filter(es_par)
let pares = v.filter(es_par)
pares
duplicar
duplicar = (x) -> { return x * 2 }
duplicar = (x) => { return x * 2 }
duplicar(5)
duplicar = x => { return x * 2 }
duplicar = x => x * 2 
v
v.map(x => x * 2)
v.map(x => x ** 2)
v.forEach(x => console.log(x))
v.filter(x => x > 50))
v.filter(x => x > 50)
v.find(x => x == 67)
v.find(x => x > 67)
v.find(x => x % 3 == 0)
v
v.find(x => x % 4 == 0)
v.findIndex(x => x % 3 == 0)
v.findIndex(x => x > 67)
v.findIndex(x => x % 4 == 0)
v.every(x => x < 1000)
v.every(x => x < 100)
v.some(x => x < 1000)
v.some(x => x < 10)
v.some(x => x < 0)
v.reduce((a,b) => a + b)
v.reduce((a,b) => a * b)
v.reduce((a,b) => (a>b)?a:b )
v.reduce((a,b) => (a<b)?a:b )
save funcional.js