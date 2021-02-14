function maxCombine(xs) {
    return parseInt(
        xs.sort(
          function(x, y) {
            var a = x.toString(),
              b = y.toString(),
              ab = parseInt(a + b),
              ba = parseInt(b + a);

            return ab > ba ? -1 : (ab < ba ? 1 : 0);
          }
        )
          .join(''), 10
      );
}

console.log(
    [1, 3, 3, 4, 55],  //554331
    [71, 45, 23, 4, 5],//71545423

)

// Largest int from concatenated ints
// Given a set of positive integers, write a function to order the integers in such a way that the concatenation of the numbers forms the largest possible integer and return this integer.