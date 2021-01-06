// For all regular function calls ,this points to window object 
 
console.log(this);//an empty object on node or editors 
 
var user = {
    firstName:"Kapil",
    courseCount:4,
    getCourseCount: function(){
        console.log("LINE 7", this);// gives output whole user object 
        function sayHello(){
            console.log("Hello");
            console.log("LINE 12 ",this);//not goonna gives user object as ouput it is in regular fuction  so it stores window object i.e global object  
        }
        sayHello();
    },
}; 

user.getCourseCount();// not a regular fun. count this through an object







