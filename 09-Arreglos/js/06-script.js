//Mostrar contenidos los contenidos de los arreglos
const productos = [
    {mueble: 'Mesa', precio:562},
    {mueble: 'Silla', precio:100},
    {mueble: 'Pupitre', precio:962},
    {mueble: 'Ropero', precio:262},
];

console.log(productos);
//Recorriendo un arreglo de forma tradicional
for (let i = 0; i < productos.length; i++) {
    console.log(`${productos[i].mueble} Precio: ${productos[i].precio }`);
}

console.log("=============");

//forEach
productos.forEach(function(valor){
    console.log(`${valor.mueble} Precio: ${valor.precio} `);
})

console.log("=============");
// Array method map ==> map crea un array nuevo

productos.map(function(valor){
    console.log(`${valor.mueble} Precio: ${valor.precio} `);
})
console.log("=============");
//Creando un nuevo array 
const array = productos.map(function(valor){
    return `${valor.mueble} Precio: ${valor.precio} `;
});

console.log(array);

console.log("=============");
//forEach
const array2 = productos.forEach(function(valor){
    return `${valor.mueble} Precio: ${valor.precio} `;
})
console.log(array2);