function isKaprekar(n, bs) {
    let theSquare = n**2;

    let decimals = function parseDecimal(numberVal){
        return (numberVal / 100).toFixed(2);
     }

    console.log(81 % 10)
}
// The answer is below
function isKaprekar(n, bs) {
    if (n < 1) return false;
    if (n == 1) return true;
    for (var a = n * n, b = 0, s = 1; a; s *= bs) {
      b += a % bs * s;
      a = Math.floor(a / bs);
      if (b && a + b == n) return true;
    } return false;
  }

isKaprekar(1, 10);
isKaprekar(9, 10);
isKaprekar(45, 10);
isKaprekar(55, 10);
isKaprekar(6, 10);