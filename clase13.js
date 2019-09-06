var lucas = {
    nombre: 'Lucas',
    apellido: 'Frias',
    edad:28,
    peso:75

}

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365


const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO


console.log(`Al inicio del año ${lucas.nombre} pesa ${lucas.peso}kg`)

for (var i = 1; i<=DIAS_DEL_ANO ; i++) {

    var random = Math.random()

    if (random < 0.25){
        //aumentoDePeso
        aumentarDePeso(lucas)

    }else if (random < 0.5 ){
        //adelgazar
        adelgazar(lucas)

    }

}


console.log(`Al final del año ${lucas.nombre} pesa ${lucas.peso.toFixed(1)}kg`)