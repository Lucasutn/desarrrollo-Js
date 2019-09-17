// function Persona (){
//     console.log('Me ejecutaron')
// }

// var lucas = new Persona()



class Persona {

    constructor(nombre, apellido, altura) {

        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {

        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)


    }

    soyAlto() {

        return this.altura > 1.8

    }

}

class Desarrollador extends Persona {

    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
    }





    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    }

}







var lucas = new Persona('Lucas', 'Frias', 1.85)

lucas.saludar()

// var erika = new Persona('Erika','Martinez',1.7)
// var luis = new  Persona('Luis', 'Cordero',1.90)
// var rafael = new Persona('Rafeal','Arcangel',1.85)


// var personas = [lucas,erika,luis,rafael]

// for(var i = 0 ; i<personas.length;i++){
//     console.log(personas[i].soyAlto())
// }


