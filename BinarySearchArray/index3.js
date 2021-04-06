// 2021 attempt
let myArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 13, 23, 45, 100, 120, 121, 140, 230];
let offset = 0;

let binarySearch = (val, myArr, offset) => {
    let middleIndex = Math.floor(myArr.length / 2);
    if (val < myArr[middleIndex]) {
        return binarySearch(val, myArr.slice(0, middleIndex), offset)
    } else if (val > myArr[middleIndex]) {
        return binarySearch(val, myArr.slice(middleIndex + 1), offset + middleIndex + 1)
    } else {
        return middleIndex + offset;
    }
}

console.log(binarySearch(120, myArr2, offset))