//Cree un programa que permita determinar todos los números primos desde 0 hasta el número especificado.
function isPrime(num) {
    if (num < 2) return false; 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false; 
    }
    return true;
}

function primeFactorsTo(max) {
    let primes = []; 
    
    for (let i = 2; i <= max; i++) { 
        if (isPrime(i)) {
            primes.push(i); 
        }
    }

    return primes;
}

let maxNumber = parseInt(prompt("Ingrese un número hasta el cual calcular los números primos:"));

console.log(primeFactorsTo(maxNumber));
