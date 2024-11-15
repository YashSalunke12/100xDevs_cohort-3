"use strict";
const obj = {
    name: "Yash",
    age: 34,
    //   greet: () => console.log("Hii"),
};
// obj.greet();
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user = new Manager("Yash", 12);
console.log(user.name);
class Shape {
    constructor() { }
    area() {
        console.log("area");
    }
}
class Reatangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log("hello");
    }
}
class Employee extends User {
    constructor(name) {
        super(name);
        this.name = name;
    }
    greet() {
        return "hello";
    }
}
const a = new Employee("hell");
a.hello();
// diff between types and interfaces -> interfaces can be implements as classes and types let's you do unions and intersections
// diff between interfaces and abstract classes is abstract classes does have default implemetations
