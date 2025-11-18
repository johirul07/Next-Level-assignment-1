const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
};

const getLength = (value: string | number[]) => {
  if (typeof value === "string") {
    return value.length;
  }

  if (Array.isArray(value)) {
    return value.length;
  }
};

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
  }
}

type FilterType = {
  title: string;
  rating: number;
};

const filterByRating = (array: FilterType[]) => {
  return array.filter((item) => item.rating >= 4 && item.rating <= 5);
};

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

const getUniqueValues = (
  array1: (string | number)[],
  array2: (string | number)[]
): (string | number)[] => {
  const newArr: (string | number)[] = [];

  const hasValue = (arr: (string | number)[], value: string | number) => {
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] === value) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < array1.length; i++) {
    const arr1 = array1[i];
    if (!hasValue(newArr, arr1)) {
      newArr.push(arr1);
    }
  }

  for (let j = 0; j < array2.length; j++) {
    const arr2 = array2[j];
    if (!hasValue(newArr, arr2)) {
      newArr.push(arr2);
    }
  }

  return newArr;
};


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

