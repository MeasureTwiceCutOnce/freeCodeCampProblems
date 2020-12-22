// Unite Unique
let array1 = [1,2];
let array2 = [3,4,5,2];

function uniteUnique(arr , arr2, arr3) {
  let uniqueArray = [];
  
  for (let i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    for (let j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      if (uniqueArray.indexOf(indexValue) > 0) {
        uniqueArray.push(indexValue);
      }
    }
    
  }
  return uniqueArray;
}
  
//   let wholeSet =  arr.concat(arr2);

//   wholeSet.forEach(element => {
//     if (!unique.includes(element)) {
//       unique.push(element)
//     }
//   });
//   return unique;
// }


console.log(uniteUnique(array1, array2));