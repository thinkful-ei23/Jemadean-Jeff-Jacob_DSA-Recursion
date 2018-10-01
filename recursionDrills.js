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
countSheep(3);


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
console.log(arrayDouble([2,4,6]));

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
    return "";
  }
  //recursive case
  return str[str.length-1] + reverseString(str.slice(0, str.length -1));
}

console.log(reverseString("Jeff is very smart and Jacob too"));