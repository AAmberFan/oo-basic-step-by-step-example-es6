let Person = require("./person.js");
let Class = require("./class");
class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass.leader == this){
            return super.introduce()+` I am a Student. I am Leader of Class ${this.klass.number}.`;
        }
        else{
            return super.introduce()+ ` I am a Student. I am at Class ${this.klass.number}.`;
        }
    }
}
module.exports = Student;
// let  klass = new Class(2);
// const student = new Student(1, "Gg", 21, klass);
// console.log(student.introduce());