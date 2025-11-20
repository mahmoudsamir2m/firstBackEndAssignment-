// 1. Convert the string "123" to a number and add 7. 

// const add = (str, x) => {
//     const y = Number(str);
//     const result = y + x;
//     console.log(result);
// }
// add("123", 7);
// add("200", 10);

// 2. Check if the given variable is falsy and return "Invalid" if it is.

// const checkVariable = (variable) => {
//     if (variable) {
//         console.log("valid");
//     } else {
//         console.log("Invalid");
//     }
// }
// checkVariable([]);
// checkVariable(null);

// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue

// const printNumbers = () => {
//     for (let i = 1; i <= 10; i++) {
//         if (i % 2 === 0) {
//             continue;
//         }
//         console.log(i);
//     }
// }
// printNumbers();

// 4. Create an array of numbers and return only the even numbers using filter method.

// const filterNumbers = (numbers) => {
//     console.log(numbers.filter(number => number % 2 === 0));
// }
// filterNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// filterNumbers([11, 22, 30, 41, 15,100]);

// 5. Use the spread operator to merge two arrays, then return the merged array.

// const mergeArrays = (x,y) => {
//     console.log([...x, ...y]);
// }
// mergeArrays([1, 2, 3], [4, 5, 6]);

// 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday).

// const getDayOfWeek = (num) => {
//     switch (num) {
//         case 1:
//             console.log("Sunday");
//             break;
//         case 2:
//             console.log("Monday");
//             break;
//         case 3:
//             console.log("Tuesday");
//             break;
//         case 4:
//             console.log("Wednesday");
//             break;
//         case 5:
//             console.log("Thursday");
//             break;
//         case 6:
//             console.log("Friday");
//             break;
//         case 7:
//             console.log("Saturday");
//             break;
//         default:
//             console.log("Invalid day number");
//     }
// }
// getDayOfWeek(1)
// getDayOfWeek(5)
// getDayOfWeek(10)

// 7. Create an array of strings and return their lengths using map method

// const getLengths = (items) => {
//   const lengths = items.map((item) => {
//     if (typeof item === "string") {
//       return item.length;
//     }
//     return "not string";
//   });
//   console.log(lengths);
// };
// getLengths(["hello", "world", "javascript"]);
// getLengths(["apple",1, null, true]);

// 8. Write a function that checks if a number is divisible by 3 and 5.

// const checkDivisibility = (num) => {
//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log("Divisible by both");
//     } else if (num % 3 === 0) {
//         console.log("Divisible by 3");
//     } else if (num % 5 === 0) {
//         console.log("Divisible by 5");
//     } else {
//         console.log("Not divisible by 3 and 5");
//     }
// }
// checkDivisibility(15)
// checkDivisibility(9)
// checkDivisibility(20)
// checkDivisibility(1)

// 9. Write a function using arrow syntax to return the square of a number 

// const square = (num) =>  num **2;
// console.log(square(2));
// console.log(square(5));

// 10.Write a function that destructures an object to extract values and returns a formatted string.

// const formatString = ({ name, age }) => `${name} is ${age} years old`;
// console.log(formatString({ name: "Mahmoud", age: 24 }));

// 11.Write a function that accepts multiple parameters (two or more) and returns their sum.

// const sumNumbers = (...nums) => {
//    let total = 0;
//   for (let i = 0; i < nums.length; i++) {
//     total += nums[i];
//   }
//   console.log(total);
// }
// sumNumbers(1,2)
// sumNumbers(4,5,6)
// sumNumbers(10,20,10,20,40)

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.

// const SuccessMessage = () => {
//   setTimeout(() => {
//     console.log("Success");
//   }, 3000);
// };
// SuccessMessage();

// 13. Write a function to find the largest number in an array. 

// const findLargest=(arr)=>  Math.max(...arr);
// console.log(findLargest([1, 3, 7, 2, 4]));
// console.log(findLargest([10, 50, 3, 99, 7]));

// 14. Write a function that takes an object and returns an array containing only its keys.

// const getKeys = (obj) =>  Object.keys(obj);
// console.log(getKeys({ name: "Mahmoud", age: 24, job: "Frontend" }));

// 15. Write a function that splits a string into an array of words based on spaces. 

// const splitString = (str) => str.split(" ");
// console.log(splitString("Hello World"));
// console.log(splitString("I am Mahmoud FrontEnd Developer"));
