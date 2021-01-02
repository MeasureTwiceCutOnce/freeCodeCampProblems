function addTogether(arg1, arg2) {
  if (arg1 === undefined || arg2 === undefined) {
    var checkNum = function(num) {
      if (typeof num !== "number") {
        return undefined;
      } else return num;
    }
  } else {
    return Number(arg1) + Number(arg2);
  }
}

console.log(addTogether(2,3));
console.log(addTogether(3));
console.log(addTogether(2));
console.log(addTogether(2,7));
console.log(addTogether(8,3));
console.log(addTogether(-2,3));