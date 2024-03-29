/*
Use the reduce method in combination with the concat method 
to “flatten” an array of arrays into a single array that has 
all the elements of the original arrays.
 */
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((a, b) => a.concat(b), []));

/*
Implement every as a function that takes an array and a 
predicate function as parameters. Write two versions, one 
using a loop and one using the some method. 
*/
function every(arr, test) {
  let passed = [];
  for (let e of arr) {
    if (test(e)) {
      passed.push(e);
    }
  }
  if (passed.length !== arr.length) {
    return false;
  }
  return true;
}
console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));
console.log([1, 3, 5].some(e => e < 10));
console.log([].some(e => e < 10));

/*
Write a higher-order function loop that provides something 
like a for loop statement. It takes a value, a test function, 
an update function, and a body function. Each iteration, it 
first runs the test function on the current loop value and 
stops if that returns false. Then it calls the body function, 
giving it the current value. Finally, it calls the update 
function to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do 
the actual looping. 
*/
function loop(value, test, update, body) {
  for (var i = value; test(value); update(value)) {
    body(i);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
