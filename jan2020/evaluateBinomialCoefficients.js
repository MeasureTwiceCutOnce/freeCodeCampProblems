function binom(n, k) {
    return factorial(n)/(factorial(n-k)*factorial(k))
}

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
// Below is my answer, and of course I got this one wrong because I did not know how to find factorial in an equation. The correct answer above is using recursion to figure out the factorial.
// function binom(n, k) {
//     let sum = 0;
//     for (let i = 0; i < k + 1; i++) {
//         sum += (n * (n - i)) / (k * (k - i));
//     }
//     return sum;
// }

console.log(
binom(5,3), // 10,

binom(7,2), // 21,

binom(10,4) // 210
)

// Write a function to calculate the binomial coefficient for the given value of n and k

// This formula is recommended:

// (nk)=n!(n−k)!k!=n(n−1)(n−2)…(n−k+1)k(k−1)(k−2)…1