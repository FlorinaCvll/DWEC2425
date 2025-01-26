/*
console.clear();
console.log("Hello, World!");


console.error("This is an error message!");


console.warn("This is a warning message!");

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];
console.table(users);


console.group("User Details");
console.log("Name: Alice");
console.log("Age: 25");
console.groupEnd();


console.time("timer");
for (let i = 0; i < 1000000; i++) {
    // Do nothing
}
console.timeEnd("timer");

let var1 = 1;
let var2 = 2;
console.debug("Debug message: Variables are:", { var1, var2 });

console.info("This is an informational message.");
console.assert(1 === 2, "This will print because the assertion is false");
console.assert(1 === 1, "This will not print because the assertion is true");


console.count("Counter");
console.count("Counter");
console.countReset("Counter");
console.count("Counter");


function myFunction() {
    console.trace("Trace message");
}
myFunction();
*/

console.log("Log message");
console.debug("Debug message");
console.info("Info message");
console.warn("Warning message");
console.error("Error message");
console.assert(1 === 2, "Assertion failed");
console.count("Counter");
console.count("Counter");
console.countReset("Counter");
console.clear();
console.group("Grouped messages");
console.log("Grouped log message");
console.groupEnd();
console.time("Timer");
console.timeEnd("Timer");
console.trace("Trace message");
