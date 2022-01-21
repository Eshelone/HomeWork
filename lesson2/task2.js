function f() {
    let sum = 0;
    for (let i = 0, length = arguments.length; i < length; i++) {
        if (typeof arguments[i] === 'number') {
            sum += arguments[i];
        }   else {
            throw new Error('all parameters type should be a Number');
        }
    }
    console.log(sum);
}
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number