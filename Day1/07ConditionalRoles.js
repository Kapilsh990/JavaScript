// Create an application with following roles:
// admin - gets full access
// subadmin - get access to create/delete courses
// testprep - get acces to create/delete tests
// user -  get access to consume content 

var user = "testprep";

switch(user) {
    case "admin":
        console.log("you get full access");
        break;
    case "subadmin":
        console.log("get access to create/delete courses");
        break;
    case "testprep":
        console.log("get acces to create/delete tests");
        break;
    case "user":
        console.log("get access to consume content");
        break;

    default:
        console.log("Traial User")
        break;
}