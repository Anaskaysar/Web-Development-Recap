// //log statement using console.log
// console.log("Hello From Main.js ")

// //variables

// let age = 25
// console.log(age)

// const salary = 1000
// // const salary
// salary = 5000;
// console.log(salary)

//Data Types
// //Seven Primtive Data Types
// const name = "Kaysar"
// const language = "JavaScript"
// const channel = 'Kaysarul Anas'

// const total = 10
// const PI = 3.1416

// const isPrimeNumber = true
// const isNewUser = false

// let result
// // console.log(result) // When a variable is declared but no value is assigned then it is called undefined

// const res = undefined
// const data = null


// //Javascript Object

// const person = {
//     'firstname': "Bruce",  //key can only be symbol or string where value can be anything
//     'lastname': "Lee",
//     'age': 30
// }

// console.log(person.firstname)
// console.log(person.lastname)

// // Arraytypes

// const oddNumbers = [1, 3, 5, 7, 9]
// console.log(oddNumbers[0])  // Array element can be access bia position of the value

// Operator

// let x = 10
// let y = "10" //Assignment Operator
// console.log(x + y) //Arithmetic Operator
// console.log(++x) //Arithmetic Operator
// console.log(--y) //Arithmetic Operator

// Comparison Operator

// console.log(x == y)
// console.log(x != y)
// console.log(x === y) //it compares not only value but also data type
// console.log(x !== y) //special equality
// console.log(x >= y)
// console.log(x <= y)

// Logical Operator
// const isValidNumber = x > 20 && 8 < y
// console.log(isValidNumber)

// Ternary Operator

// const isEvan = 10 % 2 === 0 ? true : false
// const isEvan2 = 10 % 2 === 0 ? "Even" : "Odd"
// console.log(isEvan)

// // Type Conversion
// console.log(true + '3')
// console.log('6' - '3')
// console.log('6' * '3')
// console.log('6' / '3')

// //Not a number
// console.log("Bruce" - "Wane")


// Explicit Conversion
// console.log(Number('5'))
// console.log(Number(false))
// console.log(parseInt('5'))
// console.log(parseFloat('5.11'))

// // String Global Method

// console.log(String(500))
// console.log(String(undefined))
// console.log((500).toString())
// console.log(Boolean(10)) //null undefined 0 '' nan willl always return false others will return true

//Equality

// const var1 = 'test'
// const var2 = 'test'

// console.log(var1 == var2)
// console.log(var1 === var2)

// Conditional Statement

// const num = -5
// if (num > 0) {
//     console.log("Number is positive")
// }
// else if (num < 0) {
//     console.log("Number Is negative")
// }
// else {
//     console.log("Number is Zero")
// }

// const color = 'red'
// switch (color) {
//     case 'blue':
//         console.log("Color is Blue")
//         break;
//     case 'red':
//         console.log("Color is Red")
//         break;
//     case 'green':
//         console.log("Color is Green")
//         break;
// }

// looping

const x = 5

//For Loop
// for (let i = 0; i <= x; i++) {
//     console.log("Iteration Number " + i)
// }

//While Loop
// let i = 0
// while (i <= x) {
//     console.log("Iteration Number: " + i)
//     i++
// }

//do while - atleast executes one

// let i = 1
// do {
//     console.log("The iteration is : " + i)
//     i++
// } while (i <= 5)

// For_of loop

// const numArray = [6, 5, 4, 3, 2, 1, 0]

// for (const num of numArray) {
//     console.log("Iteration Number " + num)
// }

// Functions

// function greet(x) {
//     console.log("Good Moring " + x)
// }
// greet("Mr X")
// greet("Mr y")
// greet("Mr z")
// greet("Mr k")


// const add = (a, b) => {
//     return a + b
// }
// const add = (a, b) => a + b //second way to write arrow function
// const add5 = a => a + 5 //second way to write arrow function

// console.log(add5(5))

// Scopes