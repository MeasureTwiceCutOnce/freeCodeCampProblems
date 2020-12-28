
// set droppedArray;
// set foundElement;

// shift if found return foundElement else return droppedArray;

function dropElements(arr, func) {
  let droppedArray = [];
  let foundElement = [];
  

  if (func === true) {
      arr.push(func)
      return foundElement;
  } else {
    arr.shift(func);
  }
}

