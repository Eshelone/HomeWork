function getDivisors (a) {
    var arr = [];
        for (var i = 1; i <= a; i++) {
        if (typeof a === 'number' && a % i === 0) {
            arr.push(i);
        }  else {
            if (typeof a !== 'number') {
                throw new Error('parameter type is not a Number');
            }
       }
            }
            return arr
};
var result = getDivisors (12);
console.log(result);