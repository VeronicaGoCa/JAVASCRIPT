/**
 * foreach - iterador
 */

let departamento = ['La Paz', 'Beni', 'Tarija'];

departamento.forEach((dep, index) => {
    console.log(` ${index} : ${dep}`);
});

const automovil = [
    { marca : 'Nissan', precio: 50000},
    { marca : 'Suzuki', precio: 90000},
    { marca : 'Subaru', precio: 70000},
    { marca : 'Toyota', precio: 60000}
]

automovil.forEach( auto =>{
   console.log(` Agregaste ${auto.marca} y su precio de ${auto.precio}`)
});
