function lastFriday(year, month) {
    const DAYS = ["Friday"]
    let date = new Date(year,month,DAYS)

    return date.getDate()
}

console.log(
    lastFriday(2018, 1), //26.

lastFriday(2017, 2), //24.

lastFriday(2012, 3), //30.

lastFriday(1900, 4), //27.

lastFriday(2000, 5), //26.

lastFriday(2006, 6), //30.

lastFriday(2010, 7), //30
)