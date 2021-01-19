function dotProduct(ary1, ary2) {
    let sum = 0;
    let counter = 0;
    while(counter < ary1.length) {
        sum += ary1[counter] * ary2[counter];
        counter++;
    }
    return sum;
}

console.log(dotProduct([1, 3, -5],[4, -2, -1]));
console.log(dotProduct([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
// Rosetta Code: Dot product
// Create a function, to compute the dot product, also known as the scalar product of two vectors.

