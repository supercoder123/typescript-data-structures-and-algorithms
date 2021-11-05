// cant use the name Node here as it is already used by lib.dom.ts
export default class LinkedListNode<T> {
    // value: T;
    // next: LinkedListNode<T>;
    constructor(public value: T, public next: LinkedListNode<T> = null) {
        /* No need to manually assign the value to the member
         variable if access modifier is used in constructor */
        // this.value = value;
        // this.next = next;
    }
}