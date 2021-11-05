import { binarySearch } from '../binary-search';

describe('Binary Search', () => {
    const input = [2,5,6,9,13,15,28,30];
    const oddNumberOfInputs = [2,5,6,9,15,28,30];

    test('Element found at the start', () => {
        expect(binarySearch(input, 2)).toBe(input.indexOf(2));
    });
    test('Element found at the end', () => {
        expect(binarySearch(input, 30)).toBe(input.indexOf(30));
    });
    test('Element found at the middle', () => {
        expect(binarySearch(input, 9)).toBe(input.indexOf(9));
    });
    test('Element found at the middle for odd number of elements', () => {
        expect(binarySearch(oddNumberOfInputs, 9)).toBe(input.indexOf(9));
    });
    test('Element not found', () => {
        expect(binarySearch(input, 3)).toBe(-1);
    });
});

