//Crear un programa que permita obtener el máximo común divisor de tres números ingresados ​​por el usuario
const num1 = parseInt(prompt("Ingresa el primer número: "));
const num2 = parseInt(prompt("Ingresa el segundo número: "));
const num3 = parseInt(prompt("Ingresa el tercer número: "));
//
function maximoDivisor(num1, num2, num3) {
    const menor = Math.min(num1, num2, num3);
    for (let i = menor; i >= 1; i--) {
        if (num1 % i === 0 && num2 % i === 0 && num3 % i === 0) {
            return i;
        }
    }
}

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Ingresa solo números válidos");
} else {
    const result = maximoDivisor(num1, num2, num3);
    console.log("El máximo común divisor de ", num1, ", ", num2, ", ", num3," es: ", result);
}