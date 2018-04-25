let Student  = require("./student");
let Person = require("./person");
let Teacher = require("./teacher");
class Class {
    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }
    registerJoinListener(teacher){
        if(teacher.klasses.includes( this)){
            this._teacher = teacher;

        }
    }
    registerAssignLeaderListener(teacher){
        if(teacher.klasses.includes( this)){
            this._teacher = teacher;

        }
    }
    assignLeader(student){
        if(student.klass == this) {
            this.leader = student;
            if (this._teacher) {
                console.log(`I am ${this._teacher.name}. I know ${student.name} become Leader of Class ${this.number}.`);
            }
        }else{
            console.log("It is not one of us.");
        }

    }

    appendMember(student){
        student.klass = this;
        if (this._teacher) {

            console.log(`I am ${this._teacher.name}. I know ${student.name} has joined Class ${this.number}.`);
        }
    }
}
module.exports = Class;
// const klass = new Class(2);
// const otherKlass = new Class(3);
// const student = new Student(1, "Jerry", 21, klass);
// const teacher = new Teacher(1, "Tom", 21, [klass, otherKlass]);
// klass.registerAssignLeaderListener(teacher);
//
// klass.assignLeader(student);
