var array = [1,2,3,4,5,6];
for (var j = 0; j < array.length; j++) {
    for (var i = 1; i < array.length; i++) {
        if (array[i - 1] < array[i]) {
            var tmp = array[i - 1];
            array[i - 1] = array[i];
            array[i] = tmp;
        }
    }

}

console.log(array);