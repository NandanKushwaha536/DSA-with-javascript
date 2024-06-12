class Queue{
    constructor(){
        this.queue=[]
    }

    enqueue(data){
        this.queue.push(data)
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty"
        }

        return this.queue.shift()
    }

    isEmpty(){
        return this.queue.length === 0
    }

    peek(){
        if(this.isEmpty()){
            return "Queue is empty"
        }

        return this.queue[0]
    }

    size(){
        return this.queue.length
    }

    clear(){
        this.queue=[]
    }

    printQueue(){
        let str=""
        for(let i = 0; i < this.queue.length; i++){
            str += this.queue[i] + "/"
        }

        return str
    }
}

// Usage Example

let myQueue = new Queue()

myQueue.enqueue(20)
myQueue.enqueue(10)
myQueue.enqueue(25)
myQueue.enqueue(30)
myQueue.enqueue(50)
myQueue.dequeue()

console.log(myQueue.printQueue())