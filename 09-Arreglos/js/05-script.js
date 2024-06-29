// Array Destructuring
// Es una expresion que permite extraer elementos de un array.

const numeros =[60,80,90,100,120];
console.log(numeros[0]) ;
console.log(numeros[2]) ;
console.log(numeros[3]) ;

console.log("===================");
const [primero1, ,tercero1, cuarto1 ] = numeros;
console.log(primero1);
console.log(tercero1);
console.log(cuarto1);

console.log("===================");
const[primero2, ,tercero2, ...cuarto2] = numeros;
console.log(primero2);
console.log(tercero2);
console.log(cuarto2);

console.log("===================");
const[ , , ,penultimoValor,ultimoValor] = numeros;
console.log(penultimoValor);
console.log(ultimoValor);
