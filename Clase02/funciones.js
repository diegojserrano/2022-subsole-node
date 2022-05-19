
function numero_aleatorio(minimo, maximo) {
    let amplitud = maximo - minimo
    return  Math.ceil(Math.random()*amplitud) + minimo
}

function texto_aleatorio(longitud) {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, longitud);
}

function es_par(x) {
    return x % 2 == 0
}

function es_impar(x) {
    return !es_par(x) 
}

exports.numero_aleatorio = numero_aleatorio
exports.texto_aleatorio = texto_aleatorio
exports.es_par = es_par
exports.es_impar = es_impar
