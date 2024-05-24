var array1 = ["MANASA", "SHREYA", "ANUSHA"];
console.log(array1);

var array2 = new Array("MANASA","SHREYA","ANUSHA");
console.log(array2);


//ACCESS
console.log(array1[0]);
console.log(array2[1]);

//FIND LENGTH
console.log(array1.length);


//REPLACING

array1[0] = "MANASA RAO";
console.log(array1);

//ADD AN ELEMENT AT FRONT 
array2.unshift("ANUSHAPOOJARY");
console.log(array2);

//DELETE FROM BEG
array2.shift();
console.log(array2);