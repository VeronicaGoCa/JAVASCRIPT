//Spread operator o Rest operator ==> Añadir un elemento a un arreglo

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
const cliente3 = {
    nombre: "Mery",
    apellido: "Lopez",
    num_telefono: 77789963
}
//Para añadir al final del array
factura = [...factura, cliente1, cliente2];
console.log(factura);

//Para añadir al inicio del array
factura = [cliente3, ...factura];
console.log(factura);
