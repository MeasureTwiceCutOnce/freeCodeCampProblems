function arrToObj (keys, vals) {
    let hash = {};

    for (let i = 0; i < keys.length; i++) {
        hash[keys[i]] = vals[i];
    }
    return hash;
  }
console.log(
//   arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"]),  //  { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" }

  arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d"]),  //  { 1: "a", 2: "b", 3: "c", 4: "d", 5: undefined }

//   arrToObj([1, 2, 3], ["a", "b", "c", "d", "e"]),  //  { 1: "a", 2: "b", 3: "c" }

//   arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]),  //  { "a": 1, "b": 2, "c": 3 , "d": 4, "e": 5 }

  arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4]),  //  { "a": 1, "b": 2, "c": 3 , "d": 4, "e": undefined }
)