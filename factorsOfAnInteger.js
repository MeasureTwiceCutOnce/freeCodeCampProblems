function factors(num) {
    let arrayOfFactors = [];

    for(let i = 0; i <= num; i++) {
        if(num % i === 0) {
            arrayOfFactors.push(i);
        }
    }
    return arrayOfFactors;
}

console.log(factors(45));  // [1,3,5,9,15,45]
console.log(factors(53));
console.log(factors(64));
// Write a function that returns the factors of a positive integer as an array.

// These factors are the positive integers by which the number being factored can be divided to yield a positive integer result.