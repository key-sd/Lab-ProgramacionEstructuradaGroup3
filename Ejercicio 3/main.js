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


alert(`La cadena ingresada contiene ${resultado.cantidadLetras} letras y ${resultado.cantidadNumeros} números.`);