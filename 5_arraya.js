// Arraya

// Create an array and print all numbers through the for loop
let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Arraya's methods
// toString()
// Convert an array to a comma-separated string
let colors = ["red", "green", "blue"];
let colorString = colors.toString();
console.log(colorString);

// join()
// Join array elements with a custom separator
let fruits = ["apple", "banana", "cherry"];
let result = fruits.join(" - ");
console.log(result);

// pop()
// Remove the last item from an array
let cities = ["Mumbai", "Delhi", "Pune", "Chennai"];
cities.pop();
console.log(cities);

// push()
// Add new items to the end of an array
let languages = ["JavaScript", "TypeScript"];
languages.push("HTML", "CSS");
console.log(languages);

// shift()
// Remove the first item from an array
let queue = ["first", "second", "third"];
queue.shift();
console.log("Updated queue:", queue);

// unshift()
// Add an item at the beginning of an array
let books = ["Book B", "Book C"];
books.unshift("Book A");
console.log(books);

//delete()
// Remove a value from an array using delete
let numbers = [1, 2, 3, 4];
delete numbers[1];
console.log(numbers);
console.log(numbers.length); 

// concat()
// Merge two arrays into one
let fruits = ["apple", "banana"];
let vegetables = ["carrot", "spinach"];
let food = fruits.concat(vegetables);
console.log(food);

// sort()
// Sort an array of numbers in ascending order
let numbers = [5, 20, 1, 100];
numbers.sort((a, b) => a - b);
console.log("Sorted numbers:", numbers);

// splice()
// Replace an item in an array using splice()
let colors = ["red", "green", "blue", "yellow"];
colors.splice(1, 1, "purple");
console.log(colors);

// slice()
// Extract a portion of an array using slice()
let fruits = ["apple", "banana", "mango", "orange", "grapes"];
let tropicalFruits = fruits.slice(1, 4);
console.log("Original fruits:", fruits);
console.log("Tropical fruits:", tropicalFruits);

// reverse()
// Reverse the order of elements in an array
let nums = [10, 20, 30];
let reversedNums = nums.slice().reverse();
console.log(nums);
console.log(reversedNums);

// For loop in an array
// Write a program to print all elements of an array using a for loop.
let fruits = ["apple", "banana", "mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// forEach loop in an array
// Write a program to print all elements of an array using the forEach() method.
let fruits = ["apple", "banana", "mango"];
fruits.forEach(fruit => {
  console.log(fruit);
});

// for...of loop in an array
// Write a program to print all elements of an array using the for...of loop.
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// for...in loop in an array
// Write a program to print all indexes and values of an array using the for...in loop.
let numbers = [10, 20, 30];
for (let index in numbers) {
  console.log("Index:", index, "Value:", numbers[index]);
}

// map() in an array
//Write a program to create a new array by doubling each element of a given array using the map() method.
let numbers = [1, 2, 3, 4, 5];
let numDouble =numbers.map(num => num * 2);
console.log(numDouble);


















