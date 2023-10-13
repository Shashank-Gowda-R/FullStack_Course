// JS Object
var city = {
    lat: 12.11,
    long: 14.23,
    temp: 25
}

document.write(city); //document cannot fetch the data
console.log(city); //In console will get correct output
document.write("<br>");
document.write(city.lat+"<br>"+city.long+"<br>"+city.temp);

document.write("<br>");
var stdInfo = {
    stdName : "Jhon",
    stdEmail : 'jhon@gmail.com',
    stdPhone: [9945624638,6361296303]
}

document.write(stdInfo.stdName+"<br>"+stdInfo.stdEmail+"<br>"+stdInfo.stdPhone[1]);

var car ={
    name :'jhon',
    email:'jhon@gmail.com',
    carList:{
        favCar : ['audi','BMW','Bugatti','Volvo','Duster']
    }
}
document.write("<br><br>");
document.write(car.carList.favCar[2]);
document.write("<br>");
document.write(car.carList.favCar[2].substring(4,6));

document.write("<br><br>");
// using loop for object

var emp ={
    name:'jhon',
    email:'jhon@gmail.com',
    contact:1234567890
}

for(var i in emp){
    document.write(i+":"+emp[i]+"<br>");
}