// Return true if the given string is a palindrome. Otherwise, return false.
//
function palindrome(str) {
  let stringInNumbers = [];

  for (i = 0; i < str.length; i++)
  stringInNumbers.push(str.toLowerCase().charCodeAt(i));

  let halfMark = stringInNumbers/2;

  for (let i = 0; i < (stringInNumbers.length) / 2; i++) {
    const firstHalfNumbers = stringInNumbers[i];
    const firstHalfIndexes = stringInNumbers[i];
  }

  for (let i = stringInNumbers.length / 2; i < stringInNumbers.length; i++){
    const secondHalfNumbers = stringInNumbers[i];
    const secondHalfIndexes = stringInNumbers.indexOf[i];

  }



  console.log(stringInNumbers);
}


// slice the array in half and set to two arrays
//
// match the numbers and indexes

palindrome("eye");
palindrome("civic");
palindrome("racecar");
palindrome("Never odd or even");
palindrome("Doc note I dissent A fast never prevents a fatness I diet on cod");