function lengthSorter(arr) {

    return arr.sort((a,b) => {
        if (a.length === b.length) a - b;
        else b.length - a.length
    });
    // LS answer
    arr.sort(function(a, b) {
        var result = b.length - a.length;
        if (result == 0)
          result = a.localeCompare(b);
        return result;
      })
      return arr;
}
console.log(
lengthSorter(["Here", "are", "some", "sample", "strings", "to", "be", "sorted"]),//["strings", "sample", "sorted", "Here", "some", "are", "be", "to"].

lengthSorter(["I", "hope", "your", "day", "is", "going", "good", "?"]),//["going", "good", "hope", "your", "day", "is", "?","I"].

lengthSorter(["Mine", "is", "going", "great"]),//["going", "great", "Mine", "is"].

lengthSorter(["Have", "fun", "sorting", "!!"]),//["sorting", "Have", "fun", "!!"]
)