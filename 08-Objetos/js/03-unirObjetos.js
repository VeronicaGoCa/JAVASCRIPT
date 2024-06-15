/**
 * Metodo Object.assign()
 * Copia todas las propiedades de uno o mas objetos a un objeto destino
 */
const cliente={
    nombre :"Luis",
    apellido:"Lopez",
    direccion: "Villa tunari"
   
}

const factura = {
    precio:200,
    producto:"cuaderno",
    marca:"top"
}

const datosFacturacion = Object.assign(cliente, factura);
console.log(datosFacturacion);

/**
 * Operador Spread
 * Permite expadir(unir) objetos en un objeto individual
 */

const datosFacturacion2 = {...cliente, ...factura};
console.log(datosFacturacion2);



