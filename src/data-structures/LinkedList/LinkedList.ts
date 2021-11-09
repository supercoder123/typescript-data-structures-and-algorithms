import { IList } from '../../types/List';
import { LinkedListNode } from './LinkedListNode';

/**
 * Linked List
 */
export class LinkedList<T> implements IList<T> {
    head: LinkedListNode<T>;
    tail: LinkedListNode<T>;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

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
            return this;
        }
        // check if the given node is tail
        if (node.next === null) {
            this.append(value);
            return this;
        }
        const newNode = new LinkedListNode(value);
        newNode.value = value;
        newNode.next = node.next;
        node.next = newNode;
        this.length++;
        return this;
    }

    find(value: unknown, callback?: (value: unknown) => boolean): LinkedListNode<T> {
        if (!this.head) {
            return null;
        }
        let current = this.head;
        while (current) {
            if (callback && callback(current.value)) {
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

    reverse(): LinkedListNode<T> {
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
        while (current) {
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
