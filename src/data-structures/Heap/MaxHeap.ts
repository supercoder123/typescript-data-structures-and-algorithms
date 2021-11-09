import { Heap } from "./Heap";

export class MaxHeap<T> extends Heap<T> {
    constructor() {
        super();
    }

    /** This method returns the Max heap value node from the heap */
    extractMax(): T {
        return super.poll();
    }

    /** since this is max heap the comparison will be greater than equal to  */
    heapComparison(first: T, second: T): boolean {
        return this.compare.greaterThanOrEqual(first, second);
    }

}