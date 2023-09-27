// alert(123456);

// Data Type

// String Datatype

alert('Hello We are learning "JavaScript"');
alert('Hello We are learning \'JavaScript\'');

console.log("Hello");
console.log(1234);

document.write("I have chnaged the content");

var a = prompt("Enter your name:");
document.getElementById("greet").innerHTML = "Hello " + a;

// User defined Functions

function dummyFunc(){
    document.write("HEllo who are you? <br>");
}

dummyFunc();
dummyFunc();
dummyFunc();

function studentName(){
    var a = prompt("Enter your name:");
    return a;
}

var b = studentName();
var c = studentName();
var d = studentName();

document.write("Student Names are: "+b+" "+c+" "+d);