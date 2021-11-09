import { LinkedListNode } from "../data-structures/LinkedList/LinkedListNode";

export interface IList<T> {
    append(value: T): void;
    prepend(value: T): void;
    insert(nodeValue: LinkedListNode<T>, value: T): void;
    find(value: T): LinkedListNodeOrNull<T>;
    delete(value: T): void;
    print?: () => void;
}

export type LinkedListNodeOrNull<T> = Nullable<LinkedListNode<T>>;