function arrayFill(value, length) {
    if (
        typeof value !== 'number'
        && typeof value !== 'string'
        && typeof value !== 'object'
        && !Array.isArray(value)
    ) {
        throw new Error('Please enter correct value type');
    }

    if (typeof length !== 'number') {
        throw new Error('Please enter length int');
    }
    let arr = [];
    for (let i = 0; i < length; i++ ) {
        arr.push(value);
    }

    return arr;
}
console.log(arrayFill({x: 'test'}, 5));