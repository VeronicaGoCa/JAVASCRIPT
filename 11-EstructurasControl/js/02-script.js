/**
 * switch
 * Estructura que nos permite evaluar multiples condiciones
 */

const moneda = 'EUR';

switch(moneda){
    case 'USD':
        console.log(`Tipo de moneda dolar americano ${moneda}`);
        break;
    case 'EUR':
        console.log(`Tipo de moneda Euro ${moneda}`);
        break;
    default:
        console.log("No se puede evaluar el tipo de moneda");
        break;
}