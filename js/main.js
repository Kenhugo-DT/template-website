
//* Data types:

//* string: 
  //letters and data inside of quotes. shown as white in the console
  // ex: "hello world", "1", "one"

//* Integer:
  // Whole numbers. shown as blue in the console
  // ex: 1,2,3,4,5,6,7,8,9

//* float:
  // numbers with decimals. also shown in blue in the console. 
  // ex: 1.5, 76.3

//* bigInt: BIG numbers (more than 15 digits). we are not using this.

//* booLean: true or false.

//* array: datastructure type. ex: ["kiwi", "apple,"]

//* object: data structure type. ex:
//* {firstName: "Jokka", lastName: "Bolle", age: "65"}

//  console.log ("hello world");

// first you need to initialize a variable to use it further:
// a let variabel can be changed later:

let a = 3
console.log (a)
// we change the value of the variabel:

a = 4
console.log (a)

// a const variable can not be changed:
const b = 5
console.log (b)

// console.log ("this will not show if there is an error above")

let num1 = 10;
let num2 = 5;
console.log(num1 % num2)
console.log(10 % 5)


let sum = a + b
console.log (sum)

let updatedSum = (a+1000) + b

console.log (updatedSum)

console.log (a%b)

let greetingType = "hello";
let userName = "mark";


//standard concatination:
let greeting = greetingType + " " + userName;

// how to  write a string literal:
let altGreeting = `${greetingType} ${userName}`

console.log(greeting)
console.log(altGreeting)

console.log(1+2+3+4+5)

let markIsTheName = true

if (markIsTheName) {
    console.log(`user has a name`)
} else {
    console.log (`user does not have a name`)
}

let fruitsArray = ["kiwi", "apple", "pear"]

console.log(fruitsArray.length)
console.log(fruitsArray[0])
console.log(fruitsArray[1])
console.log(fruitsArray[2])

const person = {
    firstName: "Ken",
    lastName: "Pedersen",
    age: "28",
    hobbies: ["Musikk", "Gaming", "Motor"]
}

console.log(person)
console.log(person.firstName)
console.log(person.hobbies[0])

const random = Math.random()

//console.log(randomNumber)

const diceThrow = Math.floor(Math.random() * 6)

console.log(diceThrow)

const diceRestults = ["you die", "you defeated the monster", "moist pants",
    "you fucked up", "Freddie Mercury", "slutty pumpkin"]

const stringResult = diceRestults
[diceThrow]

console.log(stringResult)


const randomNumber = Math.round(Math.random() * 1000)

console.log(randomNumber)

