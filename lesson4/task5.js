const arr = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
const myReduce = (arr, reducer, initValue) => {
    if (!Array.isArray(arr)) {
        throw new Error(`is not array`);
    }

    if (typeof reducer !== 'function') {
        throw new Error(`is not a function`);
    }
    if (typeof initValue !== 'number' && typeof initValue !== 'string') {
        throw new Error('is not number and not string');
    }

    let result = initValue;

    for (let i = 0; i < arr.length; i++) {
        result = reducer(result, arr[i]);
    }

    return result;
};

console.log(myReduce(arr, reducer, 5));