function IBeforeExceptC(word) {
    let lowerWord = word.toLowerCase();

    lowerWord.test("c") ?
    // check if there is a c in the word

    // check to see if the
    console.log()
}

IBeforeExceptC("receive"); //true

IBeforeExceptC("science"); // false

IBeforeExceptC("inconceivable"); //true

IBeforeExceptC("insufficient"); //false

IBeforeExceptC("omniscient");//false

// The phrase "I before E, except after C" is a widely known mnemonic which is supposed to help when spelling English words.

// Using the words provided, check if the two sub-clauses of the phrase are plausible individually:

// "I before E when not preceded by C".
// "E before I when preceded by C".
// If both sub-phrases are plausible then the original phrase can be said to be plausible.

// Write a function that accepts a word and check if the word follows this rule. The function should return true if the word follows the rule and false if it does not.