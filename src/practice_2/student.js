//import Person from "./person.js";
var Person = require("./person.js");
//ES5
// function Student(name,age,klass){
//   Person.call(this,name,age);
//   // this.name = name;
//   // this.age = age;
//   this.klass = klass;
// }
// Student.prototype.introduce = function(){
//   return `I am a Student. I am at Class ${this.klass}.`;
// }
//ES6
class Student extends Person{
  constructor(name,age,klass){
    super(name,age);
    this.klass = klass;
  }
  introduce(){
      return `I am a Student. I am at Class ${this.klass}.`;
  }
}
// const student = new Student("Tom", 21, 2);
// console.log(student.klass);
module.exports = Student;
