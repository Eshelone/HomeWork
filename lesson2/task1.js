function f(a) {
    let result
if (typeof a === 'number') {
    result =  Math.pow(a, 3);
    }   else    {
        throw new Error('parameter type is not a Number');
    }
return result;
};
var result = f(2);
console.log(result);