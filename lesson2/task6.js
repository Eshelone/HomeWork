function isEven (a) {
    let result
    if ( typeof a === 'number' && a % 2 === 0) {
        result =  true;
    }   else    {
        if ( typeof a === 'number' && !a % 2 === 0 ) {
            result =  false;
        }   else {
            throw new Error('parameter type is not a Number');
        }
    }
    return result;
};
var result = isEven (12);
console.log(result);