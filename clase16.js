var signo = prompt('Cual es tu signo?')

switch(signo){

    case 'acuario':
    console.log('Serán días donde tenderá a ser más impulsivo y su personalidad estará más fuerte de lo normal. Trate de disminuirlo, de lo contrario, se peleará con todo el mundo.')

        break

    case 'cancer':
    case 'Cancer':
    console.log('Será un momento para aprender de lo que vivió en el pasado. Intente corregir los errores que cometió por desesperado y evite caer nuevamente en ellos.')

        break

    case 'picis':
    console.log('Aproveche para solucionar ese asunto pendiente que tiene, ya que su intelecto trabajará con velocidad en sus palabras y los pensamientos le proporcionarán claridad.')

        break

    default:
        console.log('No es un signo zodiacal valido')
        break
}
