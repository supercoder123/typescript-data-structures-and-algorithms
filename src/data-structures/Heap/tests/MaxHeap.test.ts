import { MaxHeap } from "../MaxHeap";

describe('MinHeap', () => {
    test('should initialize min heap', () => {
        const maxHeap = new MaxHeap();
        expect(maxHeap).toBeDefined();
        expect(maxHeap.peek()).toBeNull();
        expect(maxHeap.isEmpty()).toBe(true);
    });

    test('should insert values', () => {
        const maxHeap = new MaxHeap();
        maxHeap.insert(3);
        maxHeap.insert(9);
        maxHeap.insert(2);
        maxHeap.insert(1);
        maxHeap.insert(4);
        maxHeap.insert(5);
        expect(maxHeap.peek()).toBe(9);
        expect(maxHeap.extractMax()).toBe(9);
        expect(maxHeap.extractMax()).toBe(5);

    });

    // test('basic test', () => {
    //     const minHeap = new MinHeap();
    //     minHeap.insert(3);
    //     minHeap.insert(9);
    //     minHeap.insert(2);
    //     minHeap.insert(1);
    //     minHeap.insert(4);
    //     minHeap.insert(5);
    //     console.log(minHeap.toString())
    //     minHeap.delete(9);
    //     console.log(minHeap.toString())


    // })

})