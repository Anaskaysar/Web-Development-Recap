# Basic JavaScript Recap

### What is JavaScript?
- JavaScript is a high level (often) just-in-time compiled programming language that conforms ECMAScript specification.
- JavaScript, alongside HTML and CSS is one of the core technologies of the world wide web.
- JavaScript can be used to build server side applications
- JavaScript is also used in mobile app development to create cross platform apps that can simuntaniously run on computer, android and iOS.
- JavaScript is also used to create desktop applications
- JavaScript is the most poputar programming language according to the 2021 Stack Overflow developer servey.

### Ways to Run JavaScript on any browser
- Browser console
- From HTML Body using Script Tag 
- From nodejs runtime from Terminal

### Variables
Recomanded ways to declare variables
- Using let
- Using var
Difference between these two.
- All const declaration must be declarations must be initialized and once initialized it can not be reassigned. If any const vairable is declared without assigning values it it give error "Missing initializer in const declaration". On the other hand if one try to change values of constant variablw after assigning value it will give "TypeError :  Assignment to constant variable".
- let can be declared with or without assigning values. There wont be any issues.

<b>Thumb Rule: Always use "const" declarations unless the value is going to be changed. </b>

### Data Types

            | Premtive DataTypes | Non-Primtive DataTypes | 
            | ------------------ | ---------------------- |                   
            |    Strings         |   Object               |
            |    Numbers         |                        |
            |    Boolean         |                        |
            |    Undefined       |                        |
            |    NULL            |                        |
            |    BigInt          |                        |
            |    Symbol          |                        |
            ------------------     ----------------------
 * Array DataTypes (Another Data Type Where a variable can cotain bunch of integer value.)
 * Js is dynamically typed. So a variable declared with let won't cause any error if the assigning value is changed several times. It will always    ..0show the recent change. This type of an assignment does not cause any error.  

### Operators
An operator is a special symbol used to perform operations on values and variables.
- Assignment Operator
- Arithmetic Operator
- Comparison Operator - Primarily used in loops and branching statement
- Logical Operator
- String Operators  - 
- Other Operator - Ternary operator <b> It returns a value based on condition</b>

### Type Conversions
- <b> Implicit Conversion </b> - Known as type coercion where JS itself will automatically convert the type.
- <b> Explicit Conversion </b> - Where we have to manually convert the type.

### Some Expilicit Conversions
- Any string to number <b>Number(), parseInt()</b>  
- Any number to string <b>String(), ().toString() </b>  

### Equality**
<b> Double Equal (==) </b> - This allows coercion - incase of this js convert the string to same type or number which results in automatic equality.
<b> Tripple Equal (===) </b> - This does not allow coercion. It is a bit strict in terms of that. It makes sure that the both variables are of smae type before comparing and will not convert automatically.

* It is safe to use <b> === </b>for everyone

### Conditional Statement 
- if
- else If
- else
- Switch

### Loops
- For
- while
- do while 
- For of loop -Mostly used for collection of Data like array, no need to keep iteration value. No tension for aray elements access.

### Functions
- A JavaScript function is a block of code designed  to perform a particular task.
    <b>Ex: Add two numbers, multiply two numbers etc. </b>
- Functions are reusable as they can be defined once and can be called with different values  resulting in different results.
- Functions also devide a complex problem into smaller chunks and makes your program easy to understand and maintain.

* Arrow Functions-

### Scope 
- Scope basically determines the accessiblity of variables.
- <b>Block Scope - let and const variables can only be accessed in the blocks they are declared
- <b> Function Scope
- <b> Global Scope

* Globaly declared variables can not override the block scope variables.