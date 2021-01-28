function standardDeviation(arr) {
    let deviationsArray = [];

    for(let i = 0; i < arr.length; i++) {
        deviationsArray.push(Math.pow(arr[i] - getMeanValue(arr),2));
    }

    return Math.round((Math.sqrt(getMeanValue(deviationsArray))) * 1000 / 1000);
}

function getMeanValue(array) {
    return (array.reduce((a,b) => a + b,0)) / array.length;
}

console.log(standardDeviation([2,4,4,4,5,5,7,9]));
console.log(standardDeviation([600, 470, 170, 430, 300]));
console.log(standardDeviation([75, 83, 96, 100, 121, 125]));
console.log(standardDeviation([23, 37, 45, 49, 56, 63, 63, 70, 72, 82]));
// Write a function that takes an array of numbers as parameter and returns the standard deviation of the series.

    // return Math.ceil((arr.reduce((a,b) => Math.pow((a - getMeanValue(arr)),2) + Math.pow((b - getMeanValue(arr)),2),0)) / arr.length);