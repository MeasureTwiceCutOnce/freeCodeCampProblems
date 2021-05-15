function spiralArray(n) {
    // let arrayNums = [];

    // for (let i = 0; i < n**2; i++) {
    //     arrayNums.push(i)
    // }


        return Array(n);


}
console.log(
    spiralArray(3) ,//[[0, 1, 2],[7, 8, 3],[6, 5, 4]].

    // spiralArray(4) ,//[[0, 1, 2, 3],[11, 12, 13, 4],[10, 15, 14, 5],[9, 8, 7, 6]]
)

function spiralArray(n) {
    var arr = Array(n),
      x = 0, y = n,
      total = n * n--,
      dx = 1, dy = 0,
      i = 0, j = 0;
    while (y) arr[--y] = [];
    while (i < total) {
      arr[y][x] = i++;
      x += dx; y += dy;
      if (++j == n) {
        if (dy < 0) { x++; y++; n -= 2 }
        j = dx; dx = -dy; dy = j; j = 0;
      }
    }
    return arr;
  }