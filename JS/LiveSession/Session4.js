var m = 17;
var n = 12;
var k = m == n;
var k = m > n;
var k = m < n;
var k = m >= n;
var k = m <= n;
var k = m != n;
var k = m === n;
document.write(k + "<br>");

var a = 10;
var b = 20;
document.write(a + b + "<br>");
document.write(a - b + "<br>");
document.write(a * b + "<br>");

var x = 10;
var y = 2;
document.write(x % y);

var z = 10;
z++;
document.write(z + "<br>");

z--;
document.write(z + "<br>");

++z;
document.write(z + "<br>");
--z;
document.write(z + "<br>");

// coercion

// Implicit Coercion : String and number addition
var data1 = "Hello"
var data2 = 200;
var ans1 = data1 + data2;
document.write(typeof (ans1));

document.write("15" * 2); //Implicit coercion

console.log("15" * 2);
console.log(20 / "2");
console.log("10" - 5 - 2);

// Explicit Coercion : Datatype conversion is done in code using inbuilt functions 

var k = 10 + undefined;
document.write("<br>" + k);  //NaN not an number

var l = 10 + 20 + null;
document.write("<br>" + l); //null is equal to 0

document.write("<br>");
document.write("hello" + null); //ouput : Hellonull

document.write("<br>");
document.write(20 + 2 * null); //output: 20

// true -> 1
// false -> 0

var k = true + true;
document.write(k + "<br>"); //output 2

var k = true - false;
document.write(k + "<br>"); //output 1

var k = true + "10";
document.write(k + "<br>"); //output true10

var k = "true" + "true";
document.write(k + "<br>"); //output truetrue

var k = true - "10";
document.write(k + "<br>"); //output -9

var k = false + false;
document.write(k+"<br>"); //output 0 dtype is num

// Explicit Conversion
num1 = Number(prompt("enter the first number: "));
num2 = Number(prompt("enter the second number: "));
var ans = num1+num2;
document.write(ans);