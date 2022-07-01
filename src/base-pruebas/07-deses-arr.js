

const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = personajes;


export const retornaArreglo = () =>{
    return ['ABC', 1234];
}

const [ letras, numeros ] = retornaArreglo(); 



const useState = ( valor ) => {
    return [ valor, (val) => valor = val ];
}

const [ nombre, setNombre ] = useState( 'Goku' );

console.log( nombre );
setNombre();





