// function Persona (){
//     console.log('Me ejecutaron')
// }

// var lucas = new Persona()

function heredaDe (prototipoHijo, prototipoPadre){
    //noop
    var fn = function (){}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn()
    // claseHija.prototype.constructor = prototipoHijo
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona (nombre, apellido,altura){

    this.nombre=nombre
    this.apellido=apellido 
    this.altura=altura
    // this.edad=20
    
}    

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function(){
    // a ? b : c ? d : e
    // a ? b : (c ? d : e)
    // return(this.altura>1.8 ? true : false)
    return  this.altura>1.8
    
}

function Desarrollador(nombre,apellido){
    this.nombre=nombre
    this.apellido=apellido
}

heredaDe (Desarrollador,Persona)

Desarrollador.prototype.saludar = function (){
    
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    
}



var lucas = new Persona('Lucas','Frias',1.85)

lucas.saludar()

// var erika = new Persona('Erika','Martinez',1.7)
// var luis = new  Persona('Luis', 'Cordero',1.90)
// var rafael = new Persona('Rafeal','Arcangel',1.85)


// var personas = [lucas,erika,luis,rafael]

// for(var i = 0 ; i<personas.length;i++){
//     console.log(personas[i].soyAlto())
// }


