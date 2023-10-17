function loadData() {
    var data = new XMLHttpRequest();
    data.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    data.send();
    data.onreadystatechange = function () {
        // console.log(data.status);
        // console.log(data.readyState);
        // console.log(data.responseText);
        if (this.status == 200 && this.readyState == 4) {
            var userData = data.responseText;
            userData = JSON.parse(userData);
            for (var i = 0; i < userData.length; i++) {
                // console.log(userData[i]);
                var divTag = document.createElement('div');
                for (var j in userData[i]) {
                    if (j == 'name') {
                        var nameTag = document.createElement('h3');
                        nameTag.innerHTML = userData[i][j];
                        divTag.appendChild(nameTag);
                    }
                    if (j == 'email') {
                        var email = document.createElement('p');
                        email.innerHTML = userData[i][j];
                        divTag.appendChild(email);
                    }
                    if (j == 'address') {
                        var address = document.createElement('p');
                        for (var k in userData[i][j]) {
                            if (k != 'geo') {
                                address.innerHTML += " " + userData[i][j][k]
                            }
                        }
                        divTag.appendChild(address);
                    }
                    if (j == 'phone') {
                        var phone = document.createElement('p');
                        phone.innerHTML = userData[i][j];
                        divTag.appendChild(phone);
                    }
                    if (j == 'website') {
                        var website = document.createElement('a');
                        website.href = userData[i][j];
                        website.innerHTML = "User Profile"
                        divTag.appendChild(website);
                    }
                }
                var section = document.getElementById('userID');
                section.appendChild(divTag);
                console.log(divTag);
            }
        }
    }
}

loadData();