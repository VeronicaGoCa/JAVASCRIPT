/**
 * Un objeto es una entidad con propiedades y tipos
 * 
 *  */

const descripcion = {};

const factura = {
    precio: 200,
    producto : "Zapato",
    marca : "Manaco"
}

//Accediendo a las propiedades de un objeto

console.log("Precio", factura.precio);
console.log("Producto", factura['producto']);

//Añadir propiedades nuevas a un objeto
factura.descuento = 20;
console.log(factura);

//Eliminar una propiedad de un objeto
delete factura.marca;
console.log(factura);
