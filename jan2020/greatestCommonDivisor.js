// My answer is not working and I am not happy about that. I seems that I am failing somewhere, but my code works for the two cases below.

function gcd(a, b) {
    let max = Math.min(a,b);
    let possibilities = [];

    for(i = 1; i <= max; i++) {
        ((a % i === 0) && (b % i === 0)) ? possibilities.push(i) : false;
    }

    return Math.max(...possibilities);
}

console.log(gcd(20,10));
console.log(gcd(100,25));
console.log(gcd(13,250));
console.log(gcd(1300,250));
// Write a function that returns the greatest common divisor of two integers.