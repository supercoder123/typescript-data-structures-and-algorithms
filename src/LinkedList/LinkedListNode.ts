// cant use the name Node here as it is already used by lib.dom.ts
export default class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T>;
    constructor(val: T, next: LinkedListNode<T> = null) {
        this.value = val;
        this.next = next;
    }
}