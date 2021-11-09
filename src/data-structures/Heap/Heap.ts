/**
 * A binary heap is a binary tree which also satisfies two additional constraints:
- **Shape property**: a binary heap is a complete binary tree; that is, all levels of the tree, except
possibly the last one (deepest) are completely filled, and, if the last level of the tree is not
complete, the nodes of that level are filled from left to right.
- **Heap property**: if P is a parent node of child node C, then the value of P is either greater than
or equal to (in a max heap) or less than or equal to (in a min heap) the key of C.
|Peek | Poll | Add | Remove|
|-----|-----|-----|-----|
| O(1) | O(log(n)) | O(log(n)) | O(log(n)) |

If the tree root is at index 0, with valid indices 0 through n − 1, then each element
a at index i has:
- children at indices 2i + 1 and 2i + 2,
- its parent at index floor((i − 1) / 2)
*/

import { Comparator } from "../../Utils/Comparator";

export class Heap<T> {
    /** array representation of heap */
    protected heap: T[] = [];
    /** will use this to make comparisons */
    protected compare: Comparator<T>;

    constructor() {
        this.compare = new Comparator<T>();
    }

    getLeftChildIndex(parentIndex: number): number {
        return (2 * parentIndex + 1);
    }

    getRightChildIndex(parentIndex: number): number {
        return (2 * parentIndex + 2);
    }

    getParentIndex(childIndex: number) {
        return Math.floor((childIndex - 1) / 2);
    }

    hasParent(childIndex: number) {
        return this.getParentIndex(childIndex) >= 0;
    }

    hasLeftChild(parentIndex: number) {
        return this.getLeftChildIndex(parentIndex) <= this.heap.length;
    }

    hasRightChild(parentIndex: number) {
        return this.getRightChildIndex(parentIndex) <= this.heap.length;
    }

    leftChild(parentIndex: number) {
        return this.heap[this.getLeftChildIndex(parentIndex)];
    }

    rightChild(parentIndex: number) {
        return this.heap[this.getRightChildIndex(parentIndex)];
    }

    parent(childIndex: number) {
        return this.heap[this.getParentIndex(childIndex)];
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    swap(idxA: number, idxB: number): void {
        [this.heap[idxA], this.heap[idxB]] = [this.heap[idxB], this.heap[idxA]];
    }

    toString(): string {
        return this.heap.toString();
    }

    /** 
     * This method returns the root of the heap without removing it, useful to check 
     * minimum (Min heap) or maximum (Max heap) value of the heap
     */
    peek(): T {
        if (this.heap.length === 0) {
            return null;
        }
        // first element of the heap ie: head / root
        return this.heap[0];
    }

    /**This helper method finds the positions of the elements in a heap by the value. 
     * It is possible that heap will have duplicate values and thus this method returns an array of positions instead of just one
    number (the position of the element we’re searching for). */
    find(item: T): number[] {
        const itemPositions = [];
        for (let index = 0; index < this.heap.length; index++) {
            if (item === this.heap[index]) {
                itemPositions.push(index);
            }
        }
        return itemPositions;
    }

    /** this method returns the root element of the heap*/
    protected poll() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const item = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return item;
    }

    insert(item: T): void {
        this.heap.push(item);
        this.heapifyUp();
    }

    /** Also known as bubble up, this method, maintains heap property after adding a node to heap */
    heapifyUp(customStartIndex = this.heap.length - 1): void {
        let currentIndex = customStartIndex;
        // heapcomparison will be <= for min heap and >= for max heap
        // while loop should run for comparisons which do not satisfy the condition
        while (this.hasParent(currentIndex) && !this.heapComparison(this.parent(currentIndex), this.heap[currentIndex])) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    /** This method makes sure that heap-property of the heap is satisfied after the root of the heap has
been polled out. */
    heapifyDown(customStartIndex = 0): void {
        let currentIndex = customStartIndex;
        let nextIndex = null;

        while (this.hasLeftChild(currentIndex)) {
            if (this.hasRightChild(currentIndex) && this.heapComparison(this.rightChild(currentIndex), this.leftChild(currentIndex))) {
                nextIndex = this.getRightChildIndex(currentIndex);
            } else {
                nextIndex = this.getLeftChildIndex(currentIndex)
            }

            /**no need to check further as min heap property is satisfied */
            if (this.heapComparison(this.heap[currentIndex], this.heap[nextIndex])) {
                break;
            }

            this.swap(currentIndex, nextIndex);
            currentIndex = nextIndex;
        }
    }

    /** This method removes a node from the heap and heapifies it again */
    delete(item: T): this {
        const itemPositions = this.find(item);

        for (let index = 0; index < itemPositions.length; index++) {
            // We need to find item index to remove each time after removal since
            // indices are being changed after each heapify process.
            const indexToRemove = this.find(item).pop();

            if (indexToRemove === this.heap.length - 1) {
                this.heap.pop();
            } else {
                this.heap[indexToRemove] = this.heap.pop();
                const parent = this.parent(indexToRemove);

                /** If there is no parent or parent is in correct order with the node 
                 * we're going to delete then heapify down. Otherwise heapify up. */
                if (this.hasLeftChild(indexToRemove) && (!parent || this.heapComparison(parent, this.heap[indexToRemove]))) {
                    this.heapifyDown(indexToRemove);
                } else {
                    this.heapifyUp(indexToRemove);
                }
            }
        }

        return this;
    }

    /** heapComparison will be <= for min heap and >= for max heap */
    heapComparison(first: T, second: T): boolean {
        throw new Error('Implement this in child class')
    }
}