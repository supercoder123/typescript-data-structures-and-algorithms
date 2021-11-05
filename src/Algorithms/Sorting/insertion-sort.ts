export function insertionSort(array: number[]) {
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        const key = array[i];
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}

console.log(insertionSort([4, 3, 6, 7, 8, 2, 9])); // 2 3 4 6 7 8 9