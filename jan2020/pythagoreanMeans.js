// This one realliy interests me. This looks so simple, but I am trying to get my head around the formula with this function. I think I see what is happening. Simply adding up an array of numbers which are squared, and then dividing that by the length of the numbers, and then taking the square root of that. Seems simple enough. That may be good practice to find math formulas and convert them to functions. That might be fun.

function rms(arr) {
  const sumOfSquares = arr.reduce((s, x) => s + x * x, 0);
  return Math.sqrt(sumOfSquares / arr.length);
}

