// JS is a weakly typed language
var box1 = "Hello";
var box2 = "How are you?";
var box3 = 6361296303;

document.write(box1 + "<br>");
document.write(box2);
document.write(box3);
document.write(box2 + "<br>");
document.write(box3);

document.write("<br><br>")
var stdName = "Jhon";
var age = 21;
document.write("My name is " + stdName + " and age is " + age); // String concatenation

function demoFunc(userName) {
    document.write("<br> Hello " + userName);
}

demoFunc("Jhon");
demoFunc("Tom");
demoFunc("Alex");

function stdDetails(userName, userAge) {
    document.write("<br> Hello " + userName + " you are " + userAge + " years old.");
}
stdDetails("Jhon", 20);
stdDetails("Tom", 15);
stdDetails("Alex", 26);

// function input(){
//     var a =prompt("Enter your mail ID:");
//     return a;
// }

// var b = input();
// var c = input();
// var d = input();
// var e = input();
// var f = input();

// document.write("The entered Mail ID are: <br>"+b+"<br>"+c+"<br>"+d+"<br>"+e+"<br>"+f+"<br>")


// function addition(a,b,c) {
//     var res = a+b+c;
//     document.write("The addition of numbers "+a+" "+b+" "+c+" is"+res);
// }

// var a = prompt("Enter 1st number");
// var b = prompt("Enter 2nd number");
// var c = prompt("Enter 3rd number");

// addition(a,b,c);

var str1 = "Hello JavaScript";
document.write("<br>"+str1[12]+str1[13]+str1[14]+str1[15]);

var result = str1.slice(6,10);
document.write(result)