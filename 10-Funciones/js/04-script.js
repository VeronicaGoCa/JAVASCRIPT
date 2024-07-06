/**
 * Funciones que toman parametros y argumentos
 */

function mostrarCurso(nivel, paralelo){ //nivel y paralelo son parametros
    console.log(`El nivel ${nivel} paralelo: ${paralelo} cuenta con 45 estudiantes`);
}

mostrarCurso('Primaria', 'A'); //Primario y A son argumentos

console.log("===========================");
/**
 * Parametros por default
 */
//Caso 1
function mostrarCurso2(nivel, paralelo){ //nivel y paralelo son parametros
    console.log(`El nivel ${nivel} paralelo: ${paralelo} cuenta con 45 estudiantes`);
}

mostrarCurso2('Primaria'); //Primario y A son argumentos

console.log("===========================");

//Caso 2
function mostrarCurso3(nivel, paralelo = "Z"){ //nivel y paralelo son parametros
    console.log(`El nivel ${nivel} paralelo: ${paralelo} cuenta con 45 estudiantes`);
}

mostrarCurso3('Primaria'); //Primario y A son argumentos
mostrarCurso3('Primaria', 'B'); //Primario y A son argumentos

console.log("====================");

function sumar(num1, num2)
{
    console.log(num1+num2);
}
sumar(1,2);

console.log("==========Llamar funciones ==========");
/**
 * Llamar funciones dentro de otras funciones
 */
iniciarBienvenida();

function iniciarBienvenida(){
    console.log("Bienvenido al curso de HTML");
    detalleMateria();
}

function detalleMateria(){
    console.log("En el curso se aprendera los fundametnos de HTML");
    horarioMateria();
}

function horarioMateria() {
    console.log("La materia se cursara de 8:00 a 9:00");
}

console.log("================");
/**
 * Funciones que retornan valores
 */

function calcularInteres2(interes, patente){
    return interes * patente;
}

const interesBs = calcularInteres2(0.10, 1000);
console.log("Interes Bs ", interesBs);