// // SE DECLARA LA FUNCION.

// // Funcion simple

// function primeraFuncion () {
//     alert("Esta es mi primera funcion");
//     let nombre = prompt ("Nombre del usuario");

//     alert(nombre);
// }

// // SE LLAMA A LA FUNCION PARA QUE SE EJECUTE.

// primeraFuncion();


// // PARAMETROS DE LA FUNCION

// // Los parametros se ingresan dentro de los parentesis, se pueden ingresar los parametros que se necesiten.

// function funcionConParametros (nombre, apellido, edad) {
//     alert(`Hola ${nombre} ${apellido}, como estas? Tienes ${edad} años`);
    
// }

// let nombreUsuario = prompt("Nombre");
// let ApellidoUsuario = prompt("Apellido");

// funcionConParametros(nombreUsuario, ApellidoUsuario);

// // EJEMPLO SLIDES

// function sumar (primerNumero, segundoNumero) {
//     resultado = primerNumero + segundoNumero;
// }

// function imprimirAlert (mensaje) {
//     alert(mensaje);
// }

// function sumarConUsuario () {
//     let num1 = Number(prompt("Ingrese el primer numero"));
//     let num2 = Number(prompt("Ingrese el segundo numero"));

//     sumar(num1, num2);
//     imprimirAlert(`El resultado de la suma es ${sumarConReturn(num1, num2)}`);
// }

// // sumarConUsuario();

// // RETURN

// function sumarConReturn (primerNumero, segundoNumero) {
//     resultado = primerNumero + segundoNumero;
//     return primerNumero + segundoNumero;
// }

// console.log(sumarConReturn(6, 7))



// PRACTICA

// let nombre = " "
// let pregunta = prompt("Como te llamas")

// if (pregunta === "nacho") {
//     alert("Terrible la gorda come alfajores");
// } else if (pregunta != "nacho") {
//     alert("No sos un gordo")
// }