var arr = ['abcd', 'abcde', 'ab', 'abc'];
function getLength(element) {
    return element.length;
}
console.log(arr.map(getLength));