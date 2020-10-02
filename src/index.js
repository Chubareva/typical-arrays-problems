exports.min = function min(array) {
    let minVal = 0;
    if (!array || array.length == 0) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (minVal > array[i]) {
                minVal = array[i];
            }
        }
        return minVal;
    }
}

exports.max = function max(array) {
    let maxVal = 0;
    if (!array || array.length == 0) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (maxVal < array[i]) {
                maxVal = array[i];
            }
        }
        return maxVal;
    }
}

exports.avg = function avg(array) {
    let sum = 0;

    if (!array || array.length == 0) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        let numbers = array.length;

        let total = sum / numbers;
        return total;
    }
}
