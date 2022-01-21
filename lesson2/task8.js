function f(a) {
    if (!Array.isArray(a)) {
        throw new Error('parameter type should be an array');
        return;
    }
    if (a.length === 0) {
        throw new Error('parameter can\'t be an empty');
        return;
    }
    console.log(a[0]);
    a.splice(0, 1);
    if (a.length > 0) {
        f(a);
    }
}
f([1,2,3]);