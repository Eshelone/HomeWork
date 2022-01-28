const arr = [12, 5, 8, 1, 4];
function someFunc (value) {
    return value >= 10;
}
function mySome (arr, someFunc) {
    if (!Array.isArray(arr)) {
        throw new Error(`is not array`);
    }

    if (typeof someFunc !== 'function') {
        throw new Error(`is not a function`);
    }

    for (let i = 0; i < arr.length; i++) {
        if (someFunc(arr[i])) {
            return true;
        }
    }

    return false;
};

console.log(mySome(arr, someFunc));