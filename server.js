// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
const db = require("./models")
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("./public"));

// Routes
// =============================================================
<<<<<<< HEAD
require("./routes/apiRoutes")(app);
=======
require("./routes/apiroutes")(app);
>>>>>>> dcade95cc8496ccc86a3e9c1c7462bc11d9ec459

// Starts the server to begin listening
// =============================================================
db
.sequelize
.sync()
.then(function(){
app
.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
});
//