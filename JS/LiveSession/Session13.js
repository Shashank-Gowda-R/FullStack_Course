// var numbers = [
//     {
//         "data1": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     },
//     {
//         "data2": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     },
//     {
//         "data3": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     },
//     {
//         "strings": ['a', 'b', 'c', 'd', 'e', 'f']
//     }
// ]

// for (var i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
//     for (var j in numbers[i]) {
//         console.log(numbers[i][j])
//     }
// }

// // from data 1 print the square of even number

// for (var i = 0; i < 1; i++) {
//     // console.log(numbers[i])
//     for (var j in numbers[i]) {
//         for (var k = 0; k < numbers[i][j].length; k++) {
//             if (numbers[i][j][k] % 2 == 0) {
//                 console.log(numbers[i][j][k] ** 2)
//             }
//         }
//     }
// }

// // from data 2 print the cube of odd number
// for (var i = 0; i < numbers.length; i++) {
//     for (var j in numbers[i]) {
//         if (j == 'data2') {
//             for (var k = 0; k < numbers[i][j].length; k++) {
//                 if (numbers[i][j][k] % 2 != 0) {
//                     console.log(numbers[i][j][k] ** 3)
//                 }
//             }
//         }
//     }
// }

// // find the product of all elements in data3
// for (var i = 0; i < numbers.length; i++) {
//     for (j in numbers[i]) {
//         if (j == 'data3') {
//             var res = 1;
//             for (var k = 0; k < numbers[i][j].length; k++) {
//                 res *= numbers[i][j][k];
//             }
//             console.log(res);
//         }
//     }
// }

// // From the dataset print the string which is not an vowel
// for (var i = 0; i < numbers.length; i++) {
//     for (var j in numbers[i]) {
//         if (j == 'strings') {
//             for (var k = 0; k < numbers[i][j].length; k++) {
//                 var x = numbers[i][j][k].toLowerCase();
//                 if (x != 'a' && x != 'e' && x != 'i' && x != 'o' && x != 'u') {
//                     console.log(numbers[i][j][k]);
//                 }
//             }
//         }
//     }
// }


var userInfo = {
    "users": [
        {
            id: 1,
            email: "george.bluth@reqres.in",
            firstName: "George",
            lastName: "Bluth",
            avatar: "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            id: 2,
            email: "janet.weaver@reqres.in",
            firstName: "Janet",
            lastName: "Weaver",
            avatar: "https://reqres.in/img/faces/2-image.jpg"
        },
        {
            id: 3,
            email: "emma.wong@reqres.in",
            firstName: "Emma",
            lastName: "Wong",
            avatar: "https://reqres.in/img/faces/3-image.jpg"
        },
        {
            id: 4,
            email: "eve.holt@reqres.in",
            firstName: "Eve",
            lastName: "Holt",
            avatar: "https://reqres.in/img/faces/4-image.jpg"
        },
        {
            id: 5,
            email: "charles.morris@reqres.in",
            firstName: "Charles",
            lastName: "Morris",
            avatar: "https://reqres.in/img/faces/5-image.jpg"
        },
        {
            id: 6,
            email: "tracey.ramos@reqres.in",
            firstName: "Tracey",
            lastName: "Ramos",
            avatar: "https://reqres.in/img/faces/6-image.jpg"
        },
        {
            id: 7,
            email: "demo.ramos@reqres.in",
            firstName: "demo",
            lastName: "Ramos",
            avatar: "https://reqres.in/img/faces/6-image.jpg"
        }
    ],
}

// for (var i in userInfo) {
//     // console.log(userInfo[i])
//     for (var j = 0; j < userInfo[i].length; j++) {
//         // console.log(userInfo[i][j]) 
//         for(var k in userInfo[i][j]){
//             // console.log(userInfo[i][j][k])
//             var iTag = document.createElement('i');
//             iTag.innerHTML = userInfo[i][j][k].id;
//             var hTag = 
//         }
//     }
// }

for (var i in userInfo) {
    // console.log(userInfo[i])
    for (var j = 0; j < userInfo[i].length; j++) {
        // console.log(userInfo[i][j]) 
        var divTag = document.createElement('div');
        divTag.className = "boxStyle";
        // console.log(divTag);
        for (var k in userInfo[i][j]) {
            // divTag.innerHTML += userInfo[i][j][k]+"<br>";
            // console.log(userInfo[i][j][k])
            if (k == "avatar") {
                var imgTag = document.createElement('img');
                imgTag.src = userInfo[i][j][k];
                divTag.appendChild(imgTag);
            }
        }
        for (var k in userInfo[i][j]) {
            if (k == "id" || k == "email" || k == "firstName" || k == "lastName") {
                var pTag = document.createElement('p');
                pTag.innerHTML += "<b>" + k + "</b>" + " : " + userInfo[i][j][k];
                // console.log(pTag);
                divTag.appendChild(pTag);
            }
        }
        document.getElementById('userData').appendChild(divTag);
    }
}