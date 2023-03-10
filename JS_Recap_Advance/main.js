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

function sum(a, b, c) {
    return a + b + c;
}
function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c)
            }
        }
    }
}
const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(4))

const add2 = curriedSum(5)
const add3 = add2(7)
const add5 = add3(7)

console.log(add5)