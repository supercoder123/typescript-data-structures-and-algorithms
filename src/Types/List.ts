import LinkedListNode from "../DataStructures/LinkedList/LinkedListNode";

export interface List<T>{
    append(value: T): void;
    prepend(value: T): void;
    insert(nodeValue: LinkedListNode<T>, value: T): void;
    find(value: T): LinkedListNode<T>;
    delete(value: T): void;
    print?: () => void;
}