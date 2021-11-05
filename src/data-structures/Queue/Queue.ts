import LinkedListNode from '../LinkedList/LinkedListNode';

/* using linkedlist to implement queue*/
class Queue<T> {
    public first: LinkedListNode<T>;
    public last: LinkedListNode<T>;
    public length: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value: T): void {
        const newNode = new LinkedListNode(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    dequeue(): T {
        if (!this.first) {
            return null;
        }
        const temp = this.first;
        // only one node exists
        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;

        this.length--;
        return temp.value;
    }

    peek(): T {
        return this.first ? this.first.value : null;
    }

    isEmpty(): boolean {
        return !this.first;
    }

    toArray(): T[] {
        const nodes: T[] = [];
        let current = this.first;
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

const queue = new Queue();
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.peek());
console.log(queue.toString());
queue.dequeue();
queue.dequeue();

console.log(queue.toString());

console.log(queue.isEmpty());