// notify(name);
function notify(name){
    alert("Hello "+name+" you have a products in your cart");
}
var name = "Shashank";


function mulFunc(a,b,c){
    var ans = a*b*c;
    document.write(ans);
}

// mulFunc(5,5,5);
// document.write("<br>");
// mulFunc(6,6,6);

// Arrow function

// Single line
var hello = () => document.write("Hello");

var abc = () =>{
    document.write("This is multiple line arrow function");
}

hello();

var mult = (a,b,c)=>{
    var ans = a*b*c;
    console.log(ans);
}

mult(6,6,6);

var greet = () =>{
    alert("Hello User :)");
}

// Annonmys Function

var btn = document.getElementById("button2");
console.log(btn);

// btn.addEventListener("click",greet); we can do by this method also

btn.addEventListener("click",function(){
    alert("Hello User :)");
})