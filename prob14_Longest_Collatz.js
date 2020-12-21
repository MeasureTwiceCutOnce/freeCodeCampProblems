// My mess
function longestCollatzSequence(limit) {
  const newChain = [];
  let acc = limit;
  for (let i = 0; i < 100000000; i++) {
    if (acc % 2 === 0) {
      newChain.reduce((acc, curr) => {
        return acc / 2;
      }, limit); 
    } else {
      if (acc % 2 === 1) {
        newChain.reduce((acc, curr) => {
          return acc * 3 + 1; 
        }, limit);
      }
    }
    
  }

  return true;
}

longestCollatzSequence(14);

// The right stuff
// // function longestCollatzSequence(limit) {
//   let longest = 1;
//   let maxLength = 1;
//   for (let i = Math.floor(limit / 2); i < limit; i++) {
//     let len = colLen(i);
//     if (len > maxLength) {
//       longest = i;
//       maxLength = len;
//     }
//   }
//   return longest;
// }

// const knownSequence = { '1': 1 };

// function colLen(n) {
//   if (knownSequence[n]) {
//     return knownSequence[n];
//   } else {
//     const len = n % 2 === 0 ? colLen(n / 2) + 1 : colLen((3 * n + 1) / 2) + 2;
//     knownSequence[n] = len;
//     return len;
//   }
// }