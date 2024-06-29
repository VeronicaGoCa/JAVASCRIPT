let factura = [];
const cliente1 = {
    nombre: "Juan",
    apellido: "Lopez",
    num_telefono: 77758963
}
const cliente2 = {
    nombre: "Maria",
    apellido: "Nina",
    num_telefono: 77789963
}

factura.push(cliente1);
factura.push(cliente2);

const cliente3 = {    
    nombre: "Lourdes",
    apellido: "Nina",
    num_telefono: 77789963
}

factura.unshift(cliente3);
console.log(factura);

//Eliminar elementos en un arreglo
//shift ==> Elimina el primer elemento de un array
//factura.shift();
console.log(factura);
//pop ==> Elimina el ultimo elemento de un array
//factura.pop();
console.log(factura);

// splice ==> Elimina elementos centrales de un array 
//factura.splice(1,2); //el priemr elemento es la posicon y el segundo parametro indica el numero de elementos a eliminar
console.log(factura);

factura.splice(0,2);
console.log(factura);

