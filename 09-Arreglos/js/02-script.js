//Añadir elementos a un array
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

//push ==> Añade elementos al final de un array
factura.push(cliente1);
factura.push(cliente2);

console.log(factura);

//unshift ==> Agrega los elementos al comienzo de un array
const cliente3 = {
    nombre: "Marcela",
    apellido: "Gutierrez",
    num_telefono: 77789963
}
factura.unshift(cliente3);
console.log(factura);




