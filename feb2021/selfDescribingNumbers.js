function isSelfDescribing(n) {
    let array = n.toString().split("");
    let str1 = n.toString();
    let count = 0;

    var re = new RegExp(9,"gi");
    return str1.match(re).length;


    // for (let i = 0; i < array.length; i++) {
    //     if (Number(array[i]) === countOccurence(str1,i)) {
    //         count++;
    //     }
    //     return count;
    // }

    // return array.reduce((acc,curr,idx) =>{
    //     // let idx = count;
    //     if (n.toString().match(/2/)) {
    //         acc += 1;
    //     }
    //     // acc += Number(curr)

    //     return acc
    // },0)
}
// function countOccurence(string,char) {
//     var re = new RegExp(char,"gi");
//     return string.match(re).length;
//    }
// str1 = "pattern"
// var re = new RegExp(str1, "g");
// "pattern matching .".replace(re, "regex");
console.log(
    isSelfDescribing(2020),//true
    // countOccurence(str1,2)
)