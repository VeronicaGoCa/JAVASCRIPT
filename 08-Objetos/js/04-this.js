/**
 * This ==> hacer referencia al valor que se esta ejecutando en ese momento
 */
const nombre = "Rosmery";

const cliente={
    nombre:"Juan",
    apellido:"Lopea",
    numCelular:77758962,
    obtenerDatos : function(){
        return `Su numero de celular del Cliente ${this.nombre} es ${this.numCelular} `;
    }

}

console.log(cliente.obtenerDatos());
