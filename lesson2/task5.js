function isPositiv (a) {
    let result
    if ( typeof a === 'number' && a > 0 ) {
        result =  true;
    }   else    {
        if ( typeof a === 'number' && a < 0 ) {
            result =  false;
        }   else {
            throw new Error('parameter type is not a Number');
        }
    }
    return result;
};
var arr = [1, 2, -4, 3, -9, -1, 7];
var arr1 = [];
for (var i = 0; i < arr.length; i++) {
    var result = isPositiv(arr[i]);
        if (result === true) {
        arr1.push(arr[i]);
    }
}
console.log(arr1);