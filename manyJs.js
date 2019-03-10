//Objects:
console.log("Objects");
let obj = {
    keyname1: "value1",
    keyname2: "value2"
};

console.log(obj.keyname1);
console.log(obj["keyname2"]);

//To modify one value:

obj.keyname1 = "valueMod";

console.log(obj.keyname1);

console.log(obj);

let person = {
    name: "Pablo",
    chanel: "codedamn",
    website: "codedamn.com",
    istHTML: true
};

console.log(person);

//To erase the value of a key of a field

person.istHTML = undefined;

console.log(person);

//To erase an atributte or key

delete person.istHTML;

console.log(person);

//if we use const

const person1 = {
    name: "Pablo",
    chanel: "codedamn",
    website: "codedamn.com",
    istHTML: true
};

person1.name = "Juan";

console.log(person1); //constant protect the hole
//object but not the attributes.
//Give us an error!

//person1 = {
//    apellido: "Rama"
//};

//Arrays:
console.log("Arrays");
let objeto = {
    "0": "Hellow",
    "1": "World"
};

let arr = ["Hellow", "World"];

console.log(objeto[0] + objeto[1]);
console.log(arr[0] + arr[1]);
console.log(objeto);
console.log(arr);

console.log(arr.length);

//Do not used... we will lose the benefits for arrays!! Use an obeject for case
arr["pabloKey"] = "Im here";
arr[2] = "Im here";

console.log(arr);

//If-else
console.log("If-else");
let myName = "Pablo";

if(myName == "Pablo"){
    console.log("Es Pablo");
} else {
    console.log("Es otro");
}

//Switch-case:
console.log("Switch-case");
//Like other language, to use in many if!!!
//compare variables.
let expression = 10;
switch(expression) {
    case 10:
    case 20:
        console.log("Eres joven");
        break; //Por qué break? swicht trabaja en cascada... se cumple el primer caso y sigue en cascada.
        //con los casos de abajo, hasta llegar a un break!!!
    case 30:
        console.log("Eres viejo");
        break;
    default:
        console.log("Eres nada");
        break;
}

//Math operators
console.log("Math operators");
let number1 = 1;
let number2 = 2;
console.log("ADD: ", number1 + number2);
console.log("SUBS: ", number2 - number1);
console.log("MUL: ", number2 * number1);
console.log("DIV: ", number1 / number2);
console.log("POW: ", number2 ** 3);//2^3
console.log("INC: ", ++number1);//Incrementa 1
console.log("DEC: ", --number1);//Decrementa 1. Juega con el valor anterior!!! el incrementado.

//Increament
console.log("Increament");
//Exp 1. Does not change number in variable!
let myNumber = 1;
console.log("Example 1:");
console.log(myNumber);
console.log(myNumber + 1);
console.log(1 + myNumber);
console.log(myNumber);
//Exp 2. Does change number in variable, but initial does not show it
let myNumber2 = 1;
console.log("Example 2:");
console.log(myNumber2);
console.log(myNumber2++);//Incrementa, pero lo ejecuta despues
console.log(myNumber2);//muestra el incremento de la linea anterior
//Exp 3. Does change number in variable, but initial does show it
let myNumber3 = 1;
console.log("Example 3:");
console.log(myNumber3);
console.log(++myNumber3);//Incrementa, pero lo ejecuta inmediato
console.log(myNumber3);//muestra el incremento de la linea anterior
//Exp 4. 
let myNumber4 = 1;
console.log("Example 4:");
let numero = (myNumber4++) + (++myNumber4);// (1) + (1) = (2), (1+1) = (2) -> (2) + (2) = (4) 
console.log(numero);
let myNumber5 = 1;
let numero2 = (++myNumber5) + (myNumber5++);// (1+1) = (2), (1) + (1) = (2) -> (2) + (2) = (4)
console.log(numero2);
//Exp 5. 
let myNumber6 = 2;
console.log("Example 5:");
let numero3 = (myNumber6--) + (--myNumber6);// (2) - (1) = (1), (2-1) = (1) -> (1) + (1) = (2) 
console.log(numero3);
let myNumber7 = 2;
let numero4 = (--myNumber7) + (myNumber7--);// (2-1) = (1), (2) - (1) = (1) -> (1) + (1) = (1)
console.log(numero4);

//Logical operators: OR AND NOT
console.log("Or and not");
let myAge = 1;
console.log("comprueba si la variable es falso o verdadero");
console.log(!!myAge); //Test to know if a value is true or not!
console.log("Or variable");
let myOrTest = 0 || 0 || 1 || false;// other languaje... error, can not compare numbers like booleans
console.log(!!myOrTest);
console.log(myOrTest);//Devuelve el primer valor de verdad. PASA SOLO EN JS!!!
console.log("And variable");
let myAndTest = 5 && 12 && 5 && 23;// other languaje... error, can not compare numbers like booleans
console.log(!!myAndTest);
console.log(myAndTest);//Devuelve el primer valor falso, o si no hay
//el valor final. PASA SOLO EN JS!!!

