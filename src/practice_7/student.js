//ES6
var Person = require("./person.js");
let Class = require("./class.js");
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        return super.introduce()+` I am a Student. I am at Class ${this.klass.number}.`;
    }
}
module.exports = Student;
//
// let klass = new Class(2);
// const student = new Student("Tom", 21, klass);
// console.log(student.introduce());