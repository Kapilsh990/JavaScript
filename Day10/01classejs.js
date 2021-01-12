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
}

module.exports = User;

const rock = new User("rock","rock@email.com");
console.log(rock.getInfo());
rock.enrollCourse("angular");
console.log(rock.getCourseList());
console.log(rock.courseList);//this gonna give undefined after apllying # in front of courseList

//by applying # in front of varivale u make is private variable

