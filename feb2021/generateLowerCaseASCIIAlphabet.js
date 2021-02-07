function lascii(cFrom, cTo) {
    let newArray = [];
    let lower = cFrom.charCodeAt();
    let upper = cTo.charCodeAt();

    for (let i = lower; i <= upper; i++) {
        newArray.push(String.fromCharCode(i))

    }

    return newArray;
}


lascii('c','i');
lascii("a","d");
lascii('m','q');
lascii('k','n');

// Write a function to generate an array of lower case ASCII characters for a given range. For example, given the range ['a', 'd'], the function should return ['a', 'b', 'c', 'd'].