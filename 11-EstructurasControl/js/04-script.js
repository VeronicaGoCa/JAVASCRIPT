/**
 * Estructura repetitiva for
 */

// Generar los 5 primeros numeros pares

for(let k = 1 ; k <= 10 ; k ++){
    if( k % 2 === 0){
        console.log(` Numero ${k} es par`);
    }
}

const automovil = [
    { marca : 'Nissan', precio: 50000},
    { marca : 'Suzuki', precio: 90000},
    { marca : 'Subaru', precio: 70000},
    { marca : 'Toyota', precio: 60000}
]

for( let i = 0; i < automovil.length; i++ ){
    console.log("Marca ==> " , automovil[i].marca, " Precio: " ,automovil[i].precio );
}

/**
 * break and continue
 */

//Mostrar todos los numeros de la secuencia del 1 al 10 menos el 5

for (let index = 1; index <= 10; index++) {
    if ( index === 5) {
        continue;
    }   
    console.log(`${index}`) 
}
console.log("==============");

for (let index = 1; index <= 10; index++) {
    if ( index === 5) {
        break;
    }   
    console.log(`${index}`) 
}
