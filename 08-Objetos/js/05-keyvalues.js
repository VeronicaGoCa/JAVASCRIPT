/**
 * Object.keys y Object.values y entries ==> iteradores de objetos
 */

const cliente={
    nombre:"Juan",
    apellido:"Lopez",
    numCelular:77758962,
}

//Devuelve un arreglo con los keys del objeto
console.log(Object.keys(cliente));

//Devuelve un arreglo con los valores del objeto
console.log(Object.values(cliente));

//Devuelve una matriz de llaves y valores
let llaveValor = Object.entries(cliente);
console.log(llaveValor);

