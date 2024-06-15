/**
 * Arreglos son una coleccion de elementos (cadena, boolean, arreglos u objetos , numeros)
 */

const departamento1 = ['Beni', 'La Paz', 'Cochabamba', 'Tarija'];
console.log(departamento1)

const departamento2 = new Array('Beni', 'La Paz', 'Cochabamba', 'Tarija');
console.log(departamento2);

const arreglo = [90, [2,6,9,7], "Maria", null, {nombre:'Juan', apellido:'Lopez'}, false];

console.log(arreglo);

//Accediendo a lso elementos de un arreglo

console.log(departamento1[1]);
console.log(arreglo[1]);

//Propiedad length 

console.log(departamento1.length);

//Recorrer un arreglo
for (let i = 0; i < departamento1.length; i++) {
    const element = departamento1[i];   
    console.log(element) 
}
//Modificar un arreglo

departamento1[1] = 'Santa Cruz';
console.log(departamento1)
