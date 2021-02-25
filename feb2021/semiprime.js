function isSemiPrime(n) {
    let array = [];
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            array.push(i);
        }
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            return n === array[i] * array[j]
        }
    }
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i ===0) return false;
    return num > 1;
    }
}
console.log(isSemiPrime(4));//true
console.log(isSemiPrime(100));// false