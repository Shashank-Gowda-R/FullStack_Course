// function MissingNumber(arr, size) {
//     var missing;
//     if (size == arr.length) {
//         console.log('No missing Numbers');
//     }
//     else {
//         arr.sort((a, b) => a - b); //sorting array with comparision
//         console.log(arr);
//         for (var i = 0; i < size; i++) {
//             if ((i + 1) != arr[i]) {
//                 missing = (i + 1);
//                 break;
//             }
//         }
//     }
//     return missing;
// }

// var N = 10;
// var A = [6, 1, 2, 8, 3, 4, 7, 10, 5];
// var res = MissingNumber(A, N);
// console.log(res);

function findTwoElement(arr, n) {
    for (var i = 0; i < n; i++) {
        if ((i + 1) != arr[i]) {
            var mis = (i + 1);
            break;
        }
        for (let j = i + 1; j < n; j++) {
            if (arr[i] == arr[j]) {
                var twice= arr[i];
            }
        }
    }
    var sol = [twice,mis];
    return sol;
}

var N = 2;
var Arr = [1,3,3];

console.log(findTwoElement(Arr,N));