//Bitwise Operators
console.log("Bitwise Operators");
// & | ~ ^: convert in binary and make the operations one by one
let numbi1 = 6; //110
let numbi2 = 3; //011
//                ----
//                111
console.log(numbi1 & numbi2);   

//For loop
console.log("For loop");
for(var i = 0; i < 10; i++) {
    console.log(i);
}
console.log("----");
console.log(i);

//While loop
console.log("While loop");//As long condition true, then... loop ist execute
let k = 0;
while(k < 10) {
    console.log(k);
    k++;
};
console.log("----");
console.log(k);

//Do while
console.log("Do-while loop");//Evaluate at least one time the loop
let j = 100;
do {
    console.log(j);
    j++;
} while(j < 10);
console.log("----");
console.log(j);

//Break continue and return
console.log("Break, continue and return");
console.log("Break");
for(var a = 0; a < 10; a++) {
    console.log(a);
    if (a == 5) break; 
}
console.log("----");
console.log("Continue");
for(var b = 0; b < 10; b++) {
    console.log(b);
    if (b == 5) {
        continue;
    };
    console.log("Done");//In five, there is not done!!!
}
console.log("----");
console.log("Return: funciona solo en una función");
function myLoop() {
    for(var c = 0; c < 10; c++) {
        console.log(c);
        if (c == 5) {
            return;//does not execute code under here after the condition
        };
        console.log("Done");//In five, there is not done!!!
    }
}

myLoop();

console.log("If-else");

//Arrays map
console.log("Arrays map");
//function myFunction() {
//};
//let myFunction = () => {
//}
let array1 = [1,2,3,4,5,6];
let array2 = array1.map(element => {
    return element*2;
});
console.log(array1);
console.log(array2);

//Arrays filter
console.log("Arrays filter");
let arraya = [1,2,3,4,5,6];
let arrayb = arraya.filter(element => {
    if(element > 2) return true;
    return false;
});
console.log(arraya);
console.log(arrayb);

//Arrays for each
console.log("Arrays for each"); //Reeplace a for. But does not return anything
let arrayc = [1,2,3,4,5,6];
let arrayd = [];
console.log(arrayc);
arrayc.forEach(element => {
    arrayd.push(element/2);
});
console.log(arrayd);

//Arrays reduce: Reduce array to single value
console.log("Arrays reduce");
let arrayr = [1,2,3,4,5,6,7,8,9,10]; //sum: 55
let count = 0;
const res = arrayr.reduce((accumulator, currentValue) => {
    count++;
    return accumulator + currentValue;
}, 10);//Initial value
//accum = 0 | cv = 1; If you define initial value
//accum = 1 | cv = 2; By default
//accum = 3 | cv = 3;
//accum = 6 | cv = 4;
//...
//
//accum = 45 | cv = 10;
console.log(count + ", " + res);

//Arrays.indexOf, Array.include, Array.find
console.log("Arrays.indexOf");
var myFavFoods = ["pizza", "burger", "pasta"];
console.log(myFavFoods.indexOf("pizza"));
//If the element does not exist -> index: - 1. Then check 
console.log(myFavFoods.indexOf("pizzsa") > -1);
console.log("Array.includes");// returns a boolean value if that exist or not!
console.log(myFavFoods.includes("pizza"));
console.log(myFavFoods.includes("pizzsa"));
console.log("Array.find");//If you have array of objects, is very usefull
let students = [
    {
        name: "Pablo",
        age: 15,
        fach: "math"
    },
    {
        name: "Lucia",
        age: 18,
        fach: "phys"
    }

]
function isFachPhys(s) {
    return s.fach == "phys";
}
console.log(students.find(isFachPhys));
var studen = students.find(setuden => {
    return setuden.fach == "phys";
});
console.log(studen);
//If something does not exist, you get undefined

//== V.s ===
// == or ===
//1. Check types
//2. If types are not the same, and operator is === -> return false
//2. If type are not the same, and operator is == -> change the type
//3. Copare the values if type are now the same
//NOTE: a.toString(): change some to string!!!
console.log("Exp 1:");
let p = 2,
    r = "2";
    
console.log(p === r);
console.log(p == r);
console.log("Exp 2:");
let ap = [1,2],
    ar = "1,2";
console.log(ap === ar);
console.log(ap == ar);
console.log("Exp 3: cuidado!! se en cuestion de arreglos, se compara tambien la direeción de memoria");
let aap = [1,2];
console.log(ap === aap);//Values are same, but memory location not!!!
console.log(ap == aap);//Values are same, but memory location not!!!
//Nota: algo que siempre vi, y no entendia!!!
console.log("Exp 4:");
let algoImportante = 0;
//Validar si algo es definido ... mentiras, algoImportante esta definido! simplemente es cero y cero es falso
if(algoImportante){
    console.log("algoImportante is defined");
} else {
    console.log("algoImportante is not defined");
}
//La manera correcta es:
if(algoImportante !== undefined || algoImportante !== false){
    console.log("algoImportante is defined");
} else {
    console.log("algoImportante is not defined");
}