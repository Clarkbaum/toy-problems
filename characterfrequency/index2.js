let charFrequency = (str) => {
    let output = [];
    for (char of str) {
        if (output.findIndex(element => element[0] === char) === -1) {
            output.push([char, 1]);
        } else {
            for (key in output) {
                if (char === output[key][0]) {
                    output[key][1]++;
                }
            }
        }
    }

    return output.sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1]
        } else {
            return a < b ? -1 : 1;
        }
    });
}

console.log(charFrequency('hello world. i love coding'))