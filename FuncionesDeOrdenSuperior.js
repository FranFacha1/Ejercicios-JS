// const variable = "texto"


// const variable2 = () => {}

const mayorQue = (unNumero) => { //unNumero = 10
    return(otroNumero) => otroNumero > unNumero; //otroNumero = 12
}


let mayorQueDiez = mayorQue(10);
let mayorQueTreinta = mayorQue(30);

console.log(mayorQueDiez(12));


let crearCalificador = (adjetivo) => {
    return(sustantivo) => {
        return `${adjetivo} ${sustantivo};`
    }
}

let calificarComoSuper = crearCalificador("Super");
let calificarComoMega = crearCalificador ("Mega");

let estudiante = calificarComoSuper("estudiante")
console.log(estudiante);


// RECIBIR FUNCION COMO PARAMETRO

// const porCadaUno = (array, function) => {
//     for(const elemento of array) {
//         function(elemento)
//     }
// }



// Otros metodos 

// FIND Va a buscar el primer elemento que cumpla la condicion que yo ponga y retorna ese. DEVUELVE UN OBJETO

// FILTER Si va a retornar todos aquellos elementos que cumplan la condicion que yo ponga. DEVUELVE UN ARRAY

// SOME similar al FIND solo que retorna true o false. 

// MAP Transforma el objeto que yo este recibiendo en lo que yo necesite.

// REDUCE Es un metodo que permite convinar los valores de un array y convinarlos en un solo valor.

// SORT Ordena de mayor a menor. POR EJ : LAS FECHAS.

// MATH Se puede acceder a algunas constantes matematicas a traves del objeto MATH.  MATH.min MENOR.  MATH.max MAYOR


// DATE

// const fecha = Date();

// console.log(fecha);


// AFTER Funciones y metodos de arrays

class ProductoEnCanasta {
    constructor(producto) {
        this.id = producto.id;
        this.nombre = producto.nombre;
        this.categoria = producto.categoria;
        this.precio = producto.precio;

        this.cantidad = 1;
    }

    modificarCantidad(esSuma) {

        if (esSuma) {
            this.cantidad += 1;
        } else {
            this.cantidad -= 1;
        }


        // switch(operacion) {
        //     case "suma":
        //         this.cantidad += 1;
        //         break;

        //     case "resta":
        //         this.cantidad -= 1;
        //         break;
        // }

        this.cantidad = this.cantidad + 1;
    }
}

const productos = [
    { id: 1, nombre: 'Apple Audífonos Airpods Pro', categoria: 'celulares', precio: 1000 },
    { id: 2, nombre: 'Iphone Smartphone 8 - 64Gb Plata', categoria: 'celulares', precio: 2000 },
    { id: 3, nombre: 'Samsung Barra de Sonido - T450', categoria: 'sonido', precio: 500 },
    { id: 4, nombre: 'HiSense Televisor Led 43 Pulgadas Uhd Smart', categoria: 'televisores', precio: 1500 },
    { id: 5, nombre: 'Televisor Samsung 65" 4K UHD Smart TV 2021 Crystal UN65AU7000KXZL', categoria: 'televisores', precio: 3000 },
    { id: 6, nombre: 'Motorola Celular 4G Moto One Fusion 128 GB Verde', categoria: 'celulares', precio: 700 },
    { id: 7, nombre: 'iPhone 12 Pro Pacific Blue 256GbLae', categoria: 'celulares', precio: 6000 },
    { id: 8, nombre: 'Apple Watch S6 44 SG AL Black SP Gps Bes', categoria: 'relojes', precio: 2300 }
  ];
  

const canasta = [];
const numeros = [1, 2, 3, 4];



console.log(numeros.indexOf(3))
 
const clickSobreProducto = () => {
    let consultarId = Number(prompt("Simular click sobre producto"));
    const productoAAgregar = productos.find(elem => elem.id == consultarId);
    console.log(productoAAgregar);

    canasta.push(new ProductoEnCanasta (productoAAgregar));

}

clickSobreProducto();
clickSobreProducto();
clickSobreProducto();


console.log("Que hay en canasta", canasta);

canasta[0].modificarCantidad("suma");
canasta[0].modificarCantidad("suma");
canasta[1].modificarCantidad("resta");
console.log(canasta);