// First in First Out 

class Queue{
    constructor(){
        this.queue=[];
    }
    enqueue(element){
        this.queue.push(element);
    }
    dequeue(){
        this.queue.shift();
    }
}

const premiks= new Queue();

premiks.enqueue('Abula');
premiks.enqueue('Babul');
premiks.enqueue('Kabul');
premiks.enqueue('Mabul');

console.log(premiks.queue)

premiks.dequeue();
console.log(premiks.queue)