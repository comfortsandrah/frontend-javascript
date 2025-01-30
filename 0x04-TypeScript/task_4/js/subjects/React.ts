namespace Subjects {
  export class React extends Subject {
    getRequirements() {
      return "Here is the list for requirements for react";
    }
    getAvailableTeacher(){
        if(this.teacher.experienceTeachingReact) {
            return `Available Teacher: ${this.teacher.firstName}`;
        }else{
            return "No available Teacher"
        }
    }
  }
}
