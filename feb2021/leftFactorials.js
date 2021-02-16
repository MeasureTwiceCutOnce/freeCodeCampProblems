function leftFactorial(n) {
    if (n == 0)
      return 0
    if (n == 1)
      return 1;

    // Note: for n>=20, the result may not be correct.
    // This is because JavaScript uses 53 bit integers and
    // for n>=20 result becomes too large.

    let res = 2, fact = 2;
    for (var i = 2; i < n; i++) {
      res += fact;
      fact *= (i + 1);
    }

    return res;
  }

console.log(leftFactorial(1));//1
console.log(leftFactorial(2));//2
console.log(leftFactorial(3));//4
console.log(leftFactorial(10));//409114
console.log(leftFactorial(17));//22324392524314

// // Left factorials
// Left factorials,  !n , may refer to either subfactorials or to factorial sums. The same notation can be confusingly seen used for the two different definitions. Sometimes, subfactorials (also known as derangements) may use any of the notations:

// !n‘
// !n
// n¡
// (It may not be visually obvious, but the last example uses an upside-down exclamation mark.) This task will be using this formula for left factorial:

// !n=∑n−1k=0k!
// where  !0=0
// Write a function to calculate the left factorial of a given number.