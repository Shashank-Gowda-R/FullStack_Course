document.getElementById('hello').className = "para";

var a = document.getElementsByTagName('h2');
for (var i = 0; i < a.length; i++) {
    a[i].className = "heading";
}

function add() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var res = num1 + num2;
    document.getElementById('result').innerHTML += res;
}