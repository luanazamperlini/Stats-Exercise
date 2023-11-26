// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Perform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===

// Complete the functions below to make the program work!

/**
 * console.log(`You have given ${getLength(numbers)} numbers.`);
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  // TODO
  //input: an Array of Numbers
  //get the length of the array with the .length property

  const length = numbers.length;
  //output is the length
  return length;
}

/**
 * console.log(`The sum of your numbers is ${getSum(numbers)}.`);
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  // TODO
  //get the sum of the array using for loop

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum += element;
  }
  //output is the sum
  return sum;
}

/**
 * //console.log(`The mean of your numbers is ${getMean(numbers)}.`);
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  // TODO
  // the difference between the length and the sum of the integers
  const length = getLength(numbers);
  const sum = getSum(numbers);
  const mean = sum - length;

  //output is the mean
  return mean;
}

/**
 * //console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
//min = [0]
//if (min > element){
//  min = element;
//}
function getMin(numbers) {
  // TODO
  //create a variable "min" to storage the minValue;
  let minValue = numbers[0];
  // loop through our array to locate the min
  for (let i = 1; i < numbers.length; i++) {
    const element = numbers[i];
    // make an if statement where if min is greater than any other element in the array,
    if (minValue > element) {
      //update the value of min = element (you have found a new min)
      minValue = element;
    }
  }

  //output is the min
  return minValue;
}

/**
 * //console.log(`The largest of your numbers is ${getMax(numbers)}.`);
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  // TODO
  //create a variable "max" to storage the maxValue;

  let maxValue = 0;
  // loop through our array to locate the max
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    // make an if statement where if max is less than any other element in the array,
    if (maxValue < element) {
      //update the value of max = element (you have found a new max)
      maxValue = element;
    }
  }
  //output is the max
  return maxValue;
}

/**
 * 
//console.log(`The range of your numbers is ${getRange(numbers)}.`);
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  // TODO
  // create a variable max to store the value of getMax
  const max = getMax(numbers);
  // create a variable min to store the value of getMin
  const min = getMin(numbers);
  // create a variable range witch is  (max - min)
  const range = max - min;
  // return range
  return range;
}

/**
//console.log(`The even numbers you gave are ${getEvens(numbers)}.`);

 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  // TODO
  // create a new array to store all the even elements
  const evensArr = [];
  // loop through the array to get each element
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    // if the element is even
    if (element % 2 === 0) {
      // add it to our evens array
      evensArr.push(element);
    }
  }
  // return evens array
  return evensArr;
}

/**
 * //console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  // create a new array to store all the even elements
  const oddArr = [];
  // loop through the array of numbers to get each element
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    // if the element is even
    if (element % 2 !== 0) {
      // add it to our evens array
      oddArr.push(element);
    }
  }
  // return evens array
  return oddArr;
}
