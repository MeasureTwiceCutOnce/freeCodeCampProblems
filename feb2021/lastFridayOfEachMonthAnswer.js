// This answer is pretty straight forward and I should have gotten this right, however, I don't understand how they are decrementing the i variable. Won't that give them a negative number?

function lastFriday (year, month) {
    var i, last_day;
    i = 0;
    while (true) {
      last_day = new Date(year, month, i);
      if (last_day.getDay() === 5) {
        return last_day.getDate();
      }
      i -= 1;
    }
  };