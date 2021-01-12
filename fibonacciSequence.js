function fibonacci(n) {
if (n < 3) return 1;

let prev = 1;
let curr = 1;

for (let i = 2; i < n; i++) {
const next = prev + curr;
  prev =curr;
  curr = next;

}
  return curr;
}

console.log(fibonacci(5));
console.log(fibonacci(10));
// Write a function to generate the nth Fibonacci number.

// The nth Fibonacci number is given by:

// Fn = Fn-1 + Fn-2

// The first two terms of the series are 0 and 1.

// Hence, the series is: 0, 1, 1, 2, 3, 5, 8, 13...

// function fibonacci(n) {

//   for (let i = 0; i < n.length; i++) {
//    let array = [0,1];
//     for (let i = 2; i < n; i++) {
//       array.push(array[i - 1] + array[i - 2]);

//     }
//     return array[n - 1];
// }