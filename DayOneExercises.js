let names = ["Lars", "Jan", "Peter", "Bo", "Frederik",
    "Bartholomew", "Henrik", "Oscar", "Iben",
    "Gry", "Ib", "Michael", "Karen", "Michaelea",
    "Carsten"];
let seperator = () => { return "\n----------------------------------------------------------------------\n" };

console.log(seperator() + "\t# Opgave 1 - Use 'filter' & 'map'");
let filteringByLength = (arr) => { return arr.length <= 4; };

console.log("names filtered by the equals or less than the length of 4 with 'filter");
console.log(names.filter(filteringByLength));

let toUppercase = (arr) => { return arr.toUpperCase(); };
console.log("names in array set to uppercase with 'map");
console.log(names.map(toUppercase));

console.log(seperator() + "\n\t# Opgave 2 - use callbacks - filter & map");
console.log("myFilter takes in a callback and returns filtered array by length");
let myFilter = ((arr, callback) => {

    let returnValue = [];

    arr.forEach((name) => {
        let included = callback(name);
        if (included) {
            returnValue.push(name);
        };
        return included;
    });
    return returnValue;
});
let myNewFilter = (name) => { return name.length <= 4; };
let newFilter = myFilter(names, myNewFilter);
console.log(newFilter);
console.log("myMap takes in a callback and returns array in uppercase");

let myMap = ((arr, callback) => {

    let returnValue = [];

    arr.forEach((name) => {
        returnValue.push(callback(name));
    });
    return returnValue;
});

let myNewMap = (name) => { return name.toUpperCase(); };
let newMap = myMap(names, myNewMap);
console.log(newMap);

console.log(seperator() + "\n\t# Opgave 3 - Prototyping");

if (!Array.prototype.first) {
    Array.prototype.first = function () {
        return this[0];
    }
}

if (!Array.prototype.upCase) {
    Array.prototype.upCase = function () {
        let temp = [];
        for (var i = 0; i < this.length; i++) { temp.push(this[i].toUpperCase()) };
        return temp;
    }
}


if (!Array.prototype.filterMe) {
    Array.prototype.filterMe = function () {
        let temp = [];
        for (var i = 0; i < this.length; i++) {
            if (this[i].length <= 3) { temp.push(this[i]) };
        }
        return temp;
    }
}


console.log("prototyping first name in 'Array : ");
console.log(names.first());
console.log("prototyping Uppercase in 'Array : ");
console.log(names.upCase());
console.log("prototyping filter <= 3 in 'Array' : ");
console.log(names.filterMe());

console.log(seperator() + "\n\t# Opgave 4 - more filter, map and join")
console.log("\nUsing filter , map & join to make a list from the names array")

let myNewListedMap = ((arr, callback) => {
    let returnValue = [];
    returnValue.push("<ul>");
    arr.forEach((name) => {
        returnValue.push(callback(name));
    });
    returnValue.push("</ul>");
    return returnValue;
});

let listingNewMap = (name) => { return "<li>" + name + "</li>"; };
let newListingMap = myNewListedMap(names, listingNewMap);
console.log(newListingMap.join("\n"));

console.log("\nUsing filter , map & join to make a table with 2 seperate collumns from a json-object")
var twoColumnNames = [{ name: "Lars", phone: "1234567" },
{ name: "Peter", phone: "675843" },
{ name: "Jan", phone: "98547" },
{ name: "Bo", phone: "79345" }];

let myNewListedCollumnMap = ((arr, callback) => {
    let returnValue = [];
    returnValue.push("<table>");
    arr.forEach((names) => {
        returnValue.push("<tr>\n" + callback(names.name));
        returnValue.push(callback(names.phone) + "\n</tr>");
    });
    returnValue.push("</table>");
    return returnValue;
});

let listingNewCollumnMap = (names) => { return "<td>" + names + "</td>"; };

let sdf = myNewListedCollumnMap(twoColumnNames, listingNewCollumnMap);
console.log(sdf.join("\n"));

/*
Use .bind() 
when you want that function to later be called with a certain context, useful in events.
Use .call() or .apply() 
when you want to invoke the funciton immediately, and modify the context.
*/

function MyObject(element) {
    this.elm = element;

    element.addEventListener('click', this.onClick.bind(this), false);
};

MyObject.prototype.onClick = function (e) {
    var t = this;  //do something with [t]...
    //without bind the context of this function wouldn't be a MyObject
    //instance as you would normally expect.
};
/*
I use it extensively in node.js for async callbacks that I want to pass a member method for, 
but still want the context to be the instance that started the async action.

A simple, naive implementation of bind would be like:
*/

