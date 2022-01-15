var arr = [1,2,3,4,5,6];
for (var j = 0; j < arr.length; j++) {
    for (var i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            var tmp = arr[i - 1];
            arr[i - 1] = arr[i];
            arr[i] = tmp;
        }
    }

}

console.log(arr);