/**
 * Operador ternario
 * condicion ? verdad : falso
 */

const capital = 5000;
const gasto = 3000;

console.log( capital === 5000 ? 'Tiene capital suficiente' : 'No tiene capital suficiente' );



console.log( capital > 4000 && gasto > 4000 ? 'Tiene como 100 Bs. el liquido' : 'No tiene liquido suficiente');

// Operador ternario Anidado

const autenticado = true;
const rol = false;

console.log( autenticado ? rol ? 'Tiene rol':' Esta autenticado pero no tiene rol':'No esta autenticado' );