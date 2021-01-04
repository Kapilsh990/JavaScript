/*
Define a function that can ans the role of a user .
input: getUserRole(name,role)
*/


function getUserRole(name, role){
    switch(role) {
        case "admin":
            return `${name} is admin with all access`
            break;
        case "subadmin":
            return `${name} is subadmin with all access to create/delete course`
                break;
        case "testprep":
            return `${name} is testprep with all access to create test`
            break;

        case "user":
            return `${name} is user to coonsume content`
            break;

        default:
            return `${name} is trial user`;
            break;
    }
}


console.log(getUserRole("kapil","testprep"));

var getRole = getUserRole("kapil", "user");

console.log(getRole);
