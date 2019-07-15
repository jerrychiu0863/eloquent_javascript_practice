//Destructoring
var foo = {
  bar: 1,
  baz: 2
};

var { bar, baz } = foo;
//alert(baz);

var persons = ["you", "he", "me"];
var [firstPerson, secondPerson] = persons;
console.log(firstPerson, secondPerson);

var name = "Will";
var age = 34;


function calcBmi(weight, height, callback) {
  var bmi = wight / Math.pow(height, 2);
}