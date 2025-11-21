let Operation = prompt("Please enter an operation(-, +, *, /)");
let Number1 = prompt("Please enter first number");
let Number2 = prompt("Please enter second number");
let Result;

if (Operation == "*") Result = Number1 * Number2;
else if (Operation == "-") Result = Number1 - Number2;
else if (Operation == "+") Result = Number1 - Number2;
else Result = Number1 / Number2;

console.log(Result);
document.write(`The operation is ${Operation} 

    The first number is${Number1} 

    The second number is${Number2}`);
