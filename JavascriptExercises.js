
//CALLBACK ASSIGNMENTS
console.log("\t#The magic of callbacks\n");
console.log("\t# Opgave 1 - Use 'filter' & 'map'\n");

let names = ["Lars", "Michael", "Sofie", "Lone", "Per", "Jan"];

let filterLength = (arr) => { return arr.length <= 3; };

console.log(names.filter(filterLength));

let mapUpper = (arr) => { return arr.toUpperCase() };

console.log("\nnames filtered by the equals or less than the length of 3 with 'filter");
console.log(names.map(mapUpper));

console.log("\n\t# Opgave 2 - use callbacks - filter & map\n");

let rows = (arr) => {
    return "<td>" + arr + "</td>";
};

console.log(rows);

let myFilter = (arr, callback) => {

    let returnValue = [];
    let tempArr = [...arr];
    returnValue.push("<table>");
    tempArr.forEach((name) => {

        returnValue.push(callback(name));
    });
    returnValue.push("</table>");
    return returnValue;
};

console.log("\nmyFilter takes in a callback and returns a table with the arrays objects");
console.log(myFilter(names, rows));

let myMap = (arr, callback) => {

    let returnValue = [];
    let tempArr = arr;

    tempArr.forEach((name) => {
        returnValue.push(callback(name));
    });
    return returnValue;
}

let mapping = (arr) => {
    return arr.toUpperCase();
}
console.log("\nmyMap takes in a callback and returns array in uppercase");
console.log(myMap(names, mapping));

console.log("\n\t# Opgave 3 - Prototyping");

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


console.log("\nprototyping first name in 'Array : ");
console.log(names.first());
console.log("\nprototyping Uppercase in 'Array : ");
console.log(names.upCase());
console.log("\nprototyping filter <= 3 in 'Array' : ");
console.log(names.filterMe());

console.log("\n\t# Opgave 4 - more filter, map and join")
console.log("\nUsing filter , map & join to make a list from the names array\n")

let myNewListedMap = ((arr, callback) => {
    let returnValue = [];
    let tempArr = [...arr];
    returnValue.push("<ul>");
    tempArr.forEach((name) => {
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
    let tempArr = [...arr];
    returnValue.push("<table>");
    tempArr.forEach((names) => {
        returnValue.push("<tr>\n" + callback(names.name));
        returnValue.push(callback(names.phone) + "\n</tr>");
    });
    returnValue.push("</table>");
    return returnValue;
});

let listingNewCollumnMap = (names) => { return "<td>" + names + "</td>"; };

let tableJson = myNewListedCollumnMap(twoColumnNames, listingNewCollumnMap);
console.log(tableJson.join("\n"));

//REDUCE ASSIGNMENTS 
console.log("\n\t#reduce\n")
console.log("\na)\tprinting single string with join\n");

console.log(names.join(",") + "\n");
console.log(names.join("#") + "\n");
console.log(names.join(" ") + "\n");

let numbers = [2, 3, 67, 33];

let adder = (arr) => { return arr };

let reducer = (arr) => {
    let returnValue = 0;
    let tempArr = [...arr];
    tempArr.forEach((number) => {
        returnValue += number;
    });
    return returnValue;
}
console.log("b)\tadding all the numbers in an Array\n");
console.log(numbers.join(" + ") + " = " + reducer(numbers));

let members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 },
];

let average = (arr) => {
    return arr;
}

let averageAge = (arr) => {

    let returnValue = 0;
    let tempArr = [...arr];
    let counter = 0;
    tempArr.forEach((mem) => {
        counter++;
        if (isNaN(mem) != false) {
            returnValue += mem.age;
        }
    })

    return returnValue / counter;
}

console.log("\nc)\ttaking the average of the age from an json object\n")
console.log("average age is: " + averageAge(members));

let votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];

