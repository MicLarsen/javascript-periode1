let names = ["John", "Austin", "William", "Ib", "Bartholomi", "Joe", "Kim", "Torben"];

let filteringByLength = (arr) => {
    return arr.length <= 3;
}

console.log(" ");
console.log("#Opgave 1.1 - filter");
console.log(names.filter(filteringByLength));
console.log(" ");

let letsUpperCase = (arr) => {
    return arr.toUpperCase();
}

console.log("#Opgave 1.2 - map");
console.log(names.map(letsUpperCase));
console.log(" ");

let myFilter = ((arr, callback) => {

    let temp = [];

    arr.forEach((name) => {
        let included = callback(name);
        if (included) {
            temp.push(name);
        };
    });
    return temp;
});

let filteredNames = myFilter(names, (name) => { return name.length <= 3; });
console.log("#Opgave 2.1 - Filter " + filteredNames);
console.log(" ");

let myMap = ((arr, callback) => {

    let temp = [];

    arr.forEach((name) => {

        temp.push(callback(name));
    });
    return temp;
})

let mappedNames = myMap(names, (name) => { return name.toUpperCase() });
console.log("#Opgave 2.2 - Map - " + mappedNames);
console.log(" ");

if (!Array.prototype.first) {
    Array.prototype.first = function () {
        return this[0];
    }
}

Array.prototype.upCase = function () {
    let temp = [];
    for (var i = 0; i < this.length; i++) { temp.push(this[i].toUpperCase()) };
    return temp;
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

console.log("#Opgave 3.0 - prototyping first name in 'Array : " + names.first());
console.log("#Opgave 3.0 - prototyping Uppercase in 'Array : " + names.upCase());
console.log("#Opgave 3.0 - prototyping filter <= 3 in 'Array' : " + names.filterMe());


function Person(name) {
    this.name = name
}
Person.prototype = {
    greet: function () {
        return "Hello world, my name is " + this.name;
    }
};

var frank = new Person("Frank Dijon");
console.log(frank.greet());

let listedMap = ((arr, callback) => {

    let temp = [];

    arr.forEach((name) => {

        temp.push(callback(name));
    });
    return temp;
})

let myMap1 = ((arr, callback) => {

    let temp = [];
    temp.push("<ul>");
    arr.forEach((name) => {
        
        temp.push(callback(name));
    });
    temp.push("</ul>");
    return temp;
})


let listing = (arr) => {
    return "<li>" + arr + "</li>";
}

//console.log(names.myMap1(listing));