//Determinar si un año ingresado por el usuario es un año bisiesto
function esBisiesto(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

let año = prompt("Ingresa un año:");

if (esBisiesto(año)) {
    console.log(`${año} es un año bisiesto.`);
} else {
    console.log(`${año} no es un año bisiesto.`);
}
