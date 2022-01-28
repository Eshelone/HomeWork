const arr = ['e', 's', 'r', 'e', 'v', 'e', 'r'];
function myReverse (arr)  {
    if (arr.length === 0) {
        throw new Error("Array is empty!");
    }
    if (!Array.isArray(arr)) {
        throw new Error(`is not array`);
    }

    let result = [];

    for (let i = arr.length-1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
};

console.log(myReverse(arr));