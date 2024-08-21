//Crea un programa que permita dividir una cadena y convertirlo en una matriz de palabras.
const string = prompt("Ingrese una cadena de texto: ");
const wordMatrix = dividirCadena(string);

function dividirCadena(string) {
    if (typeof string !== "string") {
    return "Ingrese solo palabras válidas :)";
    }
    const words = string.split(" ").filter(Boolean);
    return words;
}

console.log("Esta es una matriz de palabras: ", wordMatrix);