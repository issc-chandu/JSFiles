// Primitive 

// 7 Types :

// 1) String
// 2) Number
// 3) Boolean
// 4) null
// 5) undefined
// 6) symbol
// 7) BigInt

// Examples :

const score = 100
const scoreValue = 100.7

const isLoggedIn = false
const outsideTemp = null
let UserEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 65375387583n

// Reference types (Non Primitivr)

// 1) Array
// 2) Object
// 3) Functions

// Example :

const heros = ["shaktiman", "naagraj", "doga"] // arrray

let Object = { //Object

    name : "chandu",
    age : 23,
}

const myFunction = function(){   //Function
    console.log("Hello JavaScript!"); 
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof anotherId);

console.log(typeof Array);
console.log(typeof Object);
console.log(typeof Functions);









