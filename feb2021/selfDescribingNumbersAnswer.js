// This was an interesting one where I was close but my lack of knowledge about the different methods is what limited me. I knew that some methods would allow me to use the index feature or position as described below, but I didn't know that every method used it. I also knew that using filter would be part of this problem. I think my answer is close though.

function isSelfDescribing(n) {
    let digits = n.toString().split(""); // Array of digits
    // Check that every digit is as frequent as the value in that position
    return digits.every(
      (targetCount, position) =>
        // Check number of matching digits for current position
        targetCount == digits.filter(num => num == position).length
      );
  }
