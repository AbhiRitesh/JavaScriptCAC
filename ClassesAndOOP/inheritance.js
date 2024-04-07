class User {
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourses(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("Chai", "chai@teacher.com", "123")

chai.addCourses()

const masalaChai = new User("masalaChai")

chai.logMe()
masalaChai.logMe()

console.log(chai instanceof User)