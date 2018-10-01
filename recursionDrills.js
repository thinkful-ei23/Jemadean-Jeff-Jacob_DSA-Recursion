'use strict';
// Counting Sheep

// What is the input to the program
// A whole number (of sheep you have)

// What is the output of the program
// A whole number plus a string
// string template: `${num}- Another sheep jump over the fence`

// What is the input to each recursive call
// num - 1

// What is the output of each recursive call
//`${num - 1} - Another sheep jump over the fence`

function countSheep(num) {
  if (num === 1) {
    console.log(`${num} - Another sheep jump over the fence`);
    return;
  }
  console.log(`${num} - Another sheep jump over the fence`);
  countSheep(num - 1);
}
// countSheep(3);


// Array Double

// Our array example = [1, 2, 3]
// input? : an array

// output? : an Array with every number doubled

// input to each recursive call? :
//    array.slice(1)

// output to each recursive call? :
//  [(array[0] * 2), ...arrayDouble(array.slice(1))]

function arrayDouble(array) {
  // base case
  if (!array.length) {
    return [];
  }
  return [(array[0] * 2), ...arrayDouble(array.slice(1))];
}
// console.log(arrayDouble([2,4,6]));

// Reverse String

// What is the input to the program
// A string

// What is the output of the program
// The string in reverse

// What is the input to each recursive call
//

// What is the output of each recursive call
//

function reverseString(str) {
  //base case
  if (str.length === 0) {
    return '';
  }
  //recursive case
  return str[str.length-1] + reverseString(str.slice(0, str.length -1));
}

// console.log(reverseString('Jeff is very smart and Jacob too'));

// nth Triangular Number

// What is the input to the program?
// A natural number

// What is the output of the program?
// the nth triangular number

// What is the input to each recursive call?
// num - 1

// What is the output of each recursive call
// num + triangularNumber(num - 1)

function triangularNumber (num) {
  if (num < 1) {
    return 0;
  }
  return num + triangularNumber(num - 1);
}
// console.log(triangularNumber(9));

// STRING SPLITTER

// Split a string based upon a separator (similar to String.prototype.split)

// input = string
// output = array of strings split on 'separator'
// input to each recursive call
// output to each recursive call

function stringSplitter(str, separator) {
  // base case
  if (str.indexOf(separator) === -1) {
    return [str];
  }
  return [str.substring(0, str.indexOf(separator)), ...stringSplitter(str.slice(str.indexOf(separator) + 1), separator)];
}

// console.log(stringSplitter('this is a string', ' '));
// console.log(stringSplitter('this is a string', 'is'));

// BINARY REPRESENTATION

// input = number
// output = binary representation of that number
// input to each recursive call
// output to each recursive call

function binaryRep(num) {
  //base case
  if (num <= 0) {
    return '';
  }
  //recursive case
  const binary =  Math.floor(num % 2);
  return binaryRep(Math.floor(num/2)) + binary;
}

// console.log(binaryRep(25));

// Factorial
// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and one. The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120

// input = number
// output = factorial of the input (5!)
// recursive input = number * (number - 1)
// recursive output = 3

function factorialize(num) {
  if (num < 0 ) {
    return undefined;
  }
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

// console.log(factorialize(5));

// FIBONACCI

// input = number
// output = sequenced array of fibonacci numbers
// 1 1 2 3 5 8 13

function fibonacci(num) {
  // base case
  
  if (num === 0 ) {
    return 0;
  }
  if (num === 1 || num === 2) {
    return 1;
  }
  let fibNum = fibonacci(num - 1) + fibonacci(num - 2);
  console.log(fibNum);
  return fibNum;
}

console.log(fibonacci(7));

test;