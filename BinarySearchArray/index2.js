//more practice for binary search 2019

function binarySearch(origArray, target) {
    let search = function(array, target) {
        let middle = array[Math.floor(array.length / 2)];
        if (target === middle) {
            return origArray.indexOf(middle);
        } else if ( target >= middle) {
            return search(array.slice(array.indexOf(middle) + 1), target);
        } else if ( target <= middle) {
            return search(array.slice(0, array.indexOf(middle)), target)
        } else {
            return -1;
        }

    };

    return search(origArray, target);

}

console.log(binarySearch([1,3,5,6,7,9,12,14,25,26], 14));
