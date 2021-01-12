class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    #courseList = [];
    getInfo(){
        return {name: this.name,email:this.email};
    }
    enrollCourse(name){
        this.#courseList.push(name)
    }
    getCourseList() {
        return this.#courseList;
    }
    login() {
        return "You are logged in";
    }//use static keyword for privacy so sub class cannot access it
}

class Subadmin extends User{
    constructor(name, email) {
        super(name,email);
    }
    getAdminInfo(){
        return "I am Admin"
    }
    login() {
        return "Login for admin only ";
    }
}

module.exports = User;

const rock = new User("rock","rock@email.com");
// console.log(rock.getInfo());
rock.enrollCourse("angular");
// console.log(rock.getCourseList());
// console.log(rock.courseList)


const tom = new Subadmin("tom","tomemial");
console.log(tom.getInfo());

console.log(tom.login());//return the admin login 


