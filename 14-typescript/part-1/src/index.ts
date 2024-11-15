function greet(firstname: string) {
  console.log(`Hello, ${firstname}`);
}

greet("Yash Salunke");

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

let a = sum(1, 2);
console.log(a);

function isLegal(age: number): boolean {
  if (age >= 18) {
    return true;
  } else return false;
}

let b = isLegal(19);

function fn(callback: () => void): void {
  setTimeout(callback, 2000);
}

function callback() {
  console.log("hello");
}

fn(callback);

interface User {
  name: string;
  age: number;
}

type User1 = {};

function greet1(user: User) {
  console.log(`Hello, ${user.name}`);
}

greet1({
  name: "Yash",
  age: 89,
});

type SumInput = string | number;

type Employee = {
  name: string;
  startDate?: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "Yash",
  department: "Software Developer",
};

// types let you create unios and intersections
