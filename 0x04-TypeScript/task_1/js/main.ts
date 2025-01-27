// build a Teacher interface 
interface Teacher{
    readonly firstName: string; //should only be modifiable when a Teacher is first initialized
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; //optional
    location: string;
    [propName: string]:any; //possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute
}

const teacher3: Teacher = {
    firstName: 'Sandrah',
    fullTimeEmployee: false,
    lastName: 'Comfort',
    location: 'Germany',
    contract: 'false',
}

console.log(teacher3);

//an interface named Directors that extends Teacher

interface Directors extends Teacher{
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
}

console.log(director1);

// interface for the function named printTeacherFunction
interface printTeacherFunction{(firstName: string, lastName: string): string;};

const printTeacher: printTeacherFunction = function(firstName:string, lastName:string) {
    return firstName.substring(0,1) + '. ' + lastName // returns the first letter of the firstName and the full lastName
}
console.log(printTeacher("John","Doe"))

// Interface that describes The constructor of a class and the class itself 

interface IStudent{
    firstName: string;
    lastName: string;
    workOnHomework():string;
    displayName():string;
}

// Write a Class named StudentClass
class StudentClass implements IStudent{
    firstName: string;
    lastName: string;

    // constructor 
    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string{
        return "Currently working";
        }
    displayName(): string{
        return this.firstName;
    }
}

const student = new StudentClass("Sandrah", "Lewa");
console.log(student.displayName()); 
console.log(student.workOnHomework()); 
