function longestString(strings) {
    let stringArray = [];
    strings.forEach(string => stringArray.push(string.length))

    let max = Math.max(...stringArray);

    let maxStrings = [];

    strings.map(string => {
        if (string.length === max) {
            return maxStrings.push(string);
        }
    })
    return maxStrings;
}
console.log(
longestString(["a", "bb", "ccc", "ee", "f", "ggg"]),//["ccc", "ggg"]'.

longestString(["afedg", "bb", "sdccc", "efdee", "f", "geegg"]),//["afedg", "sdccc", "efdee", "geegg"].

longestString(["a", "bhghgb", "ccc", "efde", "fssdrr", "ggg"]),//["bhghgb", "fssdrr"].

longestString(["ahgfhg", "bdsfsb", "ccc", "ee", "f", "ggdsfg"]),//["ahgfhg", "bdsfsb", "ggdsfg"].

longestString(["a", "bbdsf", "ccc", "edfe", "gzzzgg"]),//["gzzzgg"]
)
// Longest string challenge
// In this challenge, you have to find the strings that are the longest among the given strings.

// Write a function that takes an array of strings and returns the strings that have a length equal to the longest length.