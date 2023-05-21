// calculator.js

// Read command-line arguments
const args = process.argv.slice(2);

// Check if the correct number of arguments is provided
if (args.length !== 3) {
  console.log('Usage: node calculator.js <operation> <first value> <second value>');
  process.exit(1);
}

// Extract the operation and operands from the arguments
const operation = args[0];
const firstValue = Number(args[1]);
const secondValue = Number(args[2]);

// Define the operations and their corresponding calculation functions
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  '**': (a, b) => Math.pow(a, b)
};

// Check if the operation is supported
if (!(operation in operations)) {
  console.log('Unsupported operation:', operation);
  process.exit(1);
}

// Perform the calculation based on the operation
const calculation = operations[operation];
const result = calculation(firstValue, secondValue);

// Output the result
console.log(`${firstValue} ${operation} ${secondValue} = ${result}`);
