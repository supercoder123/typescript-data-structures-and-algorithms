import { MinHeap } from "../MinHeap";

describe('MinHeap', () => {
    test('should initialize min heap', () => {
        const minHeap = new MinHeap();
        expect(minHeap).toBeDefined();
        expect(minHeap.peek()).toBeNull();
        expect(minHeap.isEmpty()).toBe(true);
    });

    test('should insert values', () => {
        const minHeap = new MinHeap();
        minHeap.insert(3);
        minHeap.insert(9);
        minHeap.insert(2);
        minHeap.insert(1);
        minHeap.insert(4);
        minHeap.insert(5);
        expect(minHeap.peek()).toBe(1);
        expect(minHeap.extractMin()).toBe(1);
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