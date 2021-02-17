import LinkedListNode from '../LinkedList/LinkedListNode';
class Stack<T> {
    public top: LinkedListNode<T>;
    public length: number;

    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(value: T): void {
        const newNode = new LinkedListNode(value);
        if (!this.top) {    
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    pop(): T {
        if (!this.top) {
            return null;
        }
        const temp = this.top;
        if (!this.top.next) {
            this.top = null;
        } else {
            this.top = this.top.next;
        }
        return temp.value;
    }

    peek(): T {
        return this.top ? this.top.value : null; 
    }

    isEmpty(): boolean {
        return !this.top; 
    }

    toArray(): T[] {
        const nodes: T[] = [];
        let current = this.top;
        while (current) {
            nodes.push(current.value);
            current = current.next;
        }
        return nodes;
    }

    toString() {
        return this.toArray().join(',');
    }
}

const stack = new Stack();
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(33);
stack.push(88);
stack.push(99);
console.log(stack.toString());
stack.pop();
stack.pop();
console.log(stack.toString());


console.log(stack.peek())
