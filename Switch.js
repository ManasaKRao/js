var user = "abc";

switch(user)
{
    case "admin" : 
        console.log("you have full access");
        break;
    case "subadmin" :
        console.log("you have little access");
        break;
    default : 
        console.log("oops! no access");
        break;
}