Function.prototype.bind = function (ctx) {
    var fn = this;
    return function () {
        fn.apply(ctx, arguments);
    };
};


console.log(seperator() + "binding stuff in javascript");

let dog = {
    sound: "woof",
    food: ["bones", "meat"],
    talk: function () {
        return this.sound;
    },
    eats: function () {
        return this.food;
    }

};
console.log(dog.talk());
console.log(dog.eats());
console.log(dog.eats().join("\n"));

console.log("let talkFunction = dog.talk");
let talkFunction = dog.talk;

console.log(talkFunction);
let boundFunction = talkFunction.bind(dog);
console.log(boundFunction());
console.log("the above call is: boundFunction(), which is talkFunction.bind(dog)");
console.log("here it logs: 'undefined'  , in jsfiddle.net it will log:   'woof'");
//Again for some reason it logs 'undefined' instead of 'woof' - dont know why?

// What happened is:
// bind is going to take the 'talkFunction()' and it's going to return a new function ('boundFunction()')
// which has bound the object 'dog' to 'this' keyword. That means that 'bind' forces 'this' to be the object dog

// Ex. that resembles some kind of IRL usage of bind:

//let button = document.getElementById('myButton')

//button.addEventListener(
//    'click',
//    dog.talk    // we are assigning the 'talk()' method from the object 'dog' to the click-handler of the button
// 'this' will not be the dog but the window it refers to 
//    dog.talk.bind(dog) // now this will refer to the dog - why ? 
// It is not the 'vanilla' 'talk'-function, which refered to the 'window',
// but a new function which has bound 'this' to the object 'dog'           
//) 




console.log(seperator());

let aPerson = { name: "Peter" };
function getName() { return this.name };

console.log(getName.bind(aPerson)()); // why is this undefined ??? - proberly because the bind is missing in API ?
// in jsfiddle.net it logs:   Peter


let obj = { num: 2 };
let addToThis = function (a) { return this.num + a };
//If I want to take action on the object 'obj' using the method 'addToThis' we can do it by using a call function

//1. using .call parsing in 2 arguments
// first arguments is the object that you are applying the function to - 'obj'
// the second argument is the argument for the function itself addToThis(a) - 'a' - here we will parse the number 3
console.log(addToThis.call(obj, 3)); // functionname.call(obj, function argument);

//Here 'this' is the object that applied to the function through the call
let addToThese = function (a, b, c) { return this.num + a + b + c };
// you can always parse more arguments as long as the first argument always is the obj 
console.log(addToThese.call(obj, 3, 4, 2)); // logs:        11     (2 + 3 + 4 + 2) 

// that means a .call attaches a function to an object and runs it, 
//  returns whatever the function does with the obj and the arguments

let arr = [1, 4, 3, 2];

console.log(addToThese.apply(obj, arr)); // logs:    19         (2 + 1 + 4 + 3)
// instead of parsing arguments you can parse an array with arguments
//obs: it will take the array and start at 0, and then work its way up through the array.
// whenever no more arguments is needed it will stop. so in this example it will only apply the first 3 spots in the array

let obj2 = { num: 5 };

console.log(addToThese.apply(obj2, arr)); //Does the same at above , but shows that you can use different objects

//bind

console.log(addToThese.bind(obj, arr)); // returns the object
console.log(addToThese.bind(obj, arr)()); // returns undefined

let bound = addToThese.bind(obj);
// With bind it does not execute the function, but binds the function to the parameter instead,
//This bound function can then be executed at a later time
// Here we dont need to parse the arguments, these we can parse directly into the executed object
console.dir(bound);
console.log(bound(1, 2, 3)); // in jsfiddle.net it log:       8


console.log("EX of bind:");
this.x = 9;    // this refers to global "window" object here in the browser
var module = {
    x: 81,
    getX: function () { return this.x; }
};

console.log(module.getX()); // 81

var retrieveX = module.getX;
console.log(retrieveX());
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81

//What is Hosting ? 
//Variable declaration and function declaration is hosted to the top of the outer scope.
//Ex:
//  let logThis = "Hello World"
//  (() => { console.log(logThis)
//  })
//--------------------------------------
//      logs:    Hello World
//--------------------------------------
//  let logThis = "Hello World"
//  (() => { 
//  console.log(logThis)
//  let logThis = "well hello world"
//  })
//--------------------------------------
//      logs:    undefined
//--------------------------------------
//
//  the declaration logThis is 'hosted' to the top, but it is not initiated before after the console.log,
//  meaning that it is still undefined.
//  Same goes for functions.


