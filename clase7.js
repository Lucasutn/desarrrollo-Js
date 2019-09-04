

var lucas={
    nombre: 'Lucas',
    apellido:'Frias',
    edad:28,

}

var hernan={
    nombre: 'Hernan',
    apellido:'Romero',
    edad:27,

}


var nombre = 'Lucas'



function nojodas(nombre){

    nombre=nombre.toUpperCase()

    console.log(nombre)

}


nojodas(nombre)


function nombreMay(persona){

    console.log(persona.nombre.toUpperCase())


}

nombreMay(lucas)


function nombreMayuscula({nombre}){


    console.log(nombre.toUpperCase())

}

nombreMayuscula(hernan)


function imprimirNombreEnMayusculas(persona){

    //var nombre = persona.nombre

    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(lucas)

function imprimirNombreYEdad(persona){
    //Hola me llamo Sacha y tengo 28 años
    //Hola me llamo Dario y Tengo 27 años




    console.log(`Hola me llamo ${persona.nombre} y tengo ${persona.edad} años`)

}

imprimirNombreYEdad(hernan)


