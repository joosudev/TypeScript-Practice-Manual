// Declaración de Variables
// let se utiliza para declarar variables que pueden cambiar su valor.
var edad = 25;
console.log(edad);
// const se utiliza para declarar constantes cuyo valor no puede cambiar una vez inicializado.
var nombre = "Eren Jeager";
console.log(nombre);
// Inferir tipos: TypeScript puede inferir el tipo de una variable según el valor asignado si no se especifica explícitamente
var mensaje = "Hola, mundo!";
console.log(mensaje);
// Boolean se utiliza para declarar variables de tipos booleanos (true,false, null)
var estadoActivo = true;
console.log(estadoActivo);
// Valores de un array o de un objeto a variables individuales utilizando la sintaxis de destructuring.
var numberOrdenados = [1, 2, 3];
console.log(numberOrdenados);
// Variables en una sola línea
var a = 22, b = "Vladimir", c = true;
console.log(a, b, c);
// Variables tipos Objectos en TypeScript
var inventario = {
    zapatillas: "Nike Jordan",
    cantidad: 50
};
console.log(inventario);
var punto = {
    x: 5,
    y: 10
};
console.log("Coordenadas x:".concat(punto.x, ", y:").concat(punto.y));
var producto = {
    id: 1,
    nombre: "Camiseta",
    precio: 20.5
};
console.log(producto);
// Variables tipo union en TypeScript
var resultados;
resultados = 10;
resultados = "Campeón";
console.log(resultados);
// Variables tipo any, permite asignar cualquier tipo de valor y desactiva la verificación de tipos en TypeScript
var variableIndefinida = 4;
variableIndefinida = "Ahora es una cadena";
variableIndefinida = true;
console.log(variableIndefinida);
