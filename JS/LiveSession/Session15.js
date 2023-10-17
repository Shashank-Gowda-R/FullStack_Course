// Task

// var btn = document.getElementById('btn');
// function addInput() {
//     var input = document.createElement('input');
//     input.placeholder = "Enter the text";
//     var box = document.getElementById('addField');
//     box.appendChild(input);
// }

// btn.addEventListener('click',function(){
//     var input = document.createElement('input');
//     input.placeholder = "Enter the text";
//     var box = document.getElementById('addField');
//     box.appendChild(input);
// })


// normal function
// var a = new XMLHttpRequest();
// a.open('GET','https://fakestoreapi.com/products',true);
// a.send();
// a.onreadystatechange =function(){
//     if(this.status==200 && this.readyState ==4)
//     console.log(a.readyState);
//     console.log(a.status);
// }

var product = () => {
    document.getElementById('loader').style.display = 'block';
    var a = new XMLHttpRequest();
    a.open('GET', 'https://fakestoreapi.com/products', true);
    a.send();
    a.onreadystatechange = () => {
        if (a.status == 200 && a.readyState == 4) {
            document.getElementById('loader').style.display = 'none';
            var data = a.responseText;
            data = JSON.parse(data)
            // console.log(data);
            for (var i of data) {
                // console.log(i)
                var divTag = document.createElement('div');
                divTag.className = 'productBox';
                for (var j in i) {
                    // console.log(i[j]);
                    if (j == 'image') {
                        var imgTag = document.createElement('img');
                        imgTag.src = i[j];
                    }
                    else {
                        divTag.innerHTML += j + ":" + i[j] + '<br>';
                    }
                }
                divTag.appendChild(imgTag);
                document.getElementById('mainSection').appendChild(divTag)
                // console.log(divTag);
            }
        }
        else {
            document.getElementById('loader').style.display = 'block';
        }
    }
}

product();