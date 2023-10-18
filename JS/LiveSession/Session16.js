class Apple{
    constructor(){
        console.log('APPLE LOGO')
    }
    config1(){
        console.log('512GB');
    }
    consfig2(){
        console.log('256GB');
    }
    productColor(color){
        console.log("product color is"+color);
    }
    inch(){
        var a = Number(prompt("Enter the size"))
        console.log("product inch: "+a);
    }
}

var macBook = new Apple();
macBook.config1();
macBook.productColor('Star Light');
// macBook.inch();

var iphone = new Apple();
iphone.consfig2();
iphone.productColor('silver');

var ipad = new Apple();

class human{
    constructor(){
        console.log("EAT SLEEP CODE REPEAT");
    }
    dance(name){
        console.log(name+" can dance");
    }
    swim(name){
        console.log(name+" can dance");
    }
}

var pooja = new human();
pooja.dance('pooja');
var rutuja = new human();
rutuja.swim('rutuja');
var shashank = new human();


class stdInfo{
    constructor(name,email){
        console.log('Student Name: '+name+' Student Email: '+email);
    }
    php(marks){
        console.log('PHP test marks:'+marks);
    }
    js(marks){
        console.log('JavaScript test marks:'+marks);
    }
}

var jhon = new stdInfo('Jhon','jhon@mail.com');
jhon.php(90);
jhon.js(95);
var shan = new stdInfo('Shashank','shashank@gmail.com');
shan.php(80);
shan.js(85);