let voteCount = (arr) => {
    let returnObj = { "Clinton": 0, "Trump": 0, "None": 0 };
    let tempArr = [...arr];

    tempArr.forEach((vote) => {
        if (vote === "Clinton") {
            returnObj.Clinton = returnObj.Clinton + 1;
        }
        if (vote === "Trump") {
            returnObj.Trump = returnObj.Trump + 1;
        }
        if (vote === "None") {
            returnObj.None = returnObj.None + 1;
        }
    });
    return returnObj;
};

console.log("\nd)\ttotal votes from 'votes' object :");
console.log(voteCount(votes));


// this .js file will illustrate how hoisting works by simple code
// be aware that much of the code is out-commented, but still valid js code that can be in-commented and run at any point

//a) variable hoisting; the following code will illustrate that all variables are "hoisted"(all variables are declared at the top, and not in-place)
// (function(){
//     var foo = 1;
//     var bar = 2;
//     var baz = 3;

//     alert(foo + " " + bar + " " + baz); // this will, as expected, print 1 2 3
// })

// (function(){
//     var foo = 1;
//     alert(foo + " " + bar + " " + baz); // this will print 1 undefined undefined (note if the variables were declared in-place, it should print referenceError)
//     var bar = 2;
//     var baz = 3;
// })

// (function(){
//     var foo = 1;
//     alert(foo + " " + bar + " " + baz); // this will print the referenceError mentioned before, since baz is no longer declared anywhere.
//     var bar = 2;
// })

//b) function hoisting; the following code will illustrate that all functions are "hoisted", note that functions assigned to a variable follows the same rules as normal variable hoisting

// foo(); // this will print the alert, since the function is "pulled" to the top of the file, and therefore declared long before we even reach the foo(); call.
// function foo(){
//     alert("Hello!");
// }

// foo(); // this will, as one might pressume, not give a referenceError, it will however give an exception since the variable foo is not instanciated as a function until after the foo(); call
// var foo = function(){
//     alert("Hello!");
// }



//OBJECTS ASSIGNMENTS
console.log("\n\t#Objects!\n");

console.log("\t1)");
let randomObj =
    { fName: "Michael", lName: "Petersen", age: 50, email: "mp@test.com" };

let iterateObj = (obj) => {
    for (var data in randomObj) {
        if (!randomObj.hasOwnProperty(data)) {

            continue
        }
        console.log(data + " : " + randomObj[data]);
    }
}
console.log("\nIterating over obj")
iterateObj(randomObj);
console.log("\ndeleting age keyword...");
delete randomObj.age;
console.log("\nIterating over obj")
iterateObj(randomObj);

console.log("\n\t2)");
let NewPerson = new Object();

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

let MJ = new Person("Michael", "Jackson", 500);

console.log(MJ);

NewPerson.firstName = "Michael"
NewPerson.lastName = "FuckingJackson"
NewPerson.age = 1000

NewPerson.getDetails = function () {
    return this.firstName + " " + this.lastName + " is " + this.age + " y.o."
}

let gettingDetails = NewPerson.getDetails
console.log(NewPerson.getDetails())
let boundPerson = gettingDetails.bind(NewPerson);

console.log(boundPerson());



//REUSEABLE MODULES
console.log("\n\t#Reuseable Modules!\n");
console.log("\n\t1)");

var makeCounter = function() {
    var privateCounter = 0
    function changeBy(val) {
        privateCounter += val
    }
    return {
        increment: function() {changeBy(1)},
        decrement: function() {changeBy(-1)},
        value: function() {return privateCounter}
    }
}

var counter1 = makeCounter();
var counter2 = makeCounter();

console.log("\n\t2)");
var makePerson = function(newName, newAge) {
    var age = newAge
    var name = newName

    function setName(aName){
        name = aName
    }
    function setAge(anAge){
        age = anAge
    }
    function getInfo(){
        return name + ',' + age
    }

    return {
        setAge: setAge,
        setName: setName,
        getInfo: getInfo
    }
}

var person1 = makePerson('nicklas', 20)
var person2 = makePerson('julie',24)

console.log(person1.getInfo())
console.log(person2.getInfo())
person1.setAge(21)
console.log(person1.getInfo())




