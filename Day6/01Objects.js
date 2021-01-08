var User = function(firstName,courseCount) {
    this.firstName = firstName;//type to initianlize a object
    this.courseCount = courseCount;//functional way to create objects
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstname = function() {
    console.log(`You firstname is: ${this.firstName}`);
};


var kapil = new User("Kapil",2);// new keyword creating unique object forr user
kapil.getCourseCount();
kapil.getFirstname();
//console.log(kapil);

var sam = new User("sam",1);
console.log(sam);
 
//Better Code with Object Chain
if (sam.hasOwnProperty("firstName")) {
    sam.getFirstname();
}