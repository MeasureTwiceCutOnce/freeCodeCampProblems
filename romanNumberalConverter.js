//Roman Numeral Converter

// Solution 1
var convertToRoman = function(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  var romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};

// My Try. Close but no cigar.

// const DIGITS = {
//   1:I,
//   5:V,
//   10:X,
//   50:L,
//   100:C,
//   500:D,
//   1000:M
// }

// function convertToRoman(num) {

//   let array = DIGITS[num]
//   let digits = num / 10 * num

//   DIGITS      value = (10 * value) + DIGITS;
//   return value

//   arrayOfNumbers.reduce(a , b => {
//     if (a >= b) {
//       return a + b;
//     } else if (a < b) {
//       return a - b;
//     } else {
//       return "error";
//     }
//   })





// }

// let arrayOfNumbers

console.log(20)

// THis is a cool one
// function convertToRoman(num) {
//   var romans = [
//       // 10^i 10^i*5
//       ["I", "V"], // 10^0
//       ["X", "L"], // 10^1
//       ["C", "D"], // 10^2
//       ["M"] // 10^3
//     ],
//     digits = num
//       .toString()
//       .split("")
//       .reverse()
//       .map(function(item, index) {
//         return parseInt(item);
//       }),
//     numeral = "";

//   // Loop through each digit, starting with the ones place
//   for (var i = 0; i < digits.length; i++) {
//     // Make a Roman numeral that ignores 5-multiples and shortening rules
//     numeral = romans[i][0].repeat(digits[i]) + numeral;
//     // Check for a Roman numeral 5-multiple version
//     if (romans[i][1]) {
//       numeral = numeral
//         // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral
//         .replace(romans[i][0].repeat(5), romans[i][1])
//         // Shorten occurrences of 9 * 10^i
//         .replace(
//           romans[i][1] + romans[i][0].repeat(4),
//           romans[i][0] + romans[i + 1][0]
//         )
//         // Shorten occurrences of 4 * 10^i
//         .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
//     }

//   }

//   return numeral;
// }