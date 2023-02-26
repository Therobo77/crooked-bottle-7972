const http = require("http");
const express = require("express");
const bid = require("./bid");
const port = 7070;
const cors = require("cors");

const app = express();
app.use(cors());
app.use("/pay", bid);

// Create a server object:
const server = http.createServer(function (req, res) {
  // Write a response to the client
  res.write("Hello World");

  // End the response
  res.end();
});

// Set up our server so it will listen on the port
server.listen(port, function (error) {
  // Checking any error occur while listening on port
  if (error) {
    console.log("Something went wrong", error);
  }
  // Else sent message of listening
  else {
    console.log("Server is listening on port" + port);
  }
});
