var lucas = {
    nombre: 'Lucas',
    apellido: 'Frias',
    edad:28,
    ingeniero: true,
    cocinero:false,
    cantante:false,
    dj:false,
    guitarrista:false,
    drone:true

}

var juan = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 17
}


function imprimirProfesiones(persona){

    console.log(`${persona.nombre} es: `)

    if(persona.ingeniero){
        console.log('Ingeniero')
    }else {
        console.log('No es Ingeniero')
    }
    if(persona.cocinero){
        console.log('Cocinero')
    }
    if(persona.cantante){
        console.log('Cantante')
    }
    if(persona.dj){
        console.log('DJ')
    }
    if(persona.guitarrista){
        console.log('Guitarrista')
    }
    if(persona.drone){
        console.log('Drone')
    }
    
}


imprimirProfesiones(lucas)


const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona){
    return persona.edad>=MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
    //Lucas es mayor de edad
    // Lucas es menor de edad

    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}


imprimirSiEsMayorDeEdad(lucas)