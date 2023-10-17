var users = () => {
    document.getElementById('loader').style.display = 'block';
    var a = new XMLHttpRequest();
    a.open('GET', 'https://fakestoreapi.com/users', true);
    a.send();
    a.onreadystatechange = () => {
        if (a.status == 200 && a.readyState == 4) {
            var userData = a.responseText;
            userData = JSON.parse(userData);
            // console.log(userData);
            for (var i of userData) {
                var divTag = document.createElement('div');
                var street = document.createElement('p');
                var city = document.createElement('p');
                var id = document.createElement('p');
                var email = document.createElement('p');
                var userName = document.createElement('p');
                var password = document.createElement('p');
                divTag.className = 'boxStyle';
                for (var j in i) {
                    // console.log(i[j])
                    if (j == 'address') {
                        for (var k in i[j]) {
                            if (k == 'street') {
                                street.innerHTML = k + " : " + i[j][k];
                            }
                            if (k == 'city') {
                                city.innerHTML = k + " : " + i[j][k];
                            }
                        }
                    }
                    else {
                        if (j == 'id') {
                            id.innerHTML = j + " : " + i[j];
                        }
                        if (j == 'email') {
                            email.innerHTML = j + " : " + i[j];
                        }
                        if (j == 'username') {
                            userName.innerHTML = j + " : " + i[j];
                        }
                        if (j == 'password') {
                            password.innerHTML = j + " : " + i[j];
                        }
                    }
                    divTag.appendChild(id);
                    divTag.appendChild(email);
                    divTag.appendChild(userName);
                    divTag.appendChild(password);
                    divTag.appendChild(street);
                    divTag.appendChild(city);
                }
                document.getElementById('mainSection').appendChild(divTag);
            }
        }
        else {
            document.getElementById('loader').style.display = 'none';
        }
    }
}

users();