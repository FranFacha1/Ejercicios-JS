// Ejercicio Repuestos Autos



// let iniciar = Boolean(prompt("¿Desea comprar algun repuesto?"));
// let repuestoAuto;
// let precioRepuestos = 0;
// let precioTotalRepuesto = 0;

// while(iniciar == true) {

//     repuestoAuto = prompt(`
//       ¿Que repuesto estaria buscando?
//        Amortiguadores
//        Frenos
//        Capo
//        Espejos
//        Radiador
       
//     `)

//     switch(repuestoAuto) {
//         case "Amortiguadores":
//         case "amortiguadores":
//             precioRepuestos = 6500;
//             alert(`El precio es ${precioRepuestos}`)
//         break;
        
//         case "Frenos":
//         case "frenos":     
//             precioRepuestos = 5000;
//             alert(`El precio es ${precioRepuestos}`)
//         break;

//         case "Capo":
//         case "capo":         
//             precioRepuestos = 10000;
//             alert(`El precio es ${precioRepuestos}`)
//             break;
//         case "Espejos":
//         case "espejos": 
//             precioRepuestos= 35000;
//             alert(`El precio es ${precioRepuestos}`)
//             break;

//         case "Radiador":
//         case "radiador":     
//             precioRepuestos = 20000; 
//             alert(`El precio es ${precioRepuestos}`)
//             break;
//     }
//     alert(`El precio total ${SumarRepuestos(precioRepuestos)}`);
//     iniciar = Boolean(prompt("¿Necesita algun repuesto mas?"));
// }



// function SumarRepuestos(precioRepuestos) {
//     return precioTotalRepuesto = precioRepuestos + precioTotalRepuesto;
// }



// Nuevo
// Ejercicio Repuestos Autos
let iniciar = confirm("¿Desea comprar algun repuesto?");
let repuestoAuto;
let totalPrecio = 0;
let listaRepuestos = [];

class Respuesto {
  constructor(nombre, precio) {
    this.nombre = nombre,
    this.precio = precio
  }
}

while (iniciar == true) {
  repuestoAuto = prompt(`
      ¿Que repuesto estaria buscando?
       Amortiguadores : $6500
       Frenos : $5000
       Capo : $10000
       Espejos : $35000
       Radiador : $20000
    `);

  switch (repuestoAuto.toLowerCase()) {
    case "amortiguadores":
      totalPrecio += 6500;
      listaRepuestos.push(new Respuesto("amortiguador", 6500));
      break;
    case "frenos":
      totalPrecio += 5000;
      listaRepuestos.push(new Respuesto("freno", 5000));
      break;
    case "capo":
      totalPrecio += 10000;
      listaRepuestos.push(new Respuesto("capo", 10000));
      break;
    case "espejos":
      totalPrecio += 35000;
      listaRepuestos.push(new Respuesto("espejo", 35000));
      break;
    case "radiador":
      totalPrecio += 20000;
      listaRepuestos.push(new Respuesto("radiador", 20000));
      break;
  }

  iniciar = confirm("¿Necesita algun repuesto mas?");

  if (iniciar == false) {
    alert(`El precio total $${totalPrecio}`);
  }
}

listaRepuestos.forEach((repuesto,index) => {
  alert(`
    Repuesto #${index+1}
    Repuesto : ${repuesto.nombre}
    Precio : ${repuesto.precio}
  `)
});



