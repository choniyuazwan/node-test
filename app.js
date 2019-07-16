var Express = require("express");

var app = Express();

app.get("/",(request, response)=>{
    response.status(200).send("The Polyglot Developer");
});

app.get("/test", (request, response)=>{
  // if(!request.query.id) {
  //   response.status(401).send({"message": "id required"});
  // }
  response.status(500).send({"message": "This is error response"});
});

var server = app.listen(3000,()=>{
    console.log("Listening on port" + server.address().port+ "...");
});

module.exports = server;