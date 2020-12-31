
// set droppedArray;
// set foundElement;

// shift if found return foundElement else return droppedArray;

function dropElements(arr, func) {

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    } 
    return arr;
  }
}
