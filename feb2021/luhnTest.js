function luhnTest(string) {
    let array = string.split("").reverse();

    let s1 = array.reduce((acc,oddNum,idx) => {
        if (idx % 2 === 0) {
            acc += Number(oddNum);
        }
        return acc;
    },0)

    let evenArray = [];
    let s2 = array.reduce((acc,evenNum,idx) => {
        if (idx % 2 === 1) {
            evenArray.push(Number(evenNum * 2));
            if ((evenNum * 2) > 9) {
                sum = sumDigits(evenNum * 2);
                acc += Number(sum);
            }
            acc += Number(evenNum * 2);
        }

        return acc;
    },0)


    return `${evenArray} sum is ${s2}`;
}
function sumDigits(n) {
  return (n - 1) % 9 + 1;
}
console.log(
// luhnTest("4111111111111111"),//true.

// luhnTest("4111111111111112"),//false.

luhnTest("49927398716"),//true.

// luhnTest("49927398717"),//false.

// luhnTest("1234567812345678"),//false.

// luhnTest("1234567812345670"),//true
)