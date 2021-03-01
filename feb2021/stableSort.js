function stableSort(array) {

    for (let subArray = 0; subArray < array.length; subArray++) {
        subArray[0].sort((a,b) => a - b)
    }

    // return array.sort((a,b) => a - b);
}
console.log(
stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]]),//[["US", "Birmingham"], ["UK", "Birmingham"], ["UK", "London"], ["US", "New York"]].

stableSort([[2, 2], [1, 2], [1, 4], [1, 5]]),//[[2, 2], [1, 2], [1, 4], [1, 5]]
)

// I was kind of on the right track
function stableSort(arr) {
    arr.sort(function(a, b) { return (a[1] < b[1] ? -1 : (a[1] > b[1] ? 1 : 0)) });
    return arr;
  }