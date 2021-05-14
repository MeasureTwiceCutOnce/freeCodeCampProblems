function ludic(n) {
    let ludicNumbers = [1];
    let tempArray = [];
    let lastLudic = ludicNumbers[ludicNumbers.length - 1]
    if (n === 1) {
        return ludicNumbers
    }

    for (let i = lastLudic; i < n * 5; i++) {
        tempArray.push(i)
    }
    return lastLudic
}

console.log(
    ludic(2), // [1, 2].

ludic(3), // [1, 2, 3].

ludic(5), // [1, 2, 3, 5].

ludic(20), // [1, 2, 3, 5, 7, 11, 13, 17].

ludic(26), // [1, 2, 3, 5, 7, 11, 13, 17, 23, 25]
)