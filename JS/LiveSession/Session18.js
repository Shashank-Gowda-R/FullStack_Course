var arr1 = [1, 2, 3, 4, 5];
var res1 = arr1.reduce((count, x) => {  //for loop and counter variable job, first paramerter is counter variable
    return count += x;
}, 0);//here 0 is the initial value of count 

console.log(res1);

var arr2 = [11, 12, 13, 14, 15];
var res2 = arr2.reduce((count, x) => {
    return count *= x;
}, 1);
console.log(res2);

var jobProfile = [
    { profile: 'HR', salary: 70000 },
    { profile: 'CA', salary: 85000 }
]

class Salary {
    constructor(data) {
        this.value = data;
    }
    totSalary() {
        var total = this.value.reduce((res, x) => {
            return res += x.salary;
        }, 0);
        console.log(total);
    }
}

var totalSalary = new Salary(jobProfile);
totalSalary.totSalary();

var stdInfoEdyoda = [
    {
        name: "john",
        email: "john@gmail.com",
        subject1: "python",
        subject2: "DSA",
        sub1_marks: 60,
        sub2_marks: 90
    },
    {
        name: "tom",
        email: "tom@gmail.com",
        subject1: "js",
        subject2: "DSA",
        sub1_marks: 30,
        sub2_marks: 60
    },
    {
        name: "alex",
        email: "alex@gmail.com",
        subject1: "js",
        subject2: "DSA",
        sub1_marks: 70,
        sub2_marks: 80
    },
    {
        name: "sam",
        email: "sam@gmail.com",
        subject1: "php",
        subject2: "DSA",
        sub1_marks: 90,
        sub2_marks: 100
    },
    {
        name: "selena",
        email: "selena@gmail.com",
        subject1: "php",
        subject2: "DSA",
        sub1_marks: 24,
        sub2_marks: 50
    }
]

class stdData {
    constructor(data) {
        this.value = data;
    }
    stdJS(sub) {
        var res = this.value.filter((x) => {
            return x.subject1 == sub;
        })
        console.log(res);
    }
    stdDetails(name) {
        var res1 = this.value.filter((z) => {
            return z.name == name;
        })
        console.log(res1);
    }
    marksSum() {
        this.value.reduce((count, y) => {
            count = y.sub1_marks + y.sub2_marks;
        }, 0);
        console.log(count);
    }
}

var std = new stdData(stdInfoEdyoda);
std.stdJS('php');

std.stdDetails('john');

std.marksSum();