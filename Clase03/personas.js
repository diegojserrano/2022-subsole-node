class Persona {

    constructor(nombre, apellido) {

        this.nombre = nombre
        this.apellido = apellido

    }

    nombre_completo() {
        return this.nombre + " " + this.apellido        
    }

}

function mostrar_persona(p) {
    console.log(`Hola ${p.nombre_completo()}`)
}


let per1 = new Persona("Juan","Perez")
let per2 = new Persona("Ana", "Ruiz")

mostrar_persona(per1)
mostrar_persona(per2)


per1.edad = 20

Persona.prototype.incrementar_edad = function () {
    if (typeof(this.edad) == "undefined")
        this.edad = 0
    this.edad ++
}

per1.incrementar_edad()
per2.incrementar_edad()
console.log(per1.edad)
console.log(per2.edad)
