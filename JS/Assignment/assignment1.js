console.clear();

// Question 1:
// var str1 = 'Today is';
// var str2 = '      a beautiful day     '
// var str3 = ' In Hawaii.     '
// Result = 'Today is a beautiful day In Hawaii.'
// Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind
// Solution:
var str1 = 'Today is';
var str2 = '      a beautiful day     ';
var str3 = ' In Hawaii.     ';
var str4 = str2.trim();
var str5 = str3.trim();
var Result = str1 + ' ' + str4 + ' ' + str5;
console.log(Result);
console.log("Q1 END =====================")

// Question 2:
// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.
// Function to check the type of character
function check(character) {
    switch (character.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return 'Vowel';
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            return 'Consonant';
        default:
            return 'Non-alphabet';
    }
}

var enteredAlphabet = 'D';
var result = check(enteredAlphabet);
console.log("'" + enteredAlphabet + "' is a " + result);

console.log("Q2 END =====================")

// Question 3:
// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.

function calculate(num1, num2, op) {
    switch (op) {
        case "+":
            console.log("Result of " + num1 + " " + op + " " + num2 + " is " + (num1 + num2));
            break;
        case "-":
            console.log("Result of " + num1 + " " + op + " " + num2 + " is " + (num1 - num2));
            break;
        case "*":
            console.log("Result of " + num1 + " " + op + " " + num2 + " is " + (num1 * num2));
            break;
        case "/":
            if (num2 !== 0) 
                console.log("Result of " + num1 + " " + op + " " + num2 + " is " + (num1 / num2));
            else
                console.log("Invalid Division");
            break;
        default:
            console.log("Invalid Opertaor");
    }
}
var num1 = parseInt(prompt("Enter first Number"));
var op = prompt("Enter operator(+,-,*,/):");
var num2 = parseInt(prompt("Enter second Number"));

calculate(num1,num2,op);

console.log("Q3 END =====================")


// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.

var a = parseFloat(prompt("Enter the value of side of triangle:"));
var b = parseFloat(prompt("Enter the value of side of triangle:"));
var c = parseFloat(prompt("Enter the value of side of triangle:"));
if( a <=0 || b <= 0 || c<=0 ){
    console.log("The Triangle sides must be positive and It can't be zero");
}
else if (a === b && b === c) {
    console.log("The Triangle is Equilateral Triangle");
}
else if (a === b || b === c || a === c) {
    console.log("The Triangle is Isosceles Triangle");
}
else {
    console.log("The Triangle is Scalene Triangle");
}

console.log("Q4 END =====================")


// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354

var unit = parseInt(prompt("Enter electricity units consumed:"));
var amt = 0;
if (unit <= 50) {
    amt = unit * 0.5;
}
else if (unit <= 150) {
    amt = 50 * 0.50 + (unit - 50) * 0.75;
}
else if (unit <= 250) {
    amt = 50 * 0.50 + 100 * 0.75 + (unit - 150) * 1.2;
}
else {
    amt = 50 * 0.50 + 100 * 0.75 + 100 * 1.2 + (unit - 250) * 1.5;
    amt += amt * 0.2;
}

console.log("Total Units: " + unit);
console.log("Result = INR " + amt);

console.log("Q5 END =====================")