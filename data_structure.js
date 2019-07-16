let journal = [];
function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], "7/8");
addEntry("BBQ", "7/10");
console.log(journal);

console.log(Math.sqrt(144));

//JSON data
/*Example
{
  "squirrel": false,
  "events": ["work", "touched tree", "pizza", "running"]
} */

/*JavaScript gives us the functions JSON.stringify 
and JSON.parse to convert data to and from this 
format. The first takes a JavaScript value and 
returns a JSON-encoded string. The second takes 
such a string and converts it to the value it encodes.*/
let string = JSON.stringify({ squirrel: false, events: ["weekend"] });
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]

/*
Write a range function that takes two arguments, 
start and end, and returns an array containing all
 the numbers from start up to (and including) end.
 
 Next, write a sum function that takes an array of 
 numbers and returns the sum of these numbers. Run 
 the example program and see whether it does indeed 
 return 55.

As a bonus assignment, modify your range function to 
take an optional third argument that indicates the “step” 
value used when building the array. If no step is given, 
the elements go up by increments of one, corresponding to 
the old behavior. The function call range(1, 10, 2) should 
return [1, 3, 5, 7, 9]. Make sure it also works with 
negative step values so that range(5, 2, -1) 
produces [5, 4, 3, 2].
 */

function range(from, to, step) {
  let numArr = [];
  if (step === undefined) {
    if (from > to) {
      for (let i = from; i >= to; i--) {
        numArr.push(i);
      }
    }
    for (let i = from; i <= to; i++) {
      numArr.push(i);
    }
  } else if (step >= 0) {
    for (let i = from; i <= to; i += step) {
      numArr.push(i);
    }
  } else {
    for (let i = from; i >= to; i += step) {
      numArr.push(i);
    }
  }
  return numArr;
}

function sum(arr) {
  var sumNum = 0;
  for (let i = 0; i < arr.length; i++) {
    sumNum += arr[i];
  }
  return sumNum;
}
console.log(range(5, 2));
console.log(range(1, 15));
console.log(range(2, 10, 2));
console.log(range(5, 2, -2));
console.log(sum(range(1, 5)));

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: null
  }
};

function arrToList(arr) {
  let list = { value: arr[i], rest: null };

  for (var i = arr.length - 1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list
    };
  }
  return list;
}
console.log(Object.keys(arrToList([10, 20, 30])));

