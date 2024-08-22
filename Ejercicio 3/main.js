//Crear un programa que permita contar la cantidad de letras y números que contiene una cadena ingresada por el usuario
function contarLetrasYNumeros(cadena) {
    let cantidadLetras = 0;
    let cantidadNumeros = 0;

    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        if (/[a-zA-Z]/.test(caracter)) {
            cantidadLetras++;
        } else if (/[0-9]/.test(caracter)) {
            cantidadNumeros++;
        }
    }

    return {
        cantidadLetras: cantidadLetras,
        cantidadNumeros: cantidadNumeros
    };
}

let entradaUsuario = prompt("Ingrese una cadena de texto:");

let resultado = contarLetrasYNumeros(entradaUsuario);

console.log('La cadena ingresada contiene', resultado.cantidadLetras, 'letras y ', resultado.cantidadNumeros, ' números')
