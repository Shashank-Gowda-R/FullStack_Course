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