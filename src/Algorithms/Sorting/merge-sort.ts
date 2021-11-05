export function mergeSort(array: number[]): number[] {
    if (array.length <= 1) return array;

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
    return merge(left, right);
}

const merge = (leftArr: number[], rightArr: number[]): number[] => {
    const results = [];
    let i = 0;
    let j = 0;

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            results.push(leftArr[i]);
            i++;
        } else {
            results.push(rightArr[j]);
            j++;
        }
    }

    while (i < leftArr.length) {
        results.push(leftArr[i]);
        i++;
    }
    while (j < rightArr.length) {
        results.push(rightArr[j]);
        j++;
    }
    return results;
}

console.log(mergeSort([4, 3, 6, 7, 7, 8, 2, 9, 2])); // 2 3 4 6 7 7 8 9