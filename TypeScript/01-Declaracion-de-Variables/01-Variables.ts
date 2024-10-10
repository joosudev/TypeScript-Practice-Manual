let users: string = "admin"
console.log(users);

// const se utiliza para declarar constantes cuyo valor no puede cambiar una vez inicializado.
const nombre: string = "Eren Jeager"
console.log(nombre);

// Inferir tipos: TypeScript puede inferir el tipo de una variable según el valor asignado si no se especifica explícitamente
let mensaje: string = "Hola, mundo!"; 
console.log(mensaje);


// Boolean se utiliza para declarar variables de tipos booleanos (true,false, null)
let estadoActivo = true;
console.log(estadoActivo);

// Valores de un array o de un objeto a variables individuales utilizando la sintaxis de destructuring.
let numberOrdenados: number[] = [1,2,3]
console.log(numberOrdenados);

// Variables en una sola línea
let a: number = 22, b: string ="Vladimir", c: boolean= true;
console.log(a,b,c);

// Variables tipos Objectos en TypeScript
let inventario: {zapatillas: string, cantidad:number} ={
  zapatillas: "Nike Jordan",
  cantidad: 50
}
console.log(inventario);

// Personalizados se definen utilizando la palabras claves type o interface
type Coordenadas ={
    x:number,
    y:number
}
let punto: Coordenadas ={
    x:5,
    y:10
}
console.log(`Coordenadas x:${punto.x}, y:${punto.y}`);

// Clases
interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

let producto: Producto = {
    id: 1,
    nombre: "Camiseta",
    precio: 20.5
};

console.log(producto);


// Variables tipo union en TypeScript
let resultados: number | string;
resultados = 10;
resultados = "Campeón"
console.log(resultados);

// Variables tipo any, permite asignar cualquier tipo de valor y desactiva la verificación de tipos en TypeScript
let variableIndefinida: any = 4;
variableIndefinida = "Ahora es una cadena"
variableIndefinida = true;
console.log(variableIndefinida);
