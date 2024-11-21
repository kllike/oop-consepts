class Student {
    #name
    #id
    #status

    constructor(name, id){
        this.#name = name
        this.#id = id
        this.#status = 'Active'
    }

    getId(){
        return this.#id
    }

    getName(){
        return this.#name
    }

    setName(name){
        this.#name = name
    }

    getStatus(){
        return this.#status
    }

    setStatus(status){
        const statuses = ['Active', 'Expelled', 'Finished', 'Inactive']
        if (statuses.includes(status)){
          this.#status = status  
        }
    }
}


const student = new Student("John", 1)
console.log(student)
console.log(student.getName())       // John
console.log(student.getId())       // 1
student.setName('John Doe')
console.log(student.getName())       // John Doe      
console.log(student.getStatus())   // Active
student.setStatus('In Vacation')
console.log(student.getStatus())   // Active
student.setStatus('Inactive')
console.log(student.getStatus())    // Inactive