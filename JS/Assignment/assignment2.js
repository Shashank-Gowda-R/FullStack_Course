console.clear();


// Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1

var arr = [1, 2, 3, 4, 5, 1, 3];
var pos = [];
function searchArr(ele) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            pos.push(i);
        }
    }
    if (pos.length == 0) {
        return -1;
    }
    else if(pos.length == 1){
        return pos[0];
    }
    else{
        return pos;
    }
}
var ele = Number(prompt("Enter the search Element:"));
var res = searchArr(ele);
console.log(res);

console.log("Q1 END =====================")


// Question 2:
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5

for (let i = 5; i >= 1; i--) {
    let pattern = "";
    let j = i;
    let start = 5;
    while (j) {
        pattern += start;
        j--;
        start--;
    }
    console.log(pattern);
}

console.log("Q2 END =====================")


// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]

var arr1 = [3, 2, 1, 4, 5, 45];
var temp;
for (var i = 0; i < arr1.length; i++) {
    for (var j = i + 1; j < arr1.length; j++) {
        if (arr1[i] > arr1[j]) {
            temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp;
        }
    }
}
console.log(arr1);

console.log("Q3 END =====================")


// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False

var str1 = String(prompt("Enter the string one: "));
var str2 = String(prompt("Enter the string two: "));
var len1 = str1.length;
var len2 = str2.length;
if (len1 == len2) {
    var count = 0;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < str1.length; j++) {
            if (str1[i] === str2[j]) {
                count++;
            }
        }
    }
    if (count == len1) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
else {
    console.log(false);
}

console.log("Q4 END =====================")


// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH

var str = String(prompt("Enter the string to reverse it:"));
var rev = "";
var len = str.length;
for (var i = (len - 1); i >= 0; i--) {
    rev += str[i];
}
console.log(rev);

console.log("Q5 END =====================")