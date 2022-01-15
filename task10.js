var array = [6,5,4,3,2,1];
for (var j = 0; j < array.length; j++) {
    for (var i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            var tmp = array[i - 1];
            array[i - 1] = array[i];
            array[i] = tmp;
        }
    }

}

console.log(array);