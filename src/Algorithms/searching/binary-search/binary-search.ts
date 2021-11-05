// O(logN) worst case
// O(1) best case
export function binarySearch(array: number[], key: number): number {
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (start <= end) {
        if (array[middle] === key) {
            return middle;
        }
        if (key < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return -1;
}