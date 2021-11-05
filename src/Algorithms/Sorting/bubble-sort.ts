export function bubbleSort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        let swapped = false;
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return array;
}

console.log(bubbleSort([4, 3, 6, 7, 8, 2, 9]));