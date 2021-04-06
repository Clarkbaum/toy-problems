//2021 attempt
let myArr = [1, 34, 3, 4, 90, 77, 7, 8, 13, 55, 45, 1, 120, 8, 4, 3];

let bubbleSort = (arr) => {
    let finished = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let junk = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = junk;
            finished = false;
        }
    }
    if (!finished) {
        return bubbleSort(arr);
    } else {
        return arr;
    }
}

console.log(bubbleSort(myArr))