let nombres = ["Juan","Maria","Ana"]
nombres

[a, b, c] = nombres
a
b
c
[a, ...r] = nombres
a
r
[...r, b] = nombres
x = 56
y = 78
[x, y] = [y, x]
x
y
[a,,b] = nombres
a
b
let articulo = { nombre = "Lapiz", precio = 45.6, codigo = 12334, stock = 1000 }

;
let articulo = { nombre: "Lapiz", precio : 45.6, codigo : 12334, stock : 1000 }
articulo
{nombre, codigo, ...otros} = articulo
nombre
codigo
otros
let articulo2 = {...articulo}
articulo2
articulo2.precio = 67
articulo
articulo2