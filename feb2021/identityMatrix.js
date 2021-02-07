function idMatrix(n) {
    // let matrix = [];

    // for (let i = 0; i < n; i++){
    //     matrix[i] = new Array(n);
    // }
    // console.log(matrix)

    // console.log(Array.from(Array(n)))


    // console.log(Array(n).fill(Array(3)))


    // console.log(Array(n).fill().map(()=>Array(n).fill(0)))
    // console.log(Array(n).fill().map(()=>Array(n).fill(0)))
    // This is the solution from FCC and it is amazing. I love how people think. They basically did two loops, one in the other, and compared the index of the nested array with the coloumn of the inner loop, and if they matched, then input 1.

    function idMatrix(n) {
        // array of values [0, 1, ... n]
        // array of arrays with 1 if row and column match, else 0
        const indexArr = [...Array(n).fill(0).keys()];
        return indexArr.map(i => indexArr.map(j => i === j ? 1 : 0));
    }

}

idMatrix(3);