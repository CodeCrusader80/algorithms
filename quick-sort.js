//This is an efficient and often used in practice sorting algorithm, developed by Tony Hoare in 1960. It uses a "divide and conquer" strategy to sort an array.
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    return quickSort(left).concat(pivot, quickSort(right));
}