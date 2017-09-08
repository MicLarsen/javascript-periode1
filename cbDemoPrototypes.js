
let names = ["Peter","Kira", "Bartholomy","ib"];

function myforEach(callback) {
    for(var i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

//myforEach((name)=>console.log(name));

Array.prototype.myforEach = myforEach;

names.myforEach(function(name) {
    console.log(name);
})

names.forEach((name)=>console.log(name));



console.log(" ");
console.log("#prototyping Objects - with Constructor function ...")

//Constructor function - a Constructor function is using this. -> which holds parameters and holds them as this
//Its called a constructor function because it is used to create/constrcut objects of the same type.
//Constructor functions is always used with New and are by convention always named with a capital letter.
//If you dont use new, the object will point to the global space, and not this.
function Person(firstName, lastName,age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype = {
    greet: function () {
        return "Hello world, my name is "+this.firstName+" "+this.lastName;
    },
    getNewAge: function () {
        var newAge = this.age + 1;
        return "new age is: " + newAge;
    }
};



var Michael = new Person("Michael", "Larsen","35");
console.log(Michael.greet());
console.log(Michael.age);
console.log(Michael.getNewAge());



console.log(" ");
console.log("#Som other kind of creating objects 'prototyping':");
var Larsen = {};
Larsen.firstName = "Lallen";
Larsen.lastName = "Balladen";
console.log(Larsen.firstName + " " + Larsen.lastName);

Larsen["age"] = 36;

console.log("Larsen is: " + Larsen.age);
console.log(" ");
console.log("props in Object Larsen are:")
for(prop in Larsen) { console.log(prop)};
console.log(" ");
for(prop in Larsen) { console.log(prop + ", " + Larsen[prop])};


let listedMap = ((arr, callback) => {

    let temp = [];

    arr.forEach((name) => {

        temp.push(callback(name));
    });
    return temp;
})



var makeCounter = function() {
    var privateCounter =0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: ()=>{changeBy(1)},
        decrement: ()=>{changeBy(-1)},
        vaklue: ()=>{privateCounter}
    }
}
var counter1 = makeCounter();
var counter2 = makeCounter();





//learn your node.js exercises:
