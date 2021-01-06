var user = {
    firstName : "Kapil",
    lastName : "Sharma",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses` ;
    },
};

console.log(user.firstName);
console.log(user.getCourseCount());//0
user.buyCourse("Angular");
console.log(user.getCourseCount());//1

