//import Student from "./student";
let Student = require("./student.js")
let Person = require("./person.js");
let Class = require("./class.js");
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass==null){
            return super.introduce()+` I am a Teacher. I teach No Class.`;
        }else{
            return super.introduce()+` I am a Teacher. I teach Class ${this.klass.number}.`;
        }
    }
    introduceWith(student){
        if(student.klass.number === this.klass.number){
            return super.introduce()+` I am a Teacher. I teach ${student.name}.`;
        }else{
            return super.introduce()+` I am a Teacher. I don't teach ${student.name}.`;
        }

    }
}
let klass = new Class(1);
let studentJerry = new Student("Jerry", 8, klass);
const teacher = new Teacher("Tom", 21, klass);

console.log(teacher.klass);
module.exports = Teacher;