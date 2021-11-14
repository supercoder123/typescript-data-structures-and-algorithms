import { Comparator } from "../../Utils/Comparator";
import { MaxHeap } from "../Heap/MaxHeap";

/**
 * Priority Queue implementation using Max Heap
 * 
 * |Peek |Poll |Add |Remove|
 * |-----|-----|-----|-----|
 * |O(1) |O(log(n)) |O(log(n)) |O(log(n))|
 */
export class PriorityQueue<T> extends MaxHeap<T> {
    public priorities;
    constructor() {
        super();
        this.priorities = new Map();
        this.compare = new Comparator(this.comparePriority.bind(this))
    }

    enqueue(item: T, priority: number) {
        this.priorities.set(item, priority);
        super.insert(item);
        return this;
    }

    comparePriority(a: T, b: T) {
        if (this.priorities.get(a) === this.priorities.get(b)) {
            return 0
        }
        return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1;
    }

    remove(item: T) {
        super.delete(item);
        this.priorities.delete(item);
        return this;
    }

    dequeue(): T {
        this.priorities.delete(super.peek());
        return super.extractMax();
    }
}