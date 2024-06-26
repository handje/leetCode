/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let count = 0;
    while (num > 0) {
        if (num === 0) { return count }
        if (num % 2) { num -= 1 }
        else { num /= 2 }
        count++;
    }
    return count
};