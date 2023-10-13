// This Keyword Example 
// this is a current object
function func1(x) {
    // console.log(x)
    x.style.color = 'red'
}

// JSON 
// When we deploy API we convert it into JSON becasue it is lightest and fastest

// Converting JS Object into JSON

// This is an object if we dploy it will be heavy and  it may not work in other technology
var demo = {
    name: 'abc',
    email: 'abc@mai.com',
    contact: [123456, 456987]
}

console.log(typeof (demo));

// JSON will be of string datatype
var json = JSON.stringify(demo);
console.log(json);
console.log(typeof (json))


// Converting JSON into Object
var obj = JSON.parse(json);
console.log(obj);
console.log(typeof (obj))



// AJAX CALL
// 0 Request not initialized
// 1 Server connection established
// 2 Request Received 
// 3 Processing Request
// 4 Request Finished and responsed is ready

function readPosts() {
    var a = new XMLHttpRequest();
    a.open("GET", 'https://jsonplaceholder.typicode.com/posts', true); //True indicates asynshronize method
    a.send(); //To get data to our system.
    a.onreadystatechange = function () {//checking the whether the API is able to give response
        console.log(this.readyState)
        console.log(this.status)
        if (this.status == 200 && this.readyState == 4) {
            // console.log(this.responseText)
            var data = JSON.parse(this.responseText);
            // console.log(data)
            // console.log(typeof(data))

            for (var i = 0; i < data.length; i++) {
                var divTag = document.createElement('div');
                divTag.className = "boxStyle";
                // console.log(divTag)
                for (var j in data[i]) {
                    divTag.innerHTML += "<b>"+j+"</b>" + ":" + data[i][j] + "<br>";
                    console.log(divTag)
                }
                document.getElementById('mainSection').appendChild(divTag)
            }
        }
    }
}

readPosts();