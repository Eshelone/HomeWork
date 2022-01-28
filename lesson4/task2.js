const arr = [5, 1,2,3, 11, 56, 10];
function someFunc (value) {
    return value >= 10;
}
function myFilter (arr, someFunc)  {
    if (!Array.isArray(arr)) {
        throw new Error(`is not array`);
    }

    if (typeof someFunc !== 'function') {
        throw new Error(`is not a function`);
    }
    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (someFunc(arr[i])) {
            newArray.push(arr[i]);
        }
    }

    return newArray;
};

console.log(myFilter(arr, someFunc));