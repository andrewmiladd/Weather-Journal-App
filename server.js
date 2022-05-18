// Setup empty JS object to act as endpoint for all routes

let projectData = {};

// Require Express to run server and routes

const express = require("express");

// Start up an instance of app

const app = express();

/* Middleware*/

const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Cors for cross origin allowance

const cors = require("cors");

app.use(cors());

// Initialize the main project folder

app.use(express.static("website"));

// Setup Server

const port = 8000;

const server = app.listen(port, listening);
/* function to tes the serve ris running*/
function listening() {
  console.log(`server is running on port: ${port}`);
}
//GET Method to retrieve data for the user
app.get("/getdata", (req, res) => {
  res.send(projectData);
});
// POST Method to take the user's data and respond with the informations
app.post("/add", (req, res) => {
  projectData = req.body;

  res.send(projectData);
});