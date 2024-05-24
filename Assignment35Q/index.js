"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1.Write a script to log "Hello, World!" to the console.
console.log("Hello, World");
//2.Create a variable temperature and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.
let temperature = 18;
if (temperature < 20) {
    console.log("It's cold!");
}
//3.Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result.
let AppleTotal = 10;
let AppleGive = 7;
let AppleLeft = AppleTotal - AppleGive;
console.log(`Apple Left: ${AppleLeft}`);
//4.Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.
let firstName = "Ghulam";
let lastName = "Mustafa";
let fullName = `The Fullname is:${firstName}+ ${lastName}`;
//5.Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".
let num5 = 5;
if (num5 > 3) {
    console.log("Yes");
}
else {
    console.log("No");
}
//6.Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
function calculateArea(r) {
    console.log("Area is:", Math.PI * (Math.pow(r, 2)));
}
calculateArea(10);
//7. Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
let x;
for (x = 1; x <= 50; x++) {
    if (x % 3 == 0) {
        console.log("Fizz");
    }
    else if (x % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(x);
    }
}
//8.Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
let tempratures = [15, 20, 25, 30, 35];
let MaxNum = Math.max.apply(null, tempratures);
console.log("The Max number is:", MaxNum);
//9.Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.
"use strict";
const ps = require('prompt-sync');
const prompt2 = ps();
let age = prompt2("Enter Age:");
if (age !== null && parseInt(age) < 18) {
    console.log("Minor");
}
else {
    console.log("Adult");
}
//10.Write a function that takes an array of numbers and returns the count of positive numbers in the array.
const array1 = [-1, 20, -50, 25];
const PNumber = array1.filter(array1 => array1 > 0);
console.log(`Positive Numbers are:${PNumber}`);
//11.Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
function ArraywithA(StrList) {
    return StrList.filter((word) => word.toLowerCase().startsWith('a'));
}
const Words = ['rabbit', 'banana', 'apple'];
const filteredArr = ArraywithA(Words);
console.log(filteredArr);
//12.Create a script that logs the second to last element of an array named fruits.
let fruits = ['Apple', 'Strawberry', 'banana', 'grapes'];
let SecondTolast = fruits[fruits.length - 2];
console.log("Second to last is :", SecondTolast);
//13.Develop a function that takes an array of numbers and returns a new array with each number squared.
const arr1 = [2, 4, 8, 10];
function sqrArr(arr) {
    const arr2 = arr.map((x) => Math.pow(x, 2));
    console.log("New Array:", arr2);
}
sqrArr(arr1);
//14.Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
const arr3 = ["Apple", "Banana", "Mango"];
let rev_arr = [];
//console.log(arr3.reverse());
for (let i = arr3.length - 1; i >= 0; i--) {
    rev_arr.push(arr3[i]);
}
console.log(rev_arr);
//15.Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
function MinMaxScores(SC) {
    let Exceed = SC[0];
    let Bellow = SC[0];
    let ExceedTime = 0;
    let BellowTime = 0;
    for (let i = 1; i < SC.length; i++) {
        if (SC[i] > Exceed) {
            Exceed = SC[i];
            ExceedTime++;
        }
        else if (SC[i] < Bellow) {
            Bellow = SC[i];
            BellowTime++;
        }
    }
    return [ExceedTime, BellowTime];
}
const [ExceedTime, BellowTime] = MinMaxScores(scores);
console.log(`Number of Times Exceed:${ExceedTime}`);
console.log(`Number Of Times Bellow:${BellowTime}`);
//16.Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.
function rf(arrf) {
    return arrf.filter(Boolean);
}
const FV = [false, null, 0, "", undefined, NaN, 1, 5];
console.log("Array after removal:", rf(FV));
//17.Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.
let arrcon1 = [1, 2, 3];
let arrcon2 = [4, 5, 6];
let arrconcated = arrcon1.concat(arrcon2);
console.log("Concated array is:", arrconcated);
//18.Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
function sumOfElements(arr, isEven) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] % 2 === 0) === isEven) {
            sum += arr[i];
        }
    }
    return sum;
}
const ArrElements = [1, 2, 3, 4, 5, 6];
const evenSum = sumOfElements(ArrElements, true); // Sum of even elements
const oddSum = sumOfElements(ArrElements, false); // Sum of odd elements
console.log(`Sum of Even elements: ${evenSum}`);
console.log(`Sum of Odd elements: ${oddSum}`);
//19.Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
function ElementExistence(arr, target) {
    const index = arr.indexOf(target);
    return index !== -1 ? index : -1;
}
// Example usage:
const ElementArr = [10, 20, 30, 40, 50];
const targetElement = 80;
const result = ElementExistence(ElementArr, targetElement);
console.log(`The  index of  element ${targetElement} is  ${result}.`);
//20.Write a function to find and return the smallest number in an array of integers.
function findMin(arr, n) {
    let mini = arr[0];
    for (let i = 0; i < n; i++) {
        if (arr[i] < mini) {
            mini = arr[i];
        }
        let ans = mini;
    }
    let ans = mini;
    return ans;
}
let arr = [500, 108, 85, 40, 50, 3];
let N = arr.length;
// Function Call
let smallest = findMin(arr, N);
console.log("Smallest is: " + smallest);
//21.Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
function calculateProduct(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}
const numbers = [4, 5, 6, 7];
const res = calculateProduct(numbers);
console.log(`The product of the elements in the array is: ${res}`);
//22.Develop a function filterByLength that takes an array of strings and a number n. The function should return an array containing only the strings that are longer than n characters.
function filterByLength(arr, n) {
    const filteredStrings = arr.filter((str) => str.length > n);
    return filteredStrings;
}
const inputStrings = ["apple", "banana", "grape", "kiwi", "orange"];
const minLength = 5;
const res2 = filterByLength(inputStrings, minLength);
console.log("Strings longer than", minLength, "characters:", res2);
//23.Create a function findDuplicates that finds and logs all duplicates in an array.
function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
}
const strArray = ["q", "w", "w", "w", "e", "i", "i", "u", "r"];
const duplicates = findDuplicates(strArray);
console.log("All duplicates:", duplicates);
//24.Write a function incrementAll that takes an array of integers and increments each element by one.
function incrementAll(arr) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Increment the current element by 1
        arr[i]++;
    }
    // Return the modified array (no need for a separate variable to store)
    return arr;
}
// Example usage
const numArr = [1, 2, 3];
console.log(numArr); // [1, 2, 3] (original array not modified)
const incrementedNumbers = incrementAll(numArr);
console.log(incrementedNumbers); // [2, 3, 4]
//25.Develop a function countOccurrences that counts how many times a specific element appears in an array.
function countOccurrences(arr, element) {
    // Initialize a count variable
    let count = 0;
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element matches the target element
        if (arr[i] === element) {
            // Increment count if there's a match
            count++;
        }
    }
    // Return the count of occurrences
    return count;
}
// Example usage
const myArray = [1, 2, 2, 3, 1, 4, 2];
const elementToCount = 2;
const occurrences = countOccurrences(myArray, elementToCount);
console.log(`The element ${elementToCount} appears ${occurrences} times in the array.`);
//26.Create a function isSorted that checks if an array is sorted in ascending order.
function isSorted(arr) {
    // Loop through the array from the second element onwards
    for (let i = 1; i < arr.length; i++) {
        // Check if the current element is less than the previous element
        if (arr[i] < arr[i - 1]) {
            // If a violation is found, the array is not sorted
            return false;
        }
    }
    // If the loop completes without finding any violations, the array is sorted
    return true;
}
// Example usage
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [5, 2, 1, 4, 3];
console.log(`Sorted array: ${isSorted(sortedArray)}`); // true
console.log(`Unsorted array: ${isSorted(unsortedArray)}`); // false
//27.Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".
function formatNames(names) {
    if (names.length === 0) {
        return "";
    }
    else if (names.length === 1) {
        return names[0];
    }
    else {
        // Second-last element index (for separating with "and")
        const secondLastIndex = names.length - 2;
        // Join all elements except the last two with commas
        const firstPart = names.slice(0, secondLastIndex).join(", ");
        // Join the last two elements with "and"
        const lastPart = names.slice(secondLastIndex).join(" and ");
        // Combine the parts with comma and space
        return `${firstPart}, ${lastPart}`;
    }
}
// Example usage
const names1 = ["Ali", "Baber", "Akhtar", "Danial"];
const names2 = ["Ammar"];
const names3 = [];
console.log(formatNames(names1)); // Output: Alice, Bob, Charlie and David
console.log(formatNames(names2)); // Output: Emily
console.log(formatNames(names3)); // Output: (empty string)
//28.Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
function fahrenheitToCelsius(temperatures) {
    // Loop through each temperature in the array
    for (let i = 0; i < temperatures.length; i++) {
        // Convert Fahrenheit to Celsius (formula: (°F − 32) × 5/9)
        const celsius = (temperatures[i] - 32) * 5 / 9;
        // Log the converted temperature with a formatted message
        console.log(`${temperatures[i]}°F is equivalent to ${celsius.toFixed(1)}°C`);
    }
}
// Example usage
const fahrenheitTemps = [32, 77, 100];
fahrenheitToCelsius(fahrenheitTemps);
//29.Write a function minMaxAverage that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers.
function minMaxAverage(arr) {
    if (!arr.length) { // Handle empty array case
        return {
            min: undefined,
            max: undefined,
            average: undefined,
        };
    }
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const average = sum / arr.length;
    return {
        min,
        max,
        average,
    };
}
const ArrAvg = [25, 30, 45, 29];
console.log("The min,max and average:", minMaxAverage(ArrAvg));
//30.Create a function swapElements that swaps two specified indices in an array.
function swapElements(arr, index1, index2) {
    // Check for valid indices
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error('Invalid index provided');
    }
    // Swap elements using destructuring assignment
    const arr2 = [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr2;
}
const swapElM = [1, 2, 3, 4, 5];
console.log("Swaped Elements:", swapElements(swapElM, 1, 2));
//31.Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.
function countCharacter(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
let strCount = "i";
let count = countCharacter("This is illman", strCount);
console.log(`Count of ${strCount} , is:`, count);
//32.Create a 'to-do list' array of objects where each object has properties task and completed (a boolean). Write a function to log only the tasks that are not yet completed.
// Define the to-do list array
const todoList = [
    { task: "Buy groceries", completed: false },
    { task: "Finish this project", completed: true },
    { task: "Clean the house", completed: false },
    { task: "Call mom", completed: true },
];
// Function to log incomplete tasks
function logIncompleteTasks(list) {
    // Loop through the list
    for (const item of list) {
        // Check if the task is not completed
        if (!item.completed) {
            console.log(item.task); // Log the task
        }
    }
}
// Call the function to log incomplete tasks
logIncompleteTasks(todoList);
//33.Write a function that takes an array of integers and sorts them from smallest to largest.
function sortNumbers(arr) {
    // Use the sort() method with a comparison function
    return arr.sort((a, b) => a - b);
}
// Example usage
const unSortNum = [3, 1, 4, 5, 2];
const sortedNumbers = sortNumbers(unSortNum);
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5]
//34.Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
function logArrayReverse(arr) {
    // Loop through the array from the end to the beginning
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
// Example usage
const numbs = [1, 2, 3, 4, 5];
const strings = ["apple", "banana", "cherry"];
logArrayReverse(numbs);
logArrayReverse(strings);
//35.Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.
function calculate(num1, operator, num2) {
    // Check for valid input types
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        console.log("Invalid input. Please enter numbers only.");
        return;
    }
    // Perform calculation based on operator
    switch (operator) {
        case "+":
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case "-":
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case "*":
            console.log(`${num1} * ${num2} = ${num1 * num2}`);
            break;
        case "/":
            // Handle division by zero
            if (num2 === 0) {
                console.log("Error: Cannot divide by zero.");
                return;
            }
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
            break;
        default:
            console.log("Invalid operator. Please use +, -, *, or /.");
    }
}
// Get user input
"use strict";
const ps2 = require('prompt-sync');
const prompt3 = ps2();
const num1 = parseFloat(prompt3("Enter the first number:"));
const operator = prompt3("Enter the operator (+, -, *, /):");
const num2 = parseFloat(prompt3("Enter the second number:"));
// Perform calculation
calculate(num1, operator, num2);
