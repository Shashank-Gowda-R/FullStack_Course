// Creating an array
// First way 
var stdName = Array("Jhon", "Tom", "Alex");
console.log(stdName);

// Second way
var age = [12, 18, 16];
console.log(age);

document.write(stdName[1] + ":" + age[1]);

// Js array can have heterogeneous values 
var z = ['dummy', 251516, true];
console.log(z);

// Nested Array
var m = ["demo1", "demo2", [123, 456, 789, "demo3"], "demo4"];
console.log(m[2][3]);
// Printing the o value from the demo3
console.log(m[2][3][3]);

//       0   1  2  3,0
var y = [10, 20, 30, ["a", "b", "c", [40, 50, ["JavaScript", "Python"]], "d"], 60, 70]

// 60
// c
// 30
// 50
// JavaScript
// Java
// Python 
// yth

console.log(y[4]);
console.log(y[3][2]);
console.log(y[2]);
console.log(y[3][3][1]);
console.log(y[3][3][2][0]);
str1 = y[3][3][2][0];
str2 = y[3][3][2][1];
str1 = str1.substring(0, 4);
console.log(y[3][3][2][1]);
str2 = str2.substring(1, 4);
console.log(str1);
console.log(str2);
// Other method to print Java and yth
for (var i = 0; i < 4; i++) {
    console.log(y[3][3][2][0][i]);
}
for (var i = 1; i < 4; i++) {
    console.log(y[3][3][2][1][i]);
}

document.write("<br>");
for (var i = 0; i < 5; i++) {
    document.write("Shashank" + (i + 1) + "<br>");
}

for (var i = 4; i >= 0; i--) {
    document.write("Shashank" + (5 - i) + "<br>");
}

// Print all the even number

for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// from 0 to user input 
// num = Number(prompt("Enter the number to print odd numbers:"))
// for (var i = 1; i <= num; i++) {
//     if (i%2 != 0) {
//         console.log(i);
//     }
// }

// from 1 to 50 multiply all number by 10
for (var i = 1; i <= 50; i++) {
    console.log(i * 10);
}

var str5 = "Hello JavaScript"
for (i = 0; i < str5.length; i++) {
    console.log(str5[i]);
}

document.write("<br>");
// var userName = prompt("Enter your name:");
// userName = userName.toLowerCase();
// document.write("Printing the vowels from the user name:<br>");
// var count = 0;
// for(var i=0;i<userName.length;i++){
//     if(userName[i] == 'a' || userName[i] == 'e' || userName[i] =='i' || userName[i] == 'o' || userName[i] == 'u'){
//         document.write(userName[i]+"<br>");
//         count++;
//     }
// }
// document.write("Number of Vowels in "+userName+" is "+count);

var arr2 = [11, 12, 13, 14, 15, 16, 17, 18];
for (var i = 0; i < arr2.length; i++) {
    document.write(arr2[i] + "<br>");
}

var arr3 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
for (var i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 == 0) {
        document.write(arr3[i] * arr3[i] + "<br>");
    }
    else {
        document.write(arr3[i] * arr3[i] * arr3[i] + "<br>");
    }
}