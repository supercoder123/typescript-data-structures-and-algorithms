import { PriorityQueue } from "../PriorityQueue"

describe('PriorityQueue', () => {
    test('basic tests', () => {
        const queue = new PriorityQueue();
        queue.enqueue('PS4', 4);
        queue.enqueue('PS5', 5);
        queue.enqueue('Switch', 2);
        queue.enqueue('XBOX', 3);
        queue.enqueue('PC', 1);
        queue.enqueue('GBA', 6);

        queue.remove('GBA');

        expect(queue.dequeue()).toBe('PS5');
        expect(queue.dequeue()).toBe('PS4');
        expect(queue.dequeue()).toBe('XBOX');
        expect(queue.dequeue()).toBe('Switch');
        expect(queue.dequeue()).toBe('PC');
    })
})
