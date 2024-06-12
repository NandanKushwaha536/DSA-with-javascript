class stack{
    constructor(){
        this.stack=[]
    }

    push(data){
        this.stack.push(data)
    }

    pop(){
        this.stack.pop()
    }

    peeK(){
        return this.stack(this.stack.length-1)
    }

    isEmpty(){
        return this.stack===0
    }

    size(){
        return this.stack.length
    }

    clear(){
        this.stack=[]
    }

    contain(element){
        return this.stack.includes(element)
    }

    reverse(){
        this.stack.reverse()
    }

    printStack(){
        let str=""
        for(let i=0; i<this.stack.length; i++){
            str +=this.stack[i]+ "\n"
        }
        return str
    }
}

//  useage example

let myStack=new stack

myStack.push(4)
myStack.push(3)
myStack.push(6)
myStack.pop()

console.log(myStack.printStack())