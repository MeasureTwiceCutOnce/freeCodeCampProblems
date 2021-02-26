function isLychrel(n) {

        function reverse(num) {
          return parseInt(
            num
              .toString()
              .split('')
              .reverse()
              .join('')
          );
        }
        var i;
        for (i = 0; i < 500; i++) {
          n = n + reverse(n);
          if (n == reverse(n)) break;
        }
        return i == 500;

    // I am surprised my code below did not work. It looks like it should. I think I am just one small syntax off.
    // let count = 0;
    // let reversed = isPalindrom(n)
    // let result = 0;
    // while (count < 500) {
    //     count++;
    //     n = n + reverseTheNum(n)
    //     if (n === reverseTheNum(n)) {
    //         break;
    //     } else {
    //         isLychrel(n);
    //     }
    // }
    // if (count >= 500) {
    //     return true;
    // }
    // return false;
    // let count = 0;
    // let reversed = isPalindrom(n)
    // let result = 0;
    // while (count < 500) {
    //     count++;
    //     result += n + reverseTheNum(n)
    //     if (isPalindrom(result)) {
    //         break;
    //     } else {
    //         result += result + reverseTheNum(result);
    //     }
    // }
    // if (count >= 500) {
    //     return true;
    // }
    // return false;
}

function isPalindrom(num) {
    return Number(num) === reverseTheNum(num);
}

function reverseTheNum(number) {
    return Number(number.toString().split("").reverse().join(""));
}

console.log(
    isLychrel(12), //false.

    isLychrel(55), //false.

    isLychrel(196), //true.

    isLychrel(879), //true.

    isLychrel(44987), //false.

    isLychrel(7059), //true
)