console.log(seperator() + "Objects\n")

//Create an object with four different properties, with values, 
//of your own choice (ex: name, birthday, hobby, email).
//Use a foreach loop to demonstrate that we can iterate over the properties in an object.
//Use the delete keyword to demonstrate we can delete existing properties from an object 
//(delete a property, and iterate over the properties again) 

let somePerson = {
    name: "Michael",
    birthday: 01010101,
    hobby: "programming",
}
for (var index in somePerson) {
    var attr = somePerson[index];
    console.log(attr)
}

//Use the function (inherited from Object) hasOwnProperty() to test whether a property exist (directly) 
//on your object (test with both and existing, and non-existing property).
//2)
//Create a Constructor function to create new Persons having:
//a firstName, lastName and an age.
//A method to get details about the Person

console.log("testing if object (somePerson) has 'name' as property with 'hasOwnProperty' results in: \n" + somePerson.hasOwnProperty("name"))
console.log("testing if object (somePerson) has 'bdayCake' as property with 'hasOwnProperty' results in: \n" + somePerson.hasOwnProperty("bdayCake"))

//Create a Constructor function to create new Persons having:
//a firstName, lastName and an age.
//A method to get details about the Person

let NewPerson = new Object();

NewPerson.firstName = "Michael"
NewPerson.lastName = "FuckingJackson"
NewPerson.age = 1000

NewPerson.getDetails = function () {
    return this.firstName + " " + this.lastName + " is " + this.age + " y.o."
}

let gettingDetails = NewPerson.getDetails
console.log(NewPerson.getDetails())
let boundPerson = gettingDetails.bind(NewPerson);
let fuckThis = "for some idiotic VS reason this still is 'undefined' ... which is not the case in jsfiddle.net WTF!"
console.log(boundPerson() + " fuckThis");

function AnotherPerson(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.getAll = () => { console.log(this.firstName + " " + this.lastName + " is " + this.age + " y.o.") }
}
let someOne = new AnotherPerson("Bryan", "Fucking-Adams", 80)
console.log(seperator() + "\n using constructor function with nested function getAll")
someOne.getAll()
console.log(" ")


//3)
//Create an object of your own choice and list all properties in the object 

let motherFuckingDog = {
    name: "Fi-Mother-Fucking-Do",
    age: 10000,
    sound: "GRRRRRR!!!!",
}
let doggyStyle = () => {
    for (var key in motherFuckingDog) {
        if (motherFuckingDog.hasOwnProperty(key)) {
            console.log(key + " : " + motherFuckingDog[key]);
        }
    }
}
console.log("Using enumeration : for(var key in Object) - results in:\n")
doggyStyle()
console.log("\nusing delete Keyword : 'delete object.attribute'\ndeleting hobby from object somePerson")
delete motherFuckingDog.age;
console.log("printing the object after deleting the attribute (age), which results in:\n")
doggyStyle()

console.log(seperator())

//
//1) 
//Implement and test the Closure Counter Example from the Slides
//2)
//Implement a reusable function using the Module pattern that should encapsulate information about a person (name, and age) and returns an object with the following methods:
//setAge
//setName
//getInfo (should return a string like Peter, 45)

let freakingPerson = (() => {

    let name = "MotherFucker";
    let age = 10000;
    getName = () => { console.log(name) }
    getAge = () =>  { console.log(age) }
    setName = newName => { name = newName, render() }
    setAge = newAge => { age = newAge, render() }
    getInfo = () => { console.log(name + ", " + age) }
    return {
        getInfo: getInfo,
        getName: getName,
        getAge: getAge,
        setName: setName,
        setAge: setAge
    }
})()
console.log("Reusable Modules with Closures\nreturning name and age" +
"from freakingPerson made with revealing Modular pattern a.i. Object with Closure")
freakingPerson.getInfo()
console.log(seperator())
console.log("If you where to write : freakingPerson.name = 'Higlander', it would set the name to highlander")
console.log(", but only in the return scope. If you called freakingPerson.getName() afterwards you would still get 'MotherFucker' !\nEX:")
console.log("... >freakingPerson.name = 'Highlander'")
freakingPerson.name = "Highlander"
console.log("console.log(freakingPerson) gives name = Higlander:")
console.log(freakingPerson)
console.log("\nbut ... >freakingPerson.getInfo(), still gives the name of Motherfucker")
freakingPerson.getInfo()
console.log("\nand so does freakingPerson.getName() ... >freakingPerson.getName()")
freakingPerson.getName()





