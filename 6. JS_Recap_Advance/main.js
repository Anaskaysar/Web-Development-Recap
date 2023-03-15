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

// // const person1 = new Person("Bruce", "Wane")  // constructor
// // const person2 = new Person("Hello", "Man")

// Person.prototype.getFullName = function () {
//     return this.firstName + ' ' + this.lastName
// }

// console.log(person2.getFullName())

//36.59

// function SuperHero(fName, lName) {
//     Person.call(this, fName, lName)
//     this.isSuperHero = true
// }

// SuperHero.prototype.fightCrime = function () {
//     console.log("Fight Crime")
// }

// SuperHero.prototype = Object.create(Person.prototype)

// const batman = new SuperHero('Bruce', "Wane")
// SuperHero.prototype.constructor = SuperHero
// console.log(batman.getFullName())


// Class


// class Person {
//     constructor(fName, lName) {
//         this.firstName = fName
//         this.lastName = lName
//     }
//     sayMyName() {
//         return this.firstName + " " + this.lastName
//     }
// }


// const classP1 = new Person("Bruce", "Wane")
// console.log(classP1.sayMyName())

//Inheritance with class

// class SuperHero extends Person {
//     constructor(fName, lName) {
//         super(fName, lName)
//         this.isSuperHero = true
//     }

//     fightCrime() {
//         console.log("Fighting crime")
//     }
// }

// const batman = new SuperHero("Bruce", "Wane")

// console.log(batman.sayMyName())

// Iterables and Iterators
// const obj = {
//     [Symbol.iterator]: function () {
//         let step = 0
//         const iterator = {
//             next: function () {
//                 step++
//                 if (step == 1) {
//                     return { value: "Hello", done: false }
//                 } else if (step == 2) {
//                     return { value: "World", done: false }
//                 }
//                 return { value: undefined, done: true }
//             }
//         }
//         return iterator
//     }
// }

// for (const word of obj) {
//     console.log(word)
// }

function* generatorFunction() {
    yield 'Hello';
    yield 'World'
}

const generatorObject = generatorFunction()

for (const word of generatorObject) {
    console.log(word)
}