var lucas = {
    nombre: 'Lucas',
    apellido: 'Frias',
    edad:28,
    peso:75

}

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365


const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4


console.log(`Al inicio del año ${lucas.nombre} pesa ${lucas.peso}kg`)

// for (var i = 1; i<=DIAS_DEL_ANO ; i++) {

//     var random = Math.random()

//     if (random < 0.25){
//         //aumentoDePeso
//         aumentarDePeso(lucas)

//     }else if (random < 0.5 ){
//         //adelgazar
//         adelgazar(lucas)

//     }

// }

const META = lucas.peso - 3
var dias = 0

while (lucas.peso > META){
 
    if(comeMucho()){
        aumentarDePeso(lucas)
    }
    if(realizaDeporte()){
        adelgazar(lucas)
    }
dias+=1
}


console.log(`Pasaron ${dias} dias hasta que ${lucas.nombre} adelgazo 3kg pesa ${lucas.peso}`)