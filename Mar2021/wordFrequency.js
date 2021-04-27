function wordFrequency(txt, n) {
    if (txt === "") return []
    return Object.entries(txt.toLowerCase().split(" ").reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },[])).sort((a,b) =>  b[1] - a[1]).slice(0,n)
}
console.log(
wordFrequency("Hello hello world", 2) ,//[['hello', 2], ['world', 1]]

wordFrequency("The quick brown fox jumped over the lazy dog", 1) ,//[['the', 2]]

wordFrequency("Opensource opensource open-source open source", 1) ,//[['opensource', 2]]

wordFrequency("Apple App apply aPP aPPlE", 3) ,//[['app', 2], ['apple', 2], ['apply', 1]] or [['apple', 2], ['app', 2], ['apply', 1]]

wordFrequency("c d a d c a b d d c", 4) ,//[['d', 4], ['c', 3], ['a', 2], ['b', 1]]
)