
class Person {
    constructor(){
        this.firstname = ""
        this.lastname = ""
        this.age = 0
    }
}

class Student {
    constructor(firstname, lastname, age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
}

const person1 = new Person()
person1.firstname = 'John'
person1.lastname = 'Doe'
person1.age = 30

const person2 = new Person()
person2.firstname = 'Mary'
person2.lastname = 'Jane'
person2.age = 35

const person3 = new Person()
person3.firstname = 'Mary'
person3.lastname = 'Poppins'
person3.age = 40

console.log(person1)
console.log(person2)
console.log(person3)

console.log()

const student1 = new Student('John', 'Doe', 30)
const student2 = new Student('Mary', 'Jane', 35)
const student3 = new Student('Mary', 'Poppins', 40)

console.log(student1)
console.log(student2)
console.log(student3)
