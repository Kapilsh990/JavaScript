//Allow user to access stickers
//logged in from email
// logged in from facebook 
//logged in from Google

var email = true;
var google = false;
var facebook = false;

if (email || facebook || google) {
    console.log("Login Success");
}