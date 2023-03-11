// Nested function's scope -- Lexical Scope

// let a = 10
// function outer() {
//     let b = 20
//     function inner() {
//         let c = 30
//         console.log(a, b, c)
//     }
//     inner()
// }
// outer()

// Closures

// function outer() {
//     let counter = 0
//     function inner() {
//         counter++
//         console.log("Inner: " + counter)
//     }
//     return inner
// }
// const fn = outer()
// fn()
// fn()

//Function Currying

// function sum(a, b, c) {
//     return a + b + c;
// }
// function curry(fn) {
//     return function (a) {
//         return function (b) {
//             return function (c) {
//                 return fn(a, b, c)
//             }
//         }
//     }
// }
// const curriedSum = curry(sum)
// console.log(curriedSum(2)(3)(4))

// const add2 = curriedSum(5)
// const add3 = add2(7)
// const add5 = add3(7)

// console.log(add5)

//This keyword
// function sayMyName(name) {
//     console.log(`My name is ${name}`)
// }

// sayMyName("Walter White")

//Implicit Binding

const person = {
    name: "Viswas",
    sayMyName: function () {
        console.log(`My Name is ${this.name}`)
    },
}

// person.sayMyName()

//Explicit Binding

// function sayMyName() {
//     console.log(`My Name is ${this.name}`)
// }

// sayMyName.call(person)

//New Binding

// function Person(name) {
//     this.name = name
// }

// const p1 = new Person("Biswas")
// const p2 = new Person("Kishwash")

// console.log(p1, p2)

//Prototype

// function Person(fName, lName) {
//     this.firstName = fName
//     this.lastName = lName
// }

// const person1 = new Person("Bruce", "Wane")  // constructor
// const person2 = new Person("Hello", "Man")

// Person.prototype.getFullName = function () {
//     return this.firstName + ' ' + this.lastName
// }

// console.log(person2.getFullName())

//36.59