import { List } from '../../Types/List';
import LinkedListNode from './LinkedListNode';
import { listToString } from '../../Utils';

export default class LinkedList<T> implements List<T> {
    head: LinkedListNode<T>;
    tail: LinkedListNode<T>;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // insert before the list 
    append(value: T): LinkedList<T> {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // insert at the end of the list
    prepend(value: T): LinkedList<T> {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // insert at some point in between the list 
    insert(node: LinkedListNode<T>, value: T): LinkedList<T> {
        if (!this.head) {
            this.prepend(value);
            return;
        }
        // check if the given node is tail
        if (node.next === null) {
            this.append(value);
            return;
        }
        const newNode = new LinkedListNode(value);
        newNode.value = value;
        newNode.next = node.next;
        node.next = newNode;
        this.length++;
        return this;
    }

    find(value: T, callback?: (value) => boolean): LinkedListNode<T> {
        if (!this.head) {
            return null;
        }
        let current = this.head;
        while (current) {
            if (callback && callback(current)) {
                return current;
            }
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return current;
    }

    delete(value: T): LinkedList<T> {
        if (!this.head) {
            return null;
        }
        console.log('afsdasdf==========',  value)

        let current = this.head;
        let previous: LinkedListNode<T> = null;

        while (current !== null) {
            if (current.value === value) {
                if (!previous) {
                    // value to be found is the head 
                    if (this.head === this.tail) {
                        this.tail = this.tail.next;
                    }
                    this.head = this.head.next;

                } else {
                    previous.next = current.next;
                }
                break;
            } else {
                previous = current;
                current = current.next;
            }
        }

        this.length--;
        return this;
    }

    reverse(): void {
        let current = this.head;
        let previous = null;
        let next = null;

        while (current) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.tail = this.head;
        this.head = previous;
        return previous;
    }

    toArray(): T[] {
        const nodes: T[] = [];
        let current = this.head;
        while(current) {
            nodes.push(current.value);
            current = current.next;
        }
        return nodes;
    }

    print(): void {
        console.log("Linked List: ", this.toArray());
        console.log("Length:", this.length);
    }

    toString(): string {
        return this.toArray().join(',');
    }
}


const list = new LinkedList<number>();

list.append(3)
    .append(4)
    .append(5)
    .prepend(44)
    .prepend(7)
    .prepend(79)
    .append(53)
    .insert(list.find(79), 89);

list.print();

list.delete(79);
list.delete(53);
list.delete(44);
list.reverse();
// console.log(list)
list.print();
console.log(list.toString());
