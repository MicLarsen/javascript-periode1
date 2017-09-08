console.log("\n\t#ArrowFunctions!");
let evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
odds = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums = evens.map((v, i) => v + i)

console.log("\n\ta1)");


//It works because it cannot run without an array since you cannot map something 'undefined'

var odds = evens.map(v => v + 1);

//while this doesn't (fix the example below, without going back to the solution above)?
var odds = evens.map(v => {
    return v + 1
});

// because the last example did not have a return statement, and the return statement is implicit in the first example

//Arrow functions are, in the below example, shorthand callbacks.
function Numbers(numbs) {//es5
    var self = this;
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(function (v) {
        if (v % 5 === 0) {
            // this example does not work because the this inside the if statement belongs to the if statement,
            // not the function itself. therefore this.fives is undefined inside the if statement
            //this.fives.push(v);
            self.fives.push(v);

        }
    });
}

function Numbers(numbs) { //es6
    this.nums = numbs
    this.fives = []
    this.nums.forEach((v) => {
        if (v % 5 === 0)
            this.fives.push(v)
    })
}



var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
// console.log(numbers.fives);



var counter = {
    count: 0,
    inc: () => { this.count++ } //this makes is worse...
}
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one




//TEMPLATES LITERALS
console.log("\n\t#Templates Literals!");
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

console.log(message)


//REST PARAMETER AND THE SPREAD OPERATOR
console.log("\n\t#Rest parameter and spread operator!");
function f(x, y, ...rest) {
    let results = [];
    results.push(`Sum: ${x + y}`)
    for (let i = 0; i < rest.length; i++) {
        let currObj = rest[i];
        results.push(`rest value ${i + 1} is a: ${currObj.constructor.name}`)
    }
    return results
}

console.log(f(5, 2, true, 2, "hello World", [1, 2, 3], new Date(), {}))


var rest = [true, 2, "hello World", [1, 2, 3], new Date(), {}];
var restParams = [...rest];
// f(5,2,...restParams)

var chars = [...f(5, 2, ...restParams)] // this produces and error as f in this context is undefined.

let first = "Kurt"
let last = "Wonnegut"
let age = 98

obj = { first, last, age };

//out it simply to test that it is working :)
console.log(obj.fName)
console.log(obj.lName)
console.log(obj.age)

//DESTRUCTION ASSIGNMENT
console.log("\n\t#Destruction assignment!")
let fName = "Kurt", lName = "Wonnegut";

[lName, fName] = [fName, lName]

console.log(`First: ${fName}, Last: ${lName}`);


function getPerson() {
    return {
        firstName: "Kurt",
        lastName: "Wonnegut",
        gender: "Male",
        email: "kurt@wonnegut.dk",
        phone: "12345",
    }
}

var { lastName, phone } = getPerson()
console.log(`Last: ${lastName}, Phone: ${phone}`)


module.exports = function f(x, y, ...rest) {
    let results = [];
    results.push(`Sum: ${x + y}`)
    for (let i = 0; i < rest.length; i++) {
        let currObj = rest[i];
        results.push(`rest value ${i + 1} is a: ${currObj.constructor.name}`)
    }
    return results
}

console.log("\n\t#Classes and Inheritance with es2015!");
class Shape {
    constructor(color) {
        this._color = color;
    }
    getArea() {
        return undefined;
    }
    getPerimeter() {
        return undefined;
    }
    getColor() {
        return this._color;
    }
    setColor(color) {
        this._color = color;
    }
    toString() {
        return `Color: ${this._color}`;
    }
}

// let shape = new Shape("blue");
// console.log(shape.toString())
// console.log("setting color to red");
// shape.setColor("red");
// console.log(shape.toString())

class Circle extends Shape {

    constructor(color, radius) {
        super(color)
        this._radius = radius;
    }
    toString() {
        return `Color: ${this._color}, Radius: ${this._radius}`;
    }
    getArea() {
        return `Area: ${3.14 * this._radius}`;
    }
    getPerimeter() {
        return `Perimeter: ${2 * 3.14 * this._radius}`;
    }
    getRadius() {
        return this._radius;
    }
    setRadius(radius) {
        this._radius = radius;
    }
}

// let circle = new Circle("red", 2);
// console.log(circle.toString())
// circle.setColor("blue");
// circle.setRadius(4);
// console.log(circle.toString())
// console.log(circle.getPerimeter())

class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius)
        this._height = height;
    };

    get Area() { return `Area: ${2 * Math.PI * Math.sqrt(this._radius) + (this._height * (2 * Math.PI * this._radius))}` };
    get Perimeter() { return undefined; };
    get Volume() { return `Volume: ${Math.PI * Math.sqrt(this._radius) * this._height}` };
    toString() {
        return `
        Color: ${this._color}
        Radius: ${this._radius}
        Height: ${this._height}
        ${this.Area}
        ${this.Volume}
        Perimeter: ${this.Perimeter}`;
    };
    getHeight() {
        return this._height;
    };
    setHeight(height) {
        this._height = height;
    };
};

let cyl = new Cylinder("red", 2, 6);
console.log(cyl.toString());
cyl.setColor("yellow");
cyl.setHeight(20);
cyl.setRadius(3);

console.log(cyl.toString());



