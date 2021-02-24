function setConsolidation(array) {
    let splitArray = [];
    array.forEach(set => splitArray.push(set.split("")))
    let flatSplitArray = splitArray.flat();

    // if (hasDuplicate(splitArray)) {
    //     return true;
    // } else {
    //     return splitArray.flat();
    // }
    for (let i = 0; i < flatSplitArray.length; i++) {
        if (flatSplitArray.indexOf(flatSplitArray[i]) !== flatSplitArray.lastIndexOf(flatSplitArray[i])) {
            return true;
        } else {
            return false;
        }
    }

    // return flatSplitArray.lastIndexOf(flatSplitArray[1])
}
// function hasDuplicate(array) {

// }


console.log(
setConsolidation(["AB", "CD"]),//[["C", "D"], ["A", "B"]].

setConsolidation(["AB", "BD"]),//[["A", "B", "D"]].

setConsolidation(["AB", "CD", "DB"]),//[["A", "B", "C", "D"]].

setConsolidation(["HIK", "AB", "CD", "DB", "FGH"]),//[["F", "G", "H", "I", "K"], ["A", "B", "C", "D"]]
)