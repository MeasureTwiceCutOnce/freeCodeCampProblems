// Sum the Primes






// get User input and validate

function createArray(num) {
  let unCheckedArray = [];
  
  if (!(num <= 0) && !(Number.isNaN(num) && (Number.isInteger(num)))) {
    
  }
  return checkIfPrime(unCheckedArray);
}

// Check for Primes and return as array primeArray
function checkIfPrime(array) {
  let checkedArray = [];

  for (let i = 2; i < array.length; i++) {
    const element = array[i];
    if (element % 2 === 0 && element % element === 0 &&  ) {
      checkedArray.push(array[i]);
    } else {
      
    }
  }
  return sumPrimes(checkedArray)
}



//  Add that array = result
function sumPrimes(array) {
  
}










function sumPrimes(num) {
  let i = 1;
  let sum = 0;
  while (i <= num) {
    if (isPrime(i)) {
      sum += i;
    }
    i++;
  }
  return sum;
}
//function to check if a number is prime or not
function isPrime(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return x !== 1 && x !== 0;
}
//test here
sumPrimes(10);