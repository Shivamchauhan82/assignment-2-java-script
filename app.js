// Importing the other JavaScript file that contains the functions
const { printWelcomeMessage, convertMeasurement, doMathOperation, advancedFunction } = require('./utilities');

// Call/invoke a list of functions from the utilities file
printWelcomeMessage("shivam", "shivam");
console.log(convertMeasurement(30, "Celsius", "Fahrenheit"));
console.log(doMathOperation(5, '*', 10));
console.log(advancedFunction(5, 10));
