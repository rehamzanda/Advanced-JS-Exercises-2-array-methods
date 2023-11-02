//Exercise 1
//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

//The function should not modify the array. It should return the new array. For instance:

//creat an array
// for loop inside the array
//split an array form the original array without affecting the original one
// put the resulte in the new arr


let arr = [5, 3, 8, 1]

const filterOdd = arr.filter(e => e%2 != 0)

console.log(filterOdd);
console.log(arr);

//Exercises 2
//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 28 }

let users = [ john, pete, mary ]
const names = users.map(x => x.name)
console.log(names)

//Exercises 3
//Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.
//The formula for the average is (age1 + age2 + ... + ageN) / N. For instance:

let john1 = { name: "John", age: 25 }
let pete1 = { name: "Pete", age: 30 }
let mary1 = { name: "Mary", age: 29 }

let arr1 = [ john1, pete1, mary1 ]
//we need to creat an array of age objects property
// sum this numbers and dividing them by number of objects (acumolator)

let ageArr= arr1.map(x => ({age:x.age}))
console.log(ageArr)
let getAverageAge= ageArr.reduce((a,x)=> a+=x.age/ageArr.length , 0);

console.log(getAverageAge);