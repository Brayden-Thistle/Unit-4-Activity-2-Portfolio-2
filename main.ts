/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-12-30
 * @fileoverview this program displays the fibonacci series up to a given limit from the user.
 */
// variable to determine when to stop
const limit = Number(prompt("Enter the limit for the Fibonacci series:"));

//variables
let NumberOne = 0;
let NumberTwo = 1;
let NextNumber = 0;

//displays the current number in the series
let display = "";

//while loop
while (NumberOne < limit) {
  display += NumberOne + " ";
  NextNumber = NumberOne + NumberTwo
  NumberOne = NumberTwo
  NumberTwo = NextNumber
}
//output
console.log(display);

console.log("\nDone.");