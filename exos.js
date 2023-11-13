//Exo 1
function myMap(arr, func) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i], i, arr));
    }

    return newArr;
}