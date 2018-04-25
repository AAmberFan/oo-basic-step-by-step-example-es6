class Class {
    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }
    registerAssignLeaderListener(teacher){
        if(teacher.klass == this){
            this.teacher = teacher;
        }
    }
    assignLeader(student){
        if(student.klass == this){
            this.leader = student;
            if(this.teacher){
                return `"I am ${this.teacher.name}. I know ${student.name} become Leader of Class ${this.number}."`
            }
        }else{
            console.log("It is not one of us.");
        }

    }


    appendMember(student){
        student.klass = this;
        if(this.teacher){
            return `I am ${this.teacher.name}. I know ${student.name} has joined Class ${this.number}.`;
        }
    }
}
module.exports = Class;
