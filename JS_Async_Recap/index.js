// function greet(){
//     console.log("Good Morning")
// }
// setTimeout(greet,20000)
// clearTimeout()

// setTimeout(()=>{
//     console.log("500 Sec")
// },5000)
// setTimeout(()=>{
//     console.log("300 Sec")
// },3000)
// setTimeout(()=>{
//     console.log("200 Sec")
// },2000)

const person = {
    name: 'Brendan Eich',
    age: 60,
    address: {
      street: '123 JavaScript Street',
      city: 'Web',
      state: 'Programming',
      zip: '12345'
    }
  };

// console.log(person['address'])

// CLASS

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello this is ${this.name}. I am ${this.age} years old`)
    }
}

// const p1 = new Person('Devid',23)
// p1.greet()

// INHERITANCE
class Student extends Person{
    constructor(name,age,rollNo){
        super(name,age)
        this.rollNo = rollNo
    }

    intro(){
        console.log(`Hello From ${this.name}. I am ${this.age} and My roll no is ${this.rollNo} `)
    }
}


const st1 = new Student("KB",22,01)
st1.intro()