// I liked this answer, but I am grateful that my answer was correct and very similar. I even thought about using the filter method at the end, but decided not to because of risk of syntax error. I also did not use the reduce method but rather used created an empty array and pushed all the maxes into it. After that, I again made an empty string and pushed the max strings into that and then returned it.

function longestString(strings) {
    const maxLength = strings.reduce(
      (maxLength, string) => Math.max(maxLength, string.length),
      0);
    return strings.filter((string) => string.length == maxLength)
  }

