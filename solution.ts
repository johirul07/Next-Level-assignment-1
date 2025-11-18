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

//! =======================================================================

//** Problem 2 */

const getLength = (value: string | number[]) => {
  if (typeof value === "string") {
    return value.length;
  }

  return value.length;
};

// console.log("Problem 2", getLength("typescript"));
// console.log("Problem 2", getLength([10, 20, 30, 40]));

//! =======================================================================

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
// console.log(person1.getDetails());

const person2 = new Person("Alice", 25);
// console.log(person2.getDetails());

//! =======================================================================

//** Problem 4 */

type FilterType = {
  title: string;
  rating: number;
};

const filterByRating = (array: FilterType[]) => {
  return array.filter((item) => item.rating >= 4 && item.rating <= 5);
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

// console.log(filterByRating(books));

//! =======================================================================

//** Problem 5 */

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
  const activesUser = users.filter((user) => user.isActive);
  return activesUser;
};

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

// console.log(filterActiveUsers(users));

//! =======================================================================

//** Problem 6 */

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  const available = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published Year: ${book.publishedYear}, Available: ${available}`;
};

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

// console.log(printBookDetails(myBook))

//! =======================================================================

//** Problem 7 */

const getUniqueValues = (
  array1: (string | number)[],
  array2: (string | number)[]
) => {
  const newArr: (string | number)[] = [];

  for (let i = 0; i < array1.length; i++) {
    const arr1 = array1[i];
    if (!newArr.includes(arr1)) {
      newArr.push(arr1);
    }
  }

  for (let j = 0; j < array2.length; j++) {
    const arr2 = array2[j];
    if (!newArr.includes(arr2)) {
      newArr.push(arr2);
    }
  }

  return newArr;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));

//! =======================================================================

//** Problem 8 */

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (product: Product[]): number => {
  const productTotalPrices = product.reduce((total, item) => {
    const productPrice = item.price * item.quantity;
    const discount = item.discount ? (productPrice * item.discount) / 100 : 0;
    return total + (productPrice - discount);
  }, 0);

  return productTotalPrices;
};

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

// console.log(calculateTotalPrice(products));
