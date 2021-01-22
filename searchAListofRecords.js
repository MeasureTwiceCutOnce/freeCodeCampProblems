// I was so close to getting this one, but I did not know that there was a built in method called findIndex() which easily does what I was trying to figure out.

function searchCity(name) {
    return list.findIndex(item => item.name === name);
  }

// Below is my code and above is the Suggested Solution
// function searchCity(name) {
//     let  cityNames = Object.values(list[0]);
//     list.find(element => list[cityNames] = element);
// }
const list = [
    { name: 'Lagos', population: 21.0 },
    { name: 'Cairo', population: 15.2 },
    { name: 'Kinshasa-Brazzaville', population: 11.3 },
    { name: 'Greater Johannesburg', population: 7.55 },
    { name: 'Mogadishu', population: 5.85 },
    { name: 'Khartoum-Omdurman', population: 4.98 },
    { name: 'Dar Es Salaam', population: 4.7 },
    { name: 'Alexandria', population: 4.58 },
    { name: 'Abidjan', population: 4.4 },
    { name: 'Casablanca', population: 3.98 }
];

console.log(searchCity("Lagos"));
// Write a function that takes a string as a parameter. The function should return the index of the item in list for which the value of the name attribute matches the given string.