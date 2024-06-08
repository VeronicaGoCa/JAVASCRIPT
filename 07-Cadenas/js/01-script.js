/**
 * Ejemplificación y uso de los métodos del objeto String
 */

let nombre = 'Lourdes';
let descripcion = "Los alpes de mi pueblo, son muy hermosos";
let concepto = "      Bolivia es un pais Plurinacional      ";

//Método length ==> Devuelve la longitud de un objeto String.
console.log("length ==> ", nombre.length);

//IndexOf ==> Devuelve la posición que tiene el texto en caso de encontrarlo
console.log("indexOf ==>", descripcion.indexOf("pueblo"));

//Nota.- En caso de no encontrar devuelve el valor -1
console.log("indexOf ==>", descripcion.indexOf("ciudad"))

//Includes.- Busca una cadena dentro de un texto, sensible a mayusculas y minusculas
console.log("includes ==> ", descripcion.includes('alpes'));

//concat ==> Permite concatenar cadenas
console.log("concat ==>", nombre.concat(' Lopez'));

//Nota.- Template String ==> Desde ES6 
console.log("Template String  ==> ", `${nombre} viajara a ${descripcion}`);

let pais = "Peru";

console.log(" + ==> " + nombre + " tiene un amigo en " + pais);

console.log(" , ==> " , nombre , " tiene un amigo en " , pais);

// trim ==> Permite eliminar los espacios
console.log(concepto.length);

let sinEspacios = concepto.trim();
console.log(sinEspacios.length);

// trimEnd ==> Elimina todos los espacios en blanco del final
console.log("trimEnd ==> ", concepto.trimEnd());

// trimStart ==> Elimina todos los espacios en blanco del inicio
console.log("trimStart ==> ", concepto.trimStart());

console.log("trimstart().trimEnd() ==> ", concepto.trimStart().trimEnd());

//Split .- Permite dividr una cadena en funcion a un separador en un array(vector)
let departamento = "La Paz, Beni, Tarija, Chuquisaca";
console.log(departamento.split(", "));

let descripcion1 = "Somos Bolivianos de corazon";
console.log(descripcion1.split(" "));
//Repeat.- Permite repetir una cadena de texto.

console.log("repeat ==> ", nombre.repeat(3));

//toUpperCase() .- Permite modififcar un texto a mayuscula
console.log("toUpperCase ==> ", nombre.toUpperCase());

//toLowerCase() .- Permite modififcar un texto a minuscula
let apellido = "NINA";
console.log("toUpperCase ==> ", apellido.toLowerCase());

// replace ==> Devuelve una nueva cadena con una, algunas coincidencias de un patron

const parrafo ="neurociencia ha demostrado que cambiamos nuestro cerebro y por tambien de conducta";

console.log(" replace() ==> ", parrafo.replace("cambiamos", "modificamos"));

// slice() .- Permite extraer una parte de una cadena
console.log("slice(0,10) ==> ", parrafo.slice(0, 10));
console.log("slice(8) ==> ", parrafo.slice(8));
console.log("slice(2,10) ==> ", parrafo.slice(2,10));
console.log("slice(2,1) ==> ", parrafo.slice(2,1));

// substring()
console.log("substring(0, 10) ==> ", parrafo.substring(0, 10));
console.log("substring(2, 1) ==> ", parrafo.substring(2, 1));

// charAt .- Metodo te permite obtener un caracter
const autor = "Joe Dispenza";
console.log(" charAt ==> ", autor.charAt(2));