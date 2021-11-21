//Last in first out => LIFO

class Stack{
    constructor(){
        this.stack=[]
    }
    enqueue(element){
        this.stack.push(element);
    }
    remove(){
        return this.stack.pop();
    }
}

const premiks= new Stack();
premiks.enqueue('Abula');
premiks.enqueue('Babul');
premiks.enqueue('Kabul');
premiks.enqueue('Mabul');

console.log(premiks.stack)

premiks.remove();
console.log(premiks.stack)
