# Advance JavaScript Revision

### Nested function's scope 
- Block Scope - Bariables declared inside a pair of curly braces cannot be accessed from outside the block
- Function Scope - variables declared inside a function cannot be accessed from outside the function
- Global Scope - Globally scoped variables can be accessed inside a block or function but can not overide block scopes

** Nested functions have access to it's own scope as well as it's outer scope.

### Closures***
- A closure is the combination of a function bundled togther with references to its surrouding state. Closure are created everytime a functio is created, at function creation time.
- A closure is created when a function is created returned from another function- In such case JS not only return it's iner function but also returns it scope as well.
- We can not use const while using closure.

### Function Currying ***
- A process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time.
- ? Why should we use this!!!!!!!!!!!!!!!!!!!!!!!
- Used for Resuabl functions
- composing new functions easily

### This Keyword
- The Javacript this keyword used in a function, refers to the object it belongs to
- It makes function resuabke by letting you decide the object value
- this value is determined entirely by how a function is called.

- *** How to determine 'this'
    1. Implicit Binding
    2. Explicit Binding
    3. New binding
    4. Default Binding
#### Order NEID

### Prototype 
- In javascript every function has a property called prototype which is object. With the protoype we can invoke every object os function functions with just one function.
- a constructor function which is used with the new keyword is called a constructor function.
- One of the use of prototype is to share properties and methods accross instances.

### Prototypal inheritance
### Class
- an advance way of prototype inheritance
### Iterables and Iterators
- Strings, Arrays, Sets, Maps - Built in iterators - DSA

- An object which implemeents the iterable protocol is called an iterable
- For an object to be an iterable it must implement a method at the key [Symbol.iterator]
- That method should not accept any arguments and should return an object which conforms to iterator protocol
- The object mus have a next() method that returns an object with two peoperties.
### Generators

- A generator function is kind of function than can stop in midway and then continue from where its stopped. Execution is not continuos.