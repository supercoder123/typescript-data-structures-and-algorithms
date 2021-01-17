// interface ListUtils<T, N> {
//     find(value: T): N;
// }

export interface List<T>{
    append(value: T): void;
    prepend(value: T): void;
    // insert(nodeValue: T, value: T): void;
    // find(value: T): LinkedListNode<T>;
    print?: () => void;
}