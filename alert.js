//aler, prompt and confirm are not a part of Js, but for browsers
//Alert:
//alert('Hallo');
//alert({a: "a"}); 
//Confirm:
//let result = confirm('Are you sure you wanna delete this?');
//console.log(result);
//Promt:
let result = prompt('Are you sure you wanna delete:');
console.log(result);
//If you cancel, then, you will get something like... null.
//Because you not assign a value to the result variable.