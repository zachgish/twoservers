var http = require("http");

var port7500 = 7500;
var port7000 = 7000;

function handleRequest (request, response){

    response.end("Let's go!! You're a master!" + request.url);
}

function handleRequest2 (request, response) {

    response.end("So two dogs walk into a bar!" + request.url);
}

var serverone = http.createServer(handleRequest);
var servertwo = http.createServer(handleRequest2);

serverone.listen(port7500, function(){
    console.log("Server listenting on: http://localhost" + port7500);
});

servertwo.listen(port7000, function(){
    console.log("server listening on: http://localhost" + port7000);
});
