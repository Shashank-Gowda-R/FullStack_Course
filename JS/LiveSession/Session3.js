var str1 = "Hello JavaScript";
var res1 = str1.slice(0,6); //Hello
var res2 = str1.slice(-1); //t
var res3 = str1.slice(-5,-1); //crip
var res4 = str1.slice(2); //llo JavaScript
var res5 = str1.slice(-5);

// Slice will harm the original string so we have to use substring. It is going to create a copy of the selection.
// But negative indexing won't work in substring. It is a way to fetch the part of the string

var res = str1.substring(0,7);
document.write(str1); //Hello J
document.write("<br><br>");
var str2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugiat totam culpa explicabo obcaecati, dicta iusto voluptatum, aliquid, incidunt sit impedit sequi voluptate molestias. Nisi dolor ab itaque reprehenderit modi."
var res = str2.length;
document.write(res);

document.write("<br><br>");
// to check the datatype of the variable

var a = "String";
var b = 5265598;
var c = true;
document.write(a+"Is a type of"+typeof(a));
document.write(b+"Is a type of"+typeof(b));
document.write(c+"Is a type of"+typeof(c));

document.write("<br><br>");

// Removing the white space

var str3 = " Shashank ";
var str4 = str3.trim();
document.write(str3);
document.write(str4);

// var str5 = prompt("Enter your name:");
// var str6 = str5.trim();
// console.log(str5);
// console.log(str6);

// Replace method
// we can replace only one word at a time 
document.write("<br> Actual String");
var str7 = "A Blue blue Blue bottle is on Blue blue Blue table";
var res6 = str7.replace(/blue/,"green");
document.write("<br>"+str7);
document.write("<br>"+res6);

// Globally replacement
var res7 = str7.replace(/Blue/g,"green");
document.write("<br>"+res7);

//  InSensitive replacement
var res8 = str7.replace(/Blue/i,"green");
document.write("<br>"+res8);

// Both Global and Insensitive conversion
var res9 = str7.replace(/Blue/gi,"green");
document.write("<br>"+res9);

// Lower case conversion
document.write("<br>");
var str8 = "HELLO";
document.write("<br> To convert the string into lower case "+str8.toLowerCase());

// Upper case conversion
var str9 = "world";
document.write("<br> To convert the string into Upper case "+str9.toUpperCase());

// Concatenation

var str10 = "Hello";
var str12 ="Jhon";
var str11 = "How are you?";
var res10 = str10.concat(" ",str12," ",str11);
console.log(res10);

// Starts with

var str13 = "Hello JavaScript";
var res11 = str13.startsWith("Hell");
var res12 = str13.endsWith("crip");
console.log(res11,res12);

// Searching the string 
// If character i not present -1 will be the output
var res13 = str13.search("a");
console.log(res13);


// indexOf function

var res14 = str7.indexOf("Blue");
var res15 = str7.lastIndexOf("blue");
console.log(res14);
console.log(res15);

var str14 = "A Blue blue Blue bottle is on Blue blue Blue table";
var res14 = str7.indexOf("Blue",12); //It tells ti search the index of blue after 12 index
console.log(res14);
