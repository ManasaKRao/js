//LECTURE 2

var firstName = "MANASA";
var MiddleName = "K";
var lastName="Rao";


var emailId = "manasakrao@gmail.com";
var mobileNum = 9483309854;

var countryName = "India";
var stateName = "Karnataka";

var isLoggedFromGoogle = false;
var count =0;


console.log(`
Hello my name is : ${firstName}  ${MiddleName}  ${lastName}
and my email id is : ${emailId}
you can contact me on my number : ${mobileNum}
and I am a citizen of ${countryName} and state is ${stateName}
`);



//LECTURE -3

var costPrice = 1999;
var sellingPrice = 200;

var profitPercentage = (costPrice-sellingPrice)/100;
console.log(profitPercentage);

var displayProfitPercentage = Math.round(profitPercentage);
console.log(displayProfitPercentage);