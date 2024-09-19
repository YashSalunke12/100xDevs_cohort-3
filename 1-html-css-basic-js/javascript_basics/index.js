let firstName = "Yash";
const age = 21;
var isStudent = true;

console.table({firstName, age, isStudent});


// normal functions

function sum(num1, num2) {
    return num1 + num2;
}

const result = sum(3, 2)
console.log(result);

function canVote(age) {
    if(age >= 18) {
        return true;
    }
    else {
        return false;
    }
}

console.log(canVote(39))


// normal objects

let user = {
    name: "Yash",
    age: 21
};

function greetUser(user) {
    return `${user.name} age is ${user.age}`
}

console.log(greetUser(user));


// arrays 

let nums = [1, 2, 3, 4, 5, 6];

function even(num1) {
    const num = num1.filter((num) => num%2==0);
    return num;
}

const a = even(nums);
console.log(a);