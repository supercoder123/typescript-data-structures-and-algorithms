export function quickSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
        let p = partition(array, low, high);
        quickSort(array, low, p - 1);
        quickSort(array, p + 1, high);
    }    
    return array;
}

function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
}

function partition(array, low, high): number {
    // using last element as pivot (can use first or middle as well)
    let pivot = array[high];
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

console.log(quickSort([4,3,6,7,8,2,9]));