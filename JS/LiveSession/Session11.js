function func1() {
    document.getElementById('demo1').style.backgroundColor = "blue";
}

function func2() {
    document.getElementById('demo1').style.backgroundColor = "transparent";
}

function func3() {
    document.getElementById('demo2').style.backgroundImage = "url(../photo/Monkey.jpg)";
}

function func4() {
    document.getElementById('demo2').style.backgroundImage = "url(../photo/2.jpg)";
}

function func5() {
    document.getElementById('demo3').style.backgroundColor = "pink";
}

function func6() {
    document.getElementById('demo4').style.backgroundColor = 'blue';
}

function func7() {
    // alert("you have entered character");
    document.getElementById('demo5').style.color = 'red'
    document.getElementById('btn1').style.backgroundColor = 'blue'
    var x = document.getElementById('demo5').value;
    document.getElementById('demo6').innerHTML = x;
}

function func8() {
    document.getElementById('btn2').style.backgroundColor = 'blue'
}

function func9() {
    document.getElementById('btn2').style.backgroundColor = 'transparent'
}

function func10() {
    var y = document.getElementById('demo8');
    y.value = y.value.toUpperCase();
}

function func11() {
    var z = document.getElementById('demo9');
    z.value = z.value.toLowerCase();
}

var b = ['A', 'B', 'C', 'D', 'E'];
for (var i = 0; i < b.length; i++) {
    var liTag = document.createElement('li');
    var text = document.createTextNode(b[i]);
    liTag.appendChild(text);
    document.getElementById('list1').appendChild(liTag);
}


var pTag = document.createElement('p');
pTag.innerHTML="Lorem some text";
document.getElementById('dyn').appendChild(pTag);

var Img = document.createElement('img');
Img.src="../photo/2.jpg"
Img.style.width="100px";
Img.style.height="100px"
document.getElementById('dyn').appendChild(Img);
