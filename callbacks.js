//these callbacks are not asyncronich
//methods in arrays that use callbacks: forEach , filter, map, reduce, join
let names = ["John","Austin","William", "ib","Bartholomi"];

let names2 = names.filter((name) => {return name.length <= 5 });

//let rows = names.map((name) => {return 
//    "<td>" + name + "</td>";
//})

let rows = names.map(function(name) {
    return "<td>" + name + "</td>";
});

let rowStr = rows.join(" ");

let table = 
`<table>
     <tbody>
         ${rowStr}  
     </tbody>
</table>`


//console.log(names2);
console.log(table);