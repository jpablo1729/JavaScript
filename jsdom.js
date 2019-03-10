//To work in console (or in javaScript file)

//Document/window object, getElementById and More ways to traverse

//There are window and document. Window > document.
//To get some key from window: 'alert' in window -> true. 'confirm' in window -> true.
//All the browser functions are in window! 
//Exp. 1:
//let myObj = {a: 1, b: 2};
//'a' in myObj -> returns in cosole true
let docu = document,
    win = window;
console.log(docu);
console.log(win);

//To get the properties of document (write in cosole)
//console.dir(document): hows the avaible methods
//console.dir(window): hows the avaible methods
console.dir(docu);
console.dir(win);

//document.getElementById("idElLoco"): get the element by id: "id"
//console.dir(document.getElementById("idElLoco")): shows the avaible methods
//document.getElementById("idElLoco").innerText = "loco pero feliz": chages a property
const elLoco = docu.getElementById("idElLoco");
elLoco.innerText = "loco pero feliz";

//document.getElementsByClassName("name")
//document.getElementsByClassName("name")[0]
//document.getElementsByClassName("name")[0].innerText = "Primero"
const primero = docu.getElementsByClassName("name")[0];
const segundo = docu.getElementsByClassName("name")[1];
primero.innerText = "Primero"; 

//document.getElementsByTagName("p")
//document.getElementsByTagName("p")[0]
//document.getElementsByTagName("p")[0].innerText = "Algo"
//There is also innerHTML, you can configure the text with html: <b></b>,...
const parag = docu.getElementsByTagName("p")[0];

//For the title in head
//document.getElementsByTagName("head")
//document.getElementsByTagName("head")[0].getElementsByTagName("title")
//document.getElementsByTagName("head")[0].getElementsByTagName("title")[0].innerText = "WOW"

//setTimeout and setInterval
/*console.log("start");
let i = 0;

//setTimeout and setInterval give us an Id. We can write a condition to stop

let idTimeout = setTimeout(() => {
    document.getElementsByClassName("name")[0].innerText = ++i;
    if (i == 4) clearInterval(idTimeout);//Clear the interval...stop the actions
}, 2000);//Only one time

setInterval(() => {
    document.getElementsByClassName("name")[1].innerText = ++i;
}, 100); //Repited 

let idInterval = setInterval(() => {
    document.getElementById("id").innerText = ++i;
    if (i == 6) clearInterval(idInterval);//Clear the interval...stop the actions
}, 100); //Repited 

console.log("end");
*/

//Event Handlers
//better approach an cleaner
elLoco.onclick = function() {
    console.log("Click on el loco");
};

//not so clean... inline events.
function onFunction() {
    console.log("Click on el mundo");
};



//Error handling
console.log("Exp. 1.");
let pri = 100,
    me = 0;
//Produces error, does not exits!!!
//docu.getElementById("id").innerText;
try {
//code that could have exception
    if(me == 0) {
        throw "me cannot be zero"
    }
    //Code run only if not produces error!
    docu.getElementById("id").innerText;
    console.log(pri/me);
} catch(err) {
    console.log(err);
}
console.log("Runs after if I use try-catch");
console.log("Exp. 2.");
try {
        //Code run only if not produces error!
        docu.getElementById("id").innerText;
        console.log(pri/me);
    } catch(err) {
        console.log(err);
}
console.log("Runs after if I use try-catch!!!!!");