function fizzBuzz() {
    let array = "";
    for (let i = 1; i < 101; i++) {
       if (i % 3 === 0 && i % 5 === 0) {array += "/FizzBuzz/"}
       if (i % 5 === 0) {array += "/Buzz/"}
       if (i % 3 === 0) {array += "/Fizz/"}
       {array += `,${i},`}
    }
    return array;
}

console.log(fizzBuzz())

// Write a program that generates an array of integers from 1 to 100 (inclusive). But:

// for multiples of 3, add "Fizz" to the array instead of the number
// for multiples of 5, add "Buzz" to the array instead of the number
// for multiples of 3 and 5, add "FizzBuzz" to the array instead of the number
// Your program should return an array containing the results based on the rules above.