function f(a,b,c) {
    let result
    if ( typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        result =  (a - b) / c;
    }   else    {
        throw new Error('parameter type is not a Number');
    }
    return result;
};
var result = f(9,3,2);
console.log(result);