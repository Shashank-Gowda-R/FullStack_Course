// var input = parseFloat(prompt("Enter the number"));
// if (input % 2 == 0) {
//     document.write("Number " + input + " is even");
// }
// else {
//     document.write("Number " + input + " is odd");
// }

// (input % 2 == 0) ? document.write("Number " + input + " is even") : document.write("Number " + input + " is odd");

// document.write("<br><br>");

// var num1 = parseFloat(prompt("Enter first number:"));
// var num2 = parseFloat(prompt("Enter second number:"));
// var num3 = parseFloat(prompt("Enter third number:"));

// (num1 > num2 && num1 > num3) ? document.write(num1 + " is greater than " + num2 + " and " + num3) : (num1 < num2 && num2 > num3) ? document.write(num2 + " is greater than " + num1 + " and " + num3) : document.write(num3 + " is greater than " + num2 + " and " + num1);

// document.write("<br><br>");
// var num = parseFloat(prompt("Enter number:"));
// (num == 0)? document.write(num + " is zero" ):(num>0)?document.write(num + " is positive" ):document.write(num + " is negative" );

// document.write("<br><br>");
// (num%3 ==0 && num%5 == 0)? document.write(num+" is divisible by 5 and 3"):(num%3 ==0 )? document.write(num+" is divisible by 3"):(num%5 ==0 )? document.write(num+" is divisible by 5"):document.write(num+" is neither divisible 5 nor by 3");

// document.write("<br><br>");
// var char = prompt("Enter the character:");
// var char1 = char.toLowerCase();
// if(char1==='a'||char1==='e'||char1==='i'||char1==='o'||char1==='u'){
//     document.write("Character is vowel");
// }
// else{
//     document.write("Character is not vowel");
// }

// switch(char1){
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         document.write("Character is vowel");
//         break;
//     default:
//         document.write("Character is not vowel");
// }

// var num1 = parseFloat(prompt("Enter the first Number:"));
// var num2 = parseFloat(prompt("Enter the second Number:"));

// if(num1 == num2){
//     document.write(num1+num2);
// }else{
//     document.write(num1-num2);
// }


// Switch Case

var input = "TV";
switch(input){
    case "TV":
        document.write("TV is turned on");
        break;
    case "AC":
        document.write("AC is turned on");
        break;
    case "PC":
        document.write("PC is turned on");
        break;
    case "LIGHT":
        document.write("LIGHT is turned on");
        break;
    default:
        document.write("You don't have this gadget");
}

var num1 = parseFloat(prompt("Enter the first Number:"));
var num2 = parseFloat(prompt("Enter the second Number:"));

var res = num1==num2;
document.write(res);
switch(res){
    case true:
        document.write(num1+num2);
        break;
    case false:
        document.write(num1-num2);
        break;
    default:
        document.write("The entered values are not numbers");
}