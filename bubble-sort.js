//It is a simple sorting algorithm that repeatedly iterates through the list to be sorted, compares each element to adjacent elements, and swaps them if necessary. The algorithm continues this process until no swaps are necessary, indicating that the list is sorted.

function bubbleSort(arr){
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}