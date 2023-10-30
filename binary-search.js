//This is an algorithm implementation of binary search, an efficient search algorithm for finding a target element in a sorted list.

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = arr[mid];

        if (guess === target) return mid;
        if (guess > target) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}