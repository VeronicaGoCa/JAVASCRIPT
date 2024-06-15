/**
 * Destructuring
 * Es una expresion que permite extraer propiedades de un objeto
 */
const factura = {
    precio:200,
    producto:"cuaderno",
    marca:"top"
}

// Objetos Anidados

const usuario={
    nombre :"Luis",
    apellido:"Lopez",
    pais:{
        nombrePais: "Brasil",
        habitantes: 18526
    }
}

const { precio } = factura;
console.log("Precio ", precio);

const { producto, marca} = factura;
console.log(producto);
console.log(marca);

//Objetos anidados
const{ nombre,pais:{nombrePais} } = usuario;
console.log(nombre, nombrePais );

console.log(usuario.pais.nombrePais);



