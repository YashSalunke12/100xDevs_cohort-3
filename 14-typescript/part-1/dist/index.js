"use strict";
function greet(firstname) {
    console.log(`Hello, ${firstname}`);
}
greet("Yash Salunke");
function sum(num1, num2) {
    return num1 + num2;
}
let a = sum(1, 2);
console.log(a);
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else
        return false;
}
let b = isLegal(19);
function fn(callback) {
    setTimeout(callback, 2000);
}
function callback() {
    console.log("hello");
}
fn(callback);
function greet1(user) {
    console.log(`Hello, ${user.name}`);
}
greet1({
    name: "Yash",
    age: 89,
});
const teamLead = {
    name: "Yash",
    department: "Software Developer",
};
// types let you create unios and intersections
