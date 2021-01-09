const kapil = {
    firstName : "Kapil",
    lastName :"Sharma",
    role: "admin",
    courseCount: 3,
    getInfo : function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        his role is ${this.role}
        and he is studying ${this.courseCount} course
        `);
    },
};


const kj = {
    firstName: "kill",
    lastName: "joy",
    role: "Agent",
    courseCount: 4
};

// kapil.getInfo();
// kj.getInfo();
//borrow a method using bind
//getinfo means calling the refrence and getInfo() is calling the method      
kapil.getInfo.bind(kj)();//gives info of kj

//kapil.getInfo.call(dj);// same as above line 

