

var names = [{ name: "Lars", phone: "1234567" },
{ name: "Peter", phone: "675843" },
{ name: "Jan", phone: "98547" },
{ name: "Bo", phone: "79345" }];

function myButton() {
    let namesFilter2 = names.filter(function(person){
    return person.name.length >= 3;
}); 


console.log(namesFilter2);
let person2 = namesFilter2.map (function(person){
    return `  <tr><td>${person.name}</td>\n  <td>${person.phone}</td></tr>\n`
});


console.log(person2);
let filterToString = person2.join("");
let filterTable = `<tr>\n${filterToString}</tr>`;
console.log(filterTable);
    document.getElementById("personTable").innerHTML = filterTable;
};