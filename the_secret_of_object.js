// let protoRabbit = {
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   },
//   say() {
//     console.log(this);
//   }
// };
// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak("SKREE");
// killerRabbit.say();

//Classes
/*
JavaScript’s prototype system can be 
interpreted as a somewhat informal take on 
an object-oriented concept called classes. 
A class defines the shape of a type of 
object—what methods and properties it has. 
Such an object is called an instance of the 
class. 
*/
// function Rabbit(type) {
//   this.type = type;
// }
// Rabbit.prototype.speak = function(line) {
//   console.log(`This ${this.type} rabbit says '${line}`);
// };
// let weirdRabbit = new Rabbit("weird");
// weirdRabbit.speak("hi");

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`This ${this.type} rabbit says '${line}'`);
  }
  say = () => {
    console.log(this);
  };
}

let killerRabbit = new Rabbit("killer");
killerRabbit.type = "HAha";
killerRabbit.speak("Hi");
killerRabbit.say();

//Exercise
/*
Write a class Vec that represents a vector in 
two-dimensional space. It takes x and y parameters 
(numbers), which it should save to properties of the 
same name.

Give the Vec prototype two methods, plus and minus, that 
take another vector as a parameter and return a new vector 
that has the sum or difference of the two vectors’ 
(this and the parameter) x and y values.

Add a getter property length to the prototype that computes 
the length of the vector—that is, the distance of the
 point (x, y) from the origin (0, 0). 
 */
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(obj) {
    return { x: this.x + obj.x, y: this.y + obj.y };
  }

  minus(obj) {
    return { x: this.x - obj.x, y: this.y - obj.y };
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);

/*
Write a class called Group (since Set is already 
taken). Like Set, it has add, delete, and has 
methods. Its constructor creates an empty group, 
add adds a value to the group (but only if it 
isn’t already a member), delete removes its 
argument from the group (if it was a member), 
and has returns a Boolean value indicating whether 
20gument is a member of the group.

Use the === operator, or something equivalent such 
as indexOf, to determine whether two values are the 
same.

Give the class a static from method that takes an 
iterable object as argument and creates a group 
that contains all the values produced by iterating 
over it.
 */

class Group {
  constructor(arr) {
    this.arr = arr;
  }

  static from(value) {
    return new Group(value);
  }

  has(num) {
    if (this.arr.indexOf(num) >= 0) {
      return true;
    }
    return false;
  }

  add(num) {
    if (this.arr.indexOf(num) < 0) {
      this.arr.push(num);
    }
  }

  delete(num) {
    if (this.arr.indexOf(num) >= 0) {
      this.arr.splice(this.arr.indexOf(num), 1);
    }
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(300);
group.add(10);
console.log(group.arr);
group.delete(10);
console.log(group.arr);
console.log(group.has(10));

class GrupIterator {
  constructor(values) {
    this.values = value;
    for (let value of values) {
      console.log(value);
    }
  }

  static from(arr) {
    this.values = arr;
  }
}
