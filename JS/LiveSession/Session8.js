// Tracking the duplicate array elements

let arr = [2, 3, 4, 5, 6, 1, 1, 2, 2, 5]

let res = {}

for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            count++;
        }
    }
    if (count > 1) {
        res[arr[i]] = count;
    }
}

console.log(res)

let set = new Set()
for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
}
console.log(set);

// Greatest of 3 numbers

function greatest(a, b, c) {
    if (a > b && a > c) {
        console.log(a + " is greater than " + b + " and " + c);
    }
    else if (b > c && a < b) {
        console.log(b + " is greater than " + a + " and " + c);
    }
    else {
        console.log(c + " is greater than " + b + " and " + a);
    }
}

// var a = Number(prompt("Enter the first number:"));
// var b = Number(prompt("Enter the second number:"));
// var c = Number(prompt("Enter the third number:"));

// greatest(a,b,c);

// WAF to check whether a character is alphabet, number or special character

// var char = prompt("Enter the character:");

function identifyChar(char) {
    if (/[A-Z]/i.test(char)) {
        console.log(char + " is a character");
    }
    else if (/[0-9]/.test(char)) {
        console.log(char + " is a number");
    }
    else {
        console.log(char + " is a special character");
    }
}

// identifyChar(char);

function charChecker(char) {
    if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
        console.log('Alphabet')
    }
    else if (char >= '0' && char <= '9') {
        console.log('Number')
    }
    else {
        console.log('Special Character')
    }
}

//   let val = prompt('Please enter the character')

//   charChecker(val)

// WAF to check whether a number is divisible by 3 and 5 or not

function divisible() {
    let num = Number(prompt("Enter the number:"));
    if (num % 3 == 0 && num % 5 == 0) {
        console.log(num + " is divisible by 3 and 5");
    }
    else if (num % 5 == 0) {
        console.log(num + " is divisible by 5");
    }
    else if (num % 5 == 0) {
        console.log(num + " is divisible by 3");
    }
    else { 
        console.log(num + " is not divisible by 3 and 5");
    }
}

// divisible();

// WAF to check whether a number is prime or not

function isPrime(){
    let num1 = Number(prompt("Enter the number:"));
    let count =0;
    for(var i=1;i<num1;i++){
        if(num1%i == 0){
            count++;
        }
    }
    if(count>1){
        console.log(num1+" is not a Prime Number");
    }
    else{
        console.log(num1+" is a Prime Number");
    }
}

// isPrime();

// WAF to find all factors of a given number

function factors(){
    let num = Number(prompt("Enter a number:"));
    let a =[];
    for(i=1;i<=num;i++){
        if(num%i == 0){
            a.push(i);
        }
    } 
    console.log(a);
}

// factors();

// WAF to print multiplication table upto 10 of any given number in proper format

function tables(){
    let num = Number(prompt("Enter a number:"));
    for(let i=1;i<=10;i++){
        document.write(num+" x "+i+" = "+num*i+"<br>");
    }
}

// tables();

// WAF to check whether a number is perfect number or not

function isPrefectNumber(){
    let num = Number(prompt("Enter the number:"));
    let count =0;
    for(let i=1;i<num;i++){
        if(num%i == 0){
            count+=i;
        }
    }
    if(count == num){
        console.log(num+" is a perfect number");
    }
    else{
        console.log(num+" is not a perfect number");
    }
}
// isPrefectNumber();

// WAF to check whether a number is pallindrome or not


// WAF to find sum of digits of any given number

// function Sum(){
//     let num = Number(prompt("Enter the number to find it's sum:"));
//     let sum =0;
//     while(num){
//         rem = num%10;
//         sum+=rem;
//         num = parseInt(num/10);
//     }
//     console.log("Sum of the number is "+sum);
// }

// Sum();

// WAF to check whether a number is strong or not
var count =0
function sum(x){
    let sum =0;
    while(x){
    rem = x%10;
    sum+=rem;
    x = parseInt(x/10);
    count++;
    }
    return sum;
}

function isStrong(){
    let num = Number(prompt("Enter the number to find it's sum:"));
    let total =sum(num);
    var sum2 = 0;
    while(num){
        var rem = num%10;
        sum2+=rem**count;
        num = parseInt(num/10);
    }
    let total2 = sum(sum2);
    if(total == total2){
        console.log("It is a strong number");
    }
}

isStrong();

