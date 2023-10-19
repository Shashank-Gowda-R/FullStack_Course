var arr1 = [11, 12, 13, 14];
for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

for (var i of arr1) {
    console.log(i);
}

var func1 = (x) => {
    // console.log(x);
    return x * 2;
}
// var res = func1(2);
// console.log(res)
var res1 = arr1.map(func1);
console.log(res1)

// When one function becomes the parameter to other function then it is called call back function 

// Cube of function using map

function func2(x) {
    return x ** 3;
}

var b = [10, 20, 30];
var res2 = b.map(func2);
console.log(res2);

// New method 
var c = ['a', 'b', 'c'];
var res3 = c.map((y) => {
    return y
});

console.log(res3);

// Reading array with annonyms function 
var d = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var res4 = d.map((z) => {
    if (z % 2 == 0) {
        return z;
    }
});

console.log(res4);
// output: [undefined, 12, undefined, 14, undefined, 16, undefined, 18, undefined, 20]

// Map does only operation, give array result, I can't do filteration 
var res5 = d.map((z) => {
    return z % 2 == 0;
});

console.log(res5);
// Output: [false, true, false, true, false, true, false, true, false, true]

// Filter : Does the array iteration and if condition also 
var e = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var res6 = e.filter((k) => {
    return k % 2 == 0;
});
console.log(res6); //Here the filteration is done output is 12,14,16,18,20 instead of true and false

// Filtering the number divisible by 7
var res7 = e.filter((k) => {
    return k % 7 == 0;
});
console.log(res7);

var f = [
    { name: 'jhon', email: 'jhon@gmail.com', contact: 562147 },
    { name: 'Tom', email: 'tom@gmail.com', contact: 85264 }
]

var res8 = f.map((z) => {
    return z.name + " " + z.email;
})

console.log(res8)

// Class giving the blue print, reading array
var empInfo = [
    { name: 'jhon', email: 'jhon@gmail.com', contact: 562147 },
    { name: 'Tom', email: 'tom@gmail.com', contact: 85264 }
]

var jobProfile = [
    { profile: 'HR', salary: 70000 },
    { profile: 'CA', salary: 85000 }
]

class readEmpInfo {
    constructor(data) {
        this.value = data;
        console.log(this.value)
    }
    empName() {
        // console.log("This is from the object method empName",this.value)
        var name = this.value.map((x) => {
            return x.name;
        })
        console.log(name)
    }
    empEmail() {
        // console.log(this.value)
        var email = this.value.map((y) => {
            return y.email;
        })
        console.log(email)
    }
    empSalary() {
        var res9 = this.value.filter((z) => {
            return z.salary > 80000
        })
        console.log(res9);
    }
}

var empReading = new readEmpInfo(empInfo);
empReading.empName();
empReading.empEmail();
var jobReading = new readEmpInfo(jobProfile);
jobReading.empSalary();
