// PARSEINT VS PARSEFLOAT

// ParseInt = Numero entero

// ParseFloat = numero flotante, punto decimal 

// ParseInt

// console.log("2.3");

// // ParseFloat

// console.log("2.3");

// // NUMBER

// console.log("2.3asdasdasd");


// // DO WHILE

// let texto = "Hola";

// do {
//     console.log(texto);
//     texto = prompt("Ingresar texto");
// }while (texto !== "")


 
// SWITCH (Otra forma de escirbir una estructura IF, ELSE)
// Sistema de notas americano

// let nota = "A";

// switch (nota) {
//     case "A":       // Nota es  === "A";
//     case "a" :      // Nota es  === "a";
//     console.log("Excelente");
//     break;
    
//     case "B": 
//     console.log("Bueno")
// }


// let notaNum = 80;
// let preguntaNota = prompt("Cual es tu nota?")

// switch(true) {
//     case nota > 90 && notaNum === 100: // True === (notaNum > 90 && notaNum === 100)
//         console.log("Excelente");
//         break;
//     case notaNum >= 75 && notaNum === 90:
//         console.log("Bueno");
//         break;
//     case "C":
//         console.log("Regular");
//         break;
// }


// WHILE 

// let respuesta = Number(prompt("Cuanto es 2 + 2"));

// while (respuesta === 4) {
//     if (respuesta === "ESC") {
//         break;
//     }

//     if (respuesta != 4) {
//         alert("Incorrecto");
//     }
        
//     alert("Correcto");
//     respuesta = Number(prompt("Cuanto es 1 + 3"));

// }









let inicio = Boolean(prompt("desea registrar un pedido?"));
let menuComida;
let menuBebida;
let precioComida=0;
let precioTotal=0;


function sumaMenu(precioBebida,precioComida){
    precioTotal += precioBebida + precioComida;
    return precioTotal;
}

while (inicio === true){

    menuComida = prompt(`seleccione uno de los siguientes menu: \n carne \n pizza \n choripan \n milanesa \n empanada`).toLowerCase();
    menuBebida = prompt(`seleccione una de las siguientes bebidas: \n coca \n sprite \n fanta \n cerveza \n vino`).toLowerCase();

    switch(menuComida){
        case "carne":
            precioComida=1200;
            break;
        case "pizza":
            precioComida=900;
            break;
        case "choripan":
            precioComida=600;
            break;
        case "milanesa":
            precioComida=650;
            break;
        case "empanada":
            precioComida=120;
            break;
    }
    switch(menuBebida){
        case "coca":
        case "fanta":
        case "sprite":
            precioBebida=350;
            break;
        case "cerveza":
            precioBebida=700;
            break;
        case "vino":
            precioBebida=1200;
            break;
    }
    alert(`El precio total es ${sumaMenu(precioBebida, precioComida)}`);
    inicio = Boolean(prompt("desea registrar un nuevo pedido?"));
}






// if(repuestoAuto == "Amortiguadores") {
//     precioRepuestos = 1500;
//     alert("El precio del Amortiguador es de " + precioRepuestos);
// } else if () {
    
// }