function mult(strNum1, strNum2) {
    return String((Number(strNum1) * Number(strNum2)).toFixed(21))
}
console.log(
    mult("18446744073709551616", "18446744073709551616"),// "340282366920938463463374607431768211456".

mult("31844674073709551616", "1844674407309551616"),// "58743055272886011737990786529368211456".

mult("1846744073709551616", "44844644073709551616"),// "82816580680737279241781007431768211456".

mult("1844674407370951616", "1844674407709551616"),// "3402823669833978308014392742590611456"
)
// Long multiplication
// Explicitly implement long multiplication.

// This is one possible approach to arbitrary-precision integer algebra.

// Write a function that takes two strings of large numbers as parameters. Your function should return the product of these two large numbers as a string.

// Note: In JavaScript, arithmetic operations are inaccurate with large numbers, so you will have to implement precise multiplication yourself.