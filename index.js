'use strict'
let http = require("http");

var port = 1234;
var host = "localhost";

//let server = http.createServer(function callBack(request, response){
//    response.setHeader("Content-type","text/html");
//    response.end("<h1>Hello World!</h1>");
//});

let server = http.createServer((request,response) => response.setHeader("Content-type","text/html") response.end("<h1>Hello World!</h1>"))

//server.listen(1234,"localhost",function callBack() {
//    console.log("#Server is started. listening on port: " + 1234);
//});

server.listen(port, host,() => console.log("Server " + host + " is started. listening on port: " + port))  