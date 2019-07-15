/*Write a function min that 
takes two arguments and returns their minimum.*/
function min(num1, num2) {
  return Math.min(num1, num2);
}
console.log(min(0, 10));
console.log(min(0, -10));

// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

function getStr(str) {
  return str[0];
}
console.log(getStr("aed"));

function countBs(str) {
  let counts = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "B") {
      counts++;
    }
  }
  return counts;
}
console.log(countBs("BBsB"));

function countChar(str, target) {
  let counts = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === target) {
      counts++;
    }
  }
  return counts;
}
console.log(countChar("kakkerlakkkk", "a"));
