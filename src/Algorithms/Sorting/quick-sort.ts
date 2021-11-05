export function quickSort(array: number[], low = 0, high = array.length - 1) {
    if (low < high) {
        const p = partition(array, low, high);
        quickSort(array, low, p - 1);
        quickSort(array, p + 1, high);
    }
    return array;
}

function swap(array: number[], i: number, j: number) {
    [array[i], array[j]] = [array[j], array[i]];
}

function partition(array: number[], low: number, high: number): number {
    // using last element as pivot (can use first or middle as well)
    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, high, i + 1)
    return i + 1;
}

console.log(quickSort([4, 3, 6, 7, 8, 2, 9]));