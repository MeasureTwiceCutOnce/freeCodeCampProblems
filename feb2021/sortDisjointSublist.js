function sortDisjoint(values, indices) {
    let arrayCopy = values.slice();


    return
}

console.log(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7]),// [7, 0, 5, 4, 3, 2, 1, 6].

sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [1, 2, 5, 6]),// [7, 1, 2, 4, 3, 5, 6, 0].

sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [6, 1, 7]),// [8, 1, 6, 5, 4, 3, 2, 7]
)

function sortDisjoint(values, indices) {
    let sublist = [];

    indices.sort(function (a, b) { return a - b; });

    for (let i = 0; i < indices.length; i++) {
      sublist.push(values[indices[i]]);
    }

    sublist.sort((a, b) => { return a - b; });

    for (let i = 0; i < indices.length; i++) {
      values[indices[i]] = sublist[i];
    }

    return values;
  }