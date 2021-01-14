function sumsq(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i] * array[i];
    }
    return sum;
}
// return array.reduce((acc, curr) => acc + curr**2, 0);

// Write a function to find the sum of squares of an array of integers.

console.log(sumsq([1, 2, 3, 4, 5]));  // 55
console.log(sumsq([25, 32, 12, 7, 20]));  // 2242