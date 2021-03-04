function bogosort(v) {
    let max = Math.max(...v);
    let min = Math.min(...v);
    let random = Math.floor(Math.random() * (max - min + 1) + min)
    while (!isSorted(v)) {

    }
    // for (let i = 0; i < 20; i++) {
    //     console.log(random);
    // }
    return random;
    // return isSorted(v)
}
function isSorted(arr) {
    return arr[0] === arr.sort((a,b) => a - b)[0];
}
console.log(
bogosort([25, 32, 12, 7, 20]) ,//[7, 12, 20, 25, 32]
)

// function bogosort(v) {
  function shuffle(v) {
    for (var j, x, i = v.length; i; j = Math.floor(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
  };

  function isSorted(v) {
    for (var i = 1; i < v.length; i++) {
      if (v[i - 1] > v[i]) {
        return false;
      }
    }
    return true;
  }
  var sorted = false;
  while (sorted == false) {
    v = shuffle(v);
    sorted = isSorted(v);
  }
  return v;
}