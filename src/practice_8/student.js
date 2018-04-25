
let Class= require("./class.js");
let Person  = require("./person.js");
class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass.leader===this){
            return super.introduce()+` I am a Student. I am Leader of Class ${this.klass.number}.`;
        }
        else{
            return super.introduce()+` I am a Student. I am at Class ${this.klass.number}.`;
        }
       // return super.introduce()+``;
    }
}
// const klass = new Class(8);
// const student = new Student(1, "Jerry", 21, new Class(4));
//
// klass.assignLeader(student);
// console.log(student.introduce());
module.exports  =Student;