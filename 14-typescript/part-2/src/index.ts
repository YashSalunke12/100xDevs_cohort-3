interface People {
  name: string;
  age: number;
  //   greet: () => void;
}

const obj: People = {
  name: "Yash",
  age: 34,
  //   greet: () => console.log("Hii"),
};

// obj.greet();

class Manager implements People {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user = new Manager("Yash", 12);
console.log(user.name);

class Shape {
  constructor() {}

  area() {
    console.log("area");
  }
}

class Reatangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
}

abstract class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract greet(): string;
  hello() {
    console.log("hello");
  }
}

class Employee extends User {
  name: string;
  constructor(name: string) {
    super(name);
    this.name = name;
  }
  greet(): string {
    return "hello";
  }
}

const a = new Employee("hell");

a.hello();

// diff between types and interfaces -> interfaces can be implements as classes and types let's you do unions and intersections
// diff between interfaces and abstract classes is abstract classes does have default implemetations
