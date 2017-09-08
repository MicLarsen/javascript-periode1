
const path = require("path");
let fs = require("fs");


const pathToFile = process.argv[2]; // main(String[] args) - main(argv[] args)
const ext = "." + process.argv[3]; // 


//a pattern often used in node is a callback function taking in 2 params: err & data:   function(err,data)
//First thing you should always do is to check the error - no reason to continue if an error occurs
fs.readdir(pathToFile, function (err, data) {
    if (err) {
        return err;
    }
    filtered = data.filter((file) => path.extname(file) === ext); //filter teakes each of the files (items in the returned data array) returned and filtering them
    console.log(filtered);
});

let dirSearcher = function (pathToDir, ext, callback) {
    fs.readdir(pathToFile, function (err, data) {
        if (err) {
            return callback(err); // we are not giving it the second argument because if the first is error it never checks the second - callback(err,data)
        }
        let extension = "." + ext;
        let filtered = data.filter((file) => path.extname(file) === extension); //filter teakes each of the files (items in the returned data array) returned and filtering them
        callback(null, filtered.join("\n")); //calling it with null because theres no error    join returns a string 
    });
}
module.exports = dirSearcher; // exporting the function so it can be used in another file
// the module.exports could have been written infron of the function instead of the 'let'

//so in the console write:    node learnNode.js  C:\Users\Michael\Documents\4. Semester - Full Stack Javascript
// does not work because of the spaces in the path ... ffs


//node learnNode.js Hello World     in command line says that we use node which file dop we want to execute and the arguments passed in

//output is:
//C:\Users\Michael\Documents\4. Semester - Full Stack Javascript>node learnNode.js Hello World
//1. argument: Where is my node program located ?:    [ 'C:\\Program Files\\nodejs\\node.exe',
//2. argument: Whats the path to the executed file?:  'C:\\Users\\Michael\\Documents\\4. Semester - Full Stack Javascript\\learnNode.js',
//3. argument: First argument parsed to the file:     'Hello',
//4. argument: Second argument parsed to the file:    'World' ]

