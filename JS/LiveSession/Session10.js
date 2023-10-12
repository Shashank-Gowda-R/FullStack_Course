// innerHTML
// alert(document.getElementById('demo1').innerHTML)

// innerText: Gives only the text eleminates all the HTML tagss
// alert(document.getElementById('demo2').innerText)

function addData() {
    var div = document.getElementById('add').innerHTML = "<strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et labore illum fuga illo ex sunt, sequi ipsam possimus reiciendis debitis obcaecati dolorum, quasi optio commodi earum ducimus laudantium hic explicabo.</strong>";
}

function addImage() {
    document.getElementById('image').innerHTML += '<img src="../photo/Monkey.jpg">'
}

function switchData() {
    var data1 = document.getElementById('data1').innerHTML;
    var data2 = document.getElementById('data2').innerHTML;
    var data = data1;
    document.getElementById('data1').innerHTML = data2;
    document.getElementById('data2').innerHTML = data;
}

// Adding CSS throught JS

// We will get inline css
function addColor() {
    document.getElementById('demo3').style.color = "red";
    document.getElementById('demo3').style.backgroundColor = 'blue';
    document.getElementById('demo4').style.color = "blue";
    document.getElementById('demo4').style.backgroundColor = 'red';
}

// For multi line CSS
function addCSS() {
    document.getElementById('demo5').className = "imgStyle";
}

function PushNewClass() {
    document.getElementById('demo6').className += " newClass";
}

// Alerting user entered value
function fun1() {
    alert(document.getElementById('input').value)
    var x = document.getElementById('input').value;
    document.getElementById('demo7').innerHTML += x;
}

function fun2() {
    var h1Tags = document.getElementsByTagName('h1');
    console.log(h1Tags)
    // h1Tags.style.color = "red";
    for (var i = 0; i < h1Tags.length; i++) {
        h1Tags[i].style.color = "blue";
    }
}

var z = document.getElementsByClassName('mno');
// console.log(z);
for (var i = 0; i < z.length; i++) {
    z[i].style.color = "cyan";
}

function heading2() {
    var a = document.getElementsByTagName('h2');
    for(var i=0;i<a.length;i++){
        a[i].className="heading";
    }
}

// console.log(document.getElementsByTagName('h2'))



