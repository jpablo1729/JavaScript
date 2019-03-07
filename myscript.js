// Functions 
// Parameters
function myFirstFunction(myString1, myString2 = 0) {//With zero set a default value :)
    console.log(myString1);
    console.log(myString2);
};
myFirstFunction("Esto es una salida a consola :)"); //Invoque the function
myFirstFunction("Esto es una salida a consola :)", "123"); //Invoque the function
myFirstFunction(123); //Invoque the function

// Return
// Example 1:
function myFirstReturnFunction(myString1, myString2) {
    return myString1 + " " + myString2;
};

let myResult = myFirstReturnFunction("Juan", "Pablo");
console.log(myResult);
//For not return functions, JS by defect use undefined

// Example 2:
function mySecondReturnFunction(name) {
    Name = {name: name}
    
    return Name.name;
};

// Example 3:
let myName = mySecondReturnFunction("Carlos");
console.log(myName);

function myThirdReturnFunction() {
    
    return function(string) {
        console.log("myThirdReturnFunction return a function!" + string);
    };
};

let aFunction = myThirdReturnFunction(); // Here return also an undefine because the anonym func does not return anything
console.log(aFunction("Fuck Yeah!"));

//Scoping
//How long your variable lives!
