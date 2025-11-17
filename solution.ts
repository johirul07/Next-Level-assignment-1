//? Problem Solving with TypeScript

//** Problem 1:

const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return value ? "true" : "false";
  }
};

// console.log("Problem 1", formatValue("jahirul"));
// console.log("Problem 1", formatValue(123));
// console.log("Problem 1", formatValue(true));

//** Problem 2 */

const getLength = (value: string | number[]) => {
  if (typeof value === "string") {
    return value.length;
  }

  return value.length;
};

// console.log("Problem 2", getLength("typescript"));
// console.log("Problem 2", getLength([10, 20, 30, 40]));

//** Problem 3 */

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    const details = `'Name: ${this.name}, Age: ${this.age}'`;
    return details;
    // return details.toString();
  }
}

const person1 = new Person("John Doe", 30);
console.log(person1.getDetails());

const person2 = new Person("Alice", 25);
console.log(person2.getDetails());
