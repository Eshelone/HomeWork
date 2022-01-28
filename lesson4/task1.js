const arr = [5, 1,2,3];
function myForEach (item) {
    console.log(item);
}
const test = (arr, myForEach) => {
    if (!Array.isArray(arr)) {
        throw new Error(`is not array`);
    }

    if (typeof myForEach !== 'function') {
        throw new Error(`is not a function`);
    }

    for (let i = 0; i < arr.length; i++) {
        myForEach(arr[i]);
    };

}

test(arr, myForEach);