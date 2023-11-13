//Exo 1
function myMap(arr, func) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i], i, arr));
    }

    return newArr;
}

//Exo 2
function myFilter(arr, func) {
    var filteredArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            filteredArr.push(arr[i]);
        }
    }
  
    return filteredArr;
}

//Exo 3
function myReduce(arr, func, initialValue) {
    var accumulator = initialValue !== undefined ? initialValue : 0;

    for (var i = 0; i < arr.length; i++) {
        accumulator = func(accumulator, arr[i], i, arr);
    }
    
    return accumulator;
}