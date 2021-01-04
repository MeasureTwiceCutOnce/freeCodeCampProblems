// Return true if the given string is a palindrome. Otherwise, return false.
//
function palindrome(str) {
  let stringInNumbers = [];

  // for (i = 0; i < str.length; i++)
  stringInNumbers.push(str.toLowerCase().replace(/[^0-9a-z]/gi, ''));

  if (stringInNumbers.length % 2 === 0 || stringInNumbers.length < 2) {
    return false;
  } else {
    for (let i = 0; i < (stringInNumbers.length - 1) / 2; i++) {
      const firstHalfOfNumbers = stringInNumbers[i];
      // const secondHalfIndexes = stringInNumbers.indexOf[i];
    }

      for (let j = (stringInNumbers.length + 1) / 2; j < stringInNumbers.length; j++){
      const secondHalfNumbers = stringInNumbers[i];
      // const secondHalfIndexes = stringInNumbers.indexOf[i];

      if (firstHalfOfNumbers === secondHalfNumbers) {
        return true;
      } else {
        return false;
      }
    }

  }
}


// slice the array in half and set to two arrays
//
// match the numbers and indexes

console.log(palindrome("eye"));
console.log(palindrome("civic"));
console.log(palindrome("racecar"));
console.log(palindrome("Never odd or even"));
console.log(palindrome("Doc note I dissent A fast never prevents a fatness I diet on cod"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("My age is 0, 0 si ega ym.")); //true
console.log(palindrome("1 eye for of 1 eye.")); //false

// a possible correct answer. so easy, why didn't I think of this.

// function palindrome(str) {
//   return (
//     str.replace(/[\W_]/g, "").toLowerCase() ===
//     str
//       .replace(/[\W_]/g, "")
//       .toLowerCase()
//       .split("")
//       .reverse()
//       .join("")
//   );
// }