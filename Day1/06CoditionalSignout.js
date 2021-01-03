// Show user a signout button if he/she is authenticated 
// otherhwise show him option to login/sinup

var authenticated = true;

if(authenticated) {
    console.log("Show signout button");
}else{
    console.log("show login button");
}

authenticated ? console.log("signout") : console.log("login") ;
