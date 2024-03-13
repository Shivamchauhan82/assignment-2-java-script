// First Function: Print welcome message
function printWelcomeMessage(firstName, lastName) {
    if (!firstName || !lastName) {
      console.error("Error: Missing first name or last name");
      return;
    }
    console.log(`Welcome ${firstName} ${lastName} to Georgian@ilac College`);
  }
  
  // Second Function: Convert measurement unit
  function convertMeasurement(value, fromUnit, toUnit) {
    if (isNaN(value) || typeof fromUnit !== 'string' || typeof toUnit !== 'string') {
      console.error("Error: Invalid input");
      return;
    }
    if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
      return (value * 9/5) + 32;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
      return (value - 32) * 5/9;
    } else {
      return "Unsupported conversion";
    }
  }
  
  // Third Function: Perform math operation
  function doMathOperation(...args) {
    if (args.length < 3) {
      console.error("Error: Insufficient arguments");
      return;
    }
    const [value1, operator, value2] = args;
    if (isNaN(value1) || isNaN(value2) || typeof operator !== 'string') {
      console.error("Error: Invalid input");
      return;
    }
    switch (operator) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        if (value2 === 0) {
          console.error("Error: Division by zero");
          return;
        }
        return value1 / value2;
      default:
        return "Unsupported operation";
    }
  }
  
  // Fourth Function: Advanced function
  function advancedFunction(value1, value2) {
    // Check if both values are numbers
    if (isNaN(value1) || isNaN(value2)) {
      console.error("Error: Invalid input");
      return;
    }
    // Add your advanced function logic here
    return value1 ** value2; // Example: Return the exponentiation of the two values
  }
  
  // Exporting functions to be used in other files
  module.exports = {
    printWelcomeMessage,
    convertMeasurement,
    doMathOperation,
    advancedFunction
  };
  