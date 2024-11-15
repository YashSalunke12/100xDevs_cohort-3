type User1 = {
  name: string;
  age: number;
};

type Admin = {
  name: string;
  department: string;
};

type UserOrAdmin = User1 | Admin;

const greet = (user: UserOrAdmin): string => {
  return "welcome, " + user.name;
};

let a1 = greet({ name: "Yash", department: "software" });
let a2 = greet({ name: "Sarthak", age: 34 });
console.log(a1, a2);

const arr = [1, 2, 3, 4];

const maxValue = (arr: number[]): number => {
  let maxValue = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > maxValue) maxValue = i;
  }
  return maxValue;
};

console.log(maxValue(arr));

interface User2 {
  firstName: string;
  lastName: string;
  age: number;
}

const isLegal = (users: User2[]): User2[] => {
  const legalUsers = users.filter((user) => user.age >= 18);
  return legalUsers;
};

const result = isLegal([
  { firstName: "Yash", lastName: "Salunke", age: 22 },
  { firstName: "sarthak", lastName: "suryawanshi", age: 23 },
  { firstName: "nikhil", lastName: "potdar", age: 12 },
]);
console.log(result);
