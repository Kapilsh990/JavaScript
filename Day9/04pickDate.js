//destructure the data
const user = ["kapil",20,"student"];

// var role = user[2];
// var age = user[1];

var [name,age,role] = user;

console.log(role);

const MyUser = {
    nam: "kapil",
    ag:"20",
    rol:"student",
};

console.log(MyUser.ag);

const {nam,ag,rol} = MyUser

console.log(ag);
