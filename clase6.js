

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


