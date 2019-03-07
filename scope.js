//Scope
//How long the valiables lives
//Example 1:
var myName = "Pablo",
    myAge = 25;
let myDinner = "Sopa";
//console.log(myDinner); //To show the global scope for var! 

if (myAge > 10) {
    //var myDinner = "Pizza";
    let myDinner = "Pizza";
    console.log(myDinner);
}  

console.log(myName);
console.log(myAge);
console.log(myDinner);
//Notes: 
//1. if is a block, like: else, for, functions and others between {}.
//2. myName and myAge are declare on top, so, I have 
//everywhere scope for the variables.
//3. I have value of Dinner, if Im going in if.
//Otherwise, I become an undefined (but any error)
//That means, myDinner as variable (var), is also like
//a ghost on top declare. That makes Js:

// var myName = "Pablo",
// myAge = 25,
// var myDinner;

// if (myAge > 10) {
//    var myDinner = "Pizza";
// }  

//if we use var.

//We do want a block scope for if... the we use let!
//If we uncomment 11 but comment 10, then we got an error!
//let does not define a variable with a global scope,
//only block scope!

//NOTE: VAR IS NOT A BLOCK {} SCOPE!!! 
{
    var b = 100;
}
console.log(b);

//NOTE: LET IS A BLOCK SCOPE!!!
//NOTE: VAR IS NOT A BLOCK {} SCOPE, therefore function!!! 
{
    let c = 100;
}
console.log(c);

//NOTE: VAR IS A FUNCTION SCOPE!!!
//Exp. error:
function myFunction() {
    var a = 100;
}
myFunction();
console.log(a);

//NOTE: CONST AND LET... THE SAME RULE, THEY ARE THE SCOPERS!!!
