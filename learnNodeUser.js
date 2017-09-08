let myDirSearcher = require("./learnNode.js")   //importing the function from learnNode.js
//the above can be written without the .js

myDirSearcher(process.argv[2],process.argv[3],function(err,data) {
    if(err) {
        return console.log(err);
    }
    console.log(data);
}) 

// to test it in console: 
//  node learnNode.js 'path' js
//  js = extension ... what kind of file do you wanna 'grap' ? 