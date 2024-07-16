/**
 * Estrucura if
 */

const primerParcial = 80;
if( primerParcial !== 80 && primerParcial >= 80){
    console.log("Aprobado")
}else{
    console.log("Reprobado")
}

const valor = false;
if(valor){
    console.log("El valor es correcto")
}else{
    console.log("El valor es incorrecto")
}

/**
 * Else if
 */

let rol = 'db';

if (rol === 'admin') {
    console.log("El usuario puede iniciar sesion para despliegue de modulos")
}else if( rol === 'developer'){
    console.log("El usuario puede iniciar sesion para revisar codigo");
}else{
    console.log("El usuario no tiene previlegios");
}