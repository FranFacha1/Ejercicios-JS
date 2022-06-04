// OBJETOS 

// const usuario = {
//     nombre: "Francisco",
//     apellido: "Bellotti",
//     esMayorDeEdad : true,
//     edad: 19,
//     calle: "Mazza 1843"
// }

// // Como llamar propiedades de un objeto

// // Con notacion punto (.)

// console.log(usuario);
// console.log(typeof(usuario));
// console.log(usuario.edad);
// console.log(usuario.nombre);
// console.log(usuario.apellido);


// Con corchetes []

// console.log(usuario[edad]);
// console.log(usuario[nombre]);
// console.log(usuario[apellido]);

// let propiedadConsultar = prompt("Consultar propiedad");

// alert(`El valor de ${propiedadConsultar} es ${usuario[propiedadConsultar]}`);


// const usuario1 = {
//     nombre: "Francisco",
//     apellido: "Bellotti",
//     esMayorDeEdad : true,
//     edad: 19,
//     direccion: {
//         calle: "mazza 1843",
//         codigoPostal: 2000,
//         id: 2
//     }
// }

// console.log(usuario1.direccion.calle)


// FUNCIONES CONSTRUCTORAS 

function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

const persona = new Persona ("Homero", 90, "Mazza 1843");
const persona1 = new Persona ("Marge", 34, "Mazza 184");


// Creando un objeto a partir de otro objeto
// Por que yo creo un objeto a partir de otro objeto / Para complementar informacion que necesite dentro de mi aplicacion.

function Persona2(literal) {  // literal es un parametro = {nombre, edad, calle}

    this.nombre = literal.nombre;
    this.edad = literal.edad;
    this.calle = literal.calle;

    this.esUnNuevoJugador = true;
    this.nivel = 1;
}

const persona2 = new Persona2 ("Homero", 90, "Mazza 1843");


function Producto(producto) {
    this.nombre = producto.nombre;
    this.precio = producto.precio;
    this.agregadoEnCanasta = 0;
}

// const producto = new Producto({nombre: "Leche", precio: 1000});

// let nombrePrompt = prompt("Nombre");
// let edadPrompt = Number(prompt("Edad"));
// let callePrompt = (prompt("calle"));

// const usuarioNuevo = new Persona(nombrePrompt, edadPrompt, callePrompt);

// console.log(usuarioNuevo);


// Length (Cuantos caracteres tiene ese texto)}

let cadena = "Hola Fran"
console.log(cadena.length)

// ToLowerCase() pasa todo a minuscula
// ToUppercase() pasa todo a mayuscula



function Producto(producto) {
    this.nombre = producto.nombre;
    this.precio = producto.precio;
    this.agregadoEnCanasta = 0;
    this.agregarACanasta = function() {
        this.agregadoEnCanasta++;
        alert(`Agregaste el ${this.nombre} a canasta`)
    }
}

const producto = new Producto({nombre: "Leche", precio: 1000});

console.log(producto);

producto.agregarACanasta();

console.log(producto);


/*
    Crear una Clase Pelicula que contenga la siguiente información
    En su constructor asignar
        - nombre
        - director
        - Año de lanzamiento
      
    Agregar un método que imprima en consola o con un alert el siguiente mensaje: 
    "Star Wars Episodio 4: A New Hope, fue estrenada en 1977-05-25 y dirigida por George Lucas."

    Asignar la clase a uno de los siguientes objetos y aplicar el método creado
*/

// const episodioIV = { 
//     title: "A New Hope",
//     episode_id: 4,
//     release_date: "1977-05-25",
//     director: "George Lucas"
//   };
  
//   const episodioV = {
//     title: "The Empire Strikes Back",
//     episode_id: 5,
//     release_date: "1983-05-25",
//     director: "Irvin Kershner"
//   };
  
//   const episodioVI = {
//     title: "Return of the Jedi",
//     episode_id: 6,
//     release_date: "1977-05-25",
//     director: "Richard Marquand"
//   };
  