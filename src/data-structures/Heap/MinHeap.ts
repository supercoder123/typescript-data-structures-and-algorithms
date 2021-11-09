import { Heap } from "./Heap";

export class MinHeap<T> extends Heap<T> {
    constructor() {
        super();
    }

    /** This method returns the Minimum heap value node from the heap */
    extractMin(): T {
        return super.poll();
    }

    /** since this is min heap the comparison will be less than equal to  */
    heapComparison(first: T, second: T): boolean {
        return this.compare.lessThanOrEqual(first, second);
    }

}