// cant use the name Node here as it is already used by lib.dom.ts
export class LinkedListNode<T> {
    constructor(public value: T, public next: LinkedListNode<T> = null) {
    }
}