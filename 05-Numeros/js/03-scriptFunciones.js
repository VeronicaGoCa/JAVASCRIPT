/**
 * Ejemplificacion de de funciones para convertir 
 * de Strin a números flotantes o enteros.
 */


const numero1 = "10.2";
const numero2 = "10";
const numero3 = 20;

let sum = numero1 + numero3;
console.log(sum);

//Método parseInt ==> Permite convertir un string a un número entero.
console.log("String a numero ", Number.parseInt(numero2));

//Método parseFloat ==> Permite convertir un string a un número flotante.
console.log("String a decimales", Number.parseFloat(numero1));

//Método toString ==> Devuelve una cadena.

console.log("Numero a String ", numero3.toString());
let cadenaNumber = numero3.toString();

//El typeof operador devuelve el tipo de una variable o una expresión.
console.log("Tipo de variable despues de la conversion ==> ", typeof(cadenaNumber));


