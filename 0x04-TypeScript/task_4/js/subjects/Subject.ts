// write a Subject class in the same namespace named Subjects
namespace Subjects {
  export class Subject {
    public teacher: Teacher;

    setTeacher(teacher: Teacher) {
        this.teacher = teacher;
    }
  }
}
