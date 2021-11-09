import { Heap } from "../Heap";

describe('Heap', () => {
    test('should throw error if value inserted directly into heap', () => {
        const initiateTest = () => {
            const heap = new Heap();
            heap.insert(3);
            heap.insert(3)
        }

        expect(initiateTest).toThrowError();
    })
});