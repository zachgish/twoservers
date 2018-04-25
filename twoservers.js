var http = require("http");

var port7500 = 7500;
var port7000 = 7000;

function handlePort7500 (request, response){

    response.end("Let's go!! You're a master!" + request.url);
}

function handlePort7000 (request, response) {

    response.end("So two dogs walk into a bar!" + request.url);
}

var serverone = http.createServer(handlePort7500);
var servertwo = http.createServer(handlePort7000);

serverone.listen(handlePort7000, function(){
    console.log("Server listenting on: http://localhost" + handlePort7000);
});

servertwo.listen(handlePort7500, function(){
    console.log("server listening on: http://localhost" + handlePort7500);
});
