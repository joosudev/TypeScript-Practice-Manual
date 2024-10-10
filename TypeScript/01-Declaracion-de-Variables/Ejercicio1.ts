//string
let salon: string = "Oficina de Seguridad"; 
console.log(salon);

//number
let nPuerta: number = 3; 
console.log(nPuerta);

// Boleano
let dispobilididad = true;
let conectado = false;
let usuarioEncotrado = null;

// Objectos
let almacen:{nomMuebles:string, muebles:number} ={
     nomMuebles: "Ferragamo",
     muebles: 100
}
console.log(almacen);

// Objecto personalizado
type ubi ={
   x1:number,
   y1:number
}

let locaUbi: ubi={
   x1:5,
   y1:10
}
console.log(`Punto x1:${locaUbi.x1}, y:${locaUbi.y1}`);

// Clases
interface Deposito{
  id: number,
  objecto: string,
  cantidades: number
}

let deposito: Deposito ={
  id: 1,
  objecto:"colchones",
  cantidades: 12
}
console.log(deposito);


// variable de tip union en TypeScript
let jugador: number | string
jugador = "Cristiano Ronaldo"
jugador = 7
console.log(jugador);

// Variables tipo any
let clima: any = 'Temperatura';
clima = 28;
clima = true;
console.log(clima);



