//ES6

//Es6 strings

// let firstName = 'john';
// let lastName = 'Smith';
// const yearOfBirth = 1998;
//
// function calcAge(year){
//   return 2016 - year;
// }
//   console.log(`${firstName} ${lastName} ${calcAge(yearOfBirth)}`)


//Arrow Functions

const years = [1998, 1965, 1982, 1935]

let ages = years.map(el => 2016 - el)

console.log(ages)

ages = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages)
