var user = {
    // key : value
    firstName : "Kapil",
    lastName : "Sharma",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn: true,
};

console.log(user.firstName);// . accessing a object
console.log(user[lastName]); // error 
console.log(user["lastName"]);

user.loginCount = 44;
console.log(user.loginCount);//44

console.table(user);
