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
