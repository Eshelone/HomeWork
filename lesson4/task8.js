const arr = [[[[[]]]]];

var sum = 0;
function sumFunc(element) {
    if (typeof element === 'number') {
        sum += element;
    } else if(Array.isArray(element)) {
        element.map(sumFunc);
    } else {
        throw new Error('Array or int needed');
    }
}
function f(array) {
    if (!Array.isArray(array)) {
        throw new Error('Array needed');
    }
    array.map(sumFunc);
}
f(arr);
console.log(sum);