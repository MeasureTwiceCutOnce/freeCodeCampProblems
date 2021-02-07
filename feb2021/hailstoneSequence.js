function hailstoneSequence() {
    const result = [];

    /* 1.: Create a routine to generate the hailstone sequence for a number */
    const hailStones = n => {
      const result = [n];
      while (n > 1) {
        n = n % 2 === 0 ? n/2 : 3*n + 1;
        result.push(n);
      }
      return result;
    };

    /* 2.: Hailstone sequence for n = 27 */
    let n = 27;
    const sequence1 = hailStones(n);
    const result1 = [...sequence1.slice(0, 4), ...sequence1.slice(-4)];
    result.push(result1);

    /* 3.: Hailstone sequence for n = 77031 */
    n = 77031;
    const sequence2 = hailStones(n);
    const result2 = [sequence2.length, n];
    result.push(result2);

    return result;
  }