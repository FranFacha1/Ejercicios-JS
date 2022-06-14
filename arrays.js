// ARRAYS

// Tipo de dato que sirve para almacenar valores en forma de lista.
// String, numeros, booleanos, objetos
// Escritura del array: let arrayA [1, "Fran", true]

let array = [1, 2, 3, 4, 5];
const arrayTexto = ["A", "B", "C", "D"];

console.log(array);
console.log(array[4]);
console.log(arrayTexto[2]);


const generosMusicales = ["Jazz", "Rock", "Pop", "Blues"];
const otrosGeneros = ["Reggeton", "Cumbia", "Salsa"];
let todoslosGeneros;
let algunosgeneros;
// REPASO DE FOR

for (let i = 0; i < 5; i++) {

}

// FOR OBJETOS
// IN IMPRIME EL INDICE

// FOR ARRAYS
// OF IMPRIME EL VALOR 

for(const genero of generosMusicales) {
    console.log("Escuchas musica" + " " + genero);
}

// FOR EACH RECORRE EL ARRAY

generosMusicales.forEach(genero => {
    console.log("Seleccion de musica" + " " + genero);
})

const texto = "Hola Coder House";

console.log(texto.length);

console.log(generosMusicales.length);

if (generosMusicales.length > 0) {
    // ACA PASA ALGO
}

// PUSH ME PERMITE AGREGAR UN NUEVO ELEMENTO AL FINAL DE MI ARRAY

generosMusicales.push("Tango");
console.log(generosMusicales);


// EJEMPLO DE PUSH
const canasta = [];

const leche = "leche";

const agregarProducto = (p) => {
    canasta.push(p);
}

agregarProducto(leche)

console.log(canasta)

// UNSHIFT AGREGA AL PRINCIPIO DE LA LISTA

generosMusicales.unshift("Clasico");

// SHIFT SACA EL ELEMENTO DE LA PRIMERA POSICION 

generosMusicales.shift();
console.log(generosMusicales)

// POP SACA EL ELEMENTO DE LA ULTIMA POSICION

generosMusicales.pop();
console.log(generosMusicales);

// SPLICE RECIBE DOS PARAMETROS

/*
    1er el indice
    2do cuantos elementos quiero eliminar
*/

const nombres = ["Rita" , "Pedro", "Miguel", "Ana", "Vanesa"];
nombres.splice(1, 2);
console.log(nombres)


// JOIN SEPARA LOS ELEMENTOS DE LA FORMA QUE LE ASIGNES

console.log(generosMusicales.join(" | "));

document.write(generosMusicales.join(" | "));

// TOSTRING CONVIERTE EL ARRAY EN TEXTO

console.log(generosMusicales.toString(" | "));

// CONCAT ME PERMITE CONVINAR DOS ARRAYS EN UNO SOLO

todoslosGeneros = otrosGeneros.concat(generosMusicales);
console.log(todoslosGeneros);

// SLICE LO QUE NOS PERMITE ES GENERAR UN CORTE

// ['Reggeton', 'Cumbia', 'Salsa', 'Jazz', 'Rock', 'Pop', 'Blues']

/*
1er : indico el indice desde donde quiero arrancar
2do : indice final + 1;
*/
algunosgeneros = todoslosGeneros.slice(2, 4); //SALSA Y JAZZ

console.log(algunosgeneros)

algunosgeneros = todoslosGeneros.slice(1, 6); // CUMBIA, SALSA, JAZZ, ROCK, POP

console.log(algunosgeneros);

// INDEXOF() CUAL ES EL INDICE DE ESE ELEMENTO
// const consultarGenero = prompt("consultar genero")

// const INDEXOF = todoslosGeneros.indexOf(consultarGenero);

// todoslosGeneros[INDEXOF] = consultarGenero.toLocaleUpperCase

// console.log(todoslosGeneros);

// INCLUDES PODES PREGUNTAR SI ESTA EN EL ARRAY TE DEVUELVE TRUE O FALSE.

// TRUE

console.log(todoslosGeneros.includes("Jazz"));
// FALSE

console.log(todoslosGeneros.includes("asdasf"));

// REVERSE VOLTEA EL ORDEN DEL ARRAY

// console.log(todoslosGeneros.reverse(todoslosGeneros));

// Object.assign copia profunda un array

const nuevoOrden = Object.assign([], todoslosGeneros);
nuevoOrden.reverse();

// REVERSA
console.log(nuevoOrden);

// NORMAL
console.log(todoslosGeneros);

// ARRAYS DE OBJETOS

// EJERCICIO EN CLASE







const elementosIniciales = [
    {nombre: "Daniel", edad: 32},
    {nombre: "Martina", edad: 7},
    {nombre: "Karen", edad: 23},
    {nombre: "Amelia", edad: 2}
  ]
  const elementoAgregar = [
    {nombre: "Felipe", edad: 36},
    {nombre: "Julieta", edad: 7},
    {nombre: "Edgar", edad: 66}
  ]
  
  let elementosFinales;
  
  /*
      Utilizando los métodos de Array vistos en clase,
      imprimir en la variable elementosFinales el siguiente Array en el siguiente orden
      [
        {nombre: "Julieta", edad: 7},
        {nombre: "Felipe", edad: 36},
        {nombre: "Amelia", edad: 2},
        {nombre: "Karen", edad: 23},
        {nombre: "Martina", edad: 7}
      ]
  */
  
