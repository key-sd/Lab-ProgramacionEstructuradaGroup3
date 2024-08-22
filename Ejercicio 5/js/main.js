//Cree un programa que permita convertir de grados a radianes.
function convertirGradosARadianes(grados) {
    return grados * (Math.PI / 180);
}

let grados = parseFloat(prompt("Ingrese el valor en grados:"));

if (isNaN(grados)) {
    console.log("Por favor, ingrese un número válido.");
} else {
    let radianes = convertirGradosARadianes(grados);
    console.log(`${grados} grados son equivalentes a ${radianes} radianes`);
}

