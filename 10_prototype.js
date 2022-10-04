let arrayone = [1, 2, 3];

let userName = function (name, count) {
  this.name = name;
  this.count = count;
  this.getcourseCount = function () {
    console.log(`The course count is ${this.count}`);
  };
};

userName.prototype.getName = function () {
  console.log(`The user name is ${this.name}`);
};

let userOne = new userName("Anurag", 7);
userOne.getcourseCount();

// prototypal Inheritance
//
let ObjOne = {
  fullName: "Anurag",
  add: "Jaipur",
  getName: function () {
    console.log(this.fullName + " ...  " + this.add);
  },
};

let objTwo = {
  fullName: "Hitesh Sir",
};
objTwo.__proto__ = ObjOne;
console.log(objTwo);
objTwo.getName();
