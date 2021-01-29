// This is a pretty cool problem. I like problems that use recursion to solve it. I would love to have someone break this dowm for me and help me to understand it a little better.

function eth_mult(a, b) {
    // required functions
    const halve = (n) => Math.floor(n/2);
    const double = (n) => n + n;
    const isEven = (n) => n % 2 === 0;

    // setup variables
    let [left, right] = [a, b].sort((a, b) => a - b);
    let total = isEven(left) ? 0 : right;

    // Ethiopian algorithm
    while (left > 1) {
      left = halve(left);
      right = double(right);
      if (!isEven(left))
        total += right;
    }

    // return result
    return total;
  }



// const halve = (n) => Math.floor(n/2);
// const double = (n) => n + n;
// const isEven = (n) => n % 2 === 0;

// function eth_mult(a, b) {
//   return a > 1 ? (eth_mult(halve(a), double(b)) + (isEven(a) ? 0 : b)) : b;
// }