const User = require("./01classejs.js")

const kapil = new User("kapil","kapil0559@gmail.com"); 

console.log(kapil.getInfo());
kapil.enrollCourse("InterCourse_xD");
kapil.enrollCourse("TheoneWhoChintuDoing");

courses = kapil.getCourseList();

courses.forEach((c) => {
    console.log(c);
});
