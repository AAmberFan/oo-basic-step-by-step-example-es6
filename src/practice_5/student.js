//ES6
var Person = require("./person.js");
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        //console.log(super.introduce());
        let intro = super.introduce() + ` I am a Student. I am at Class ${this.klass}.`;
        return intro;
    }
}
const student = new Student("Tom", 21, 2);
console.log(student.introduce());
module.exports = Student;
