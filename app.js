// Entry point
// app.js

const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

// Execute db.js file
require("./db");

// Setting port
const port = process.env.PORT || 4000;

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/books", require("./routes/books"));

//Serve static asssets if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("frontend/build"));
  // *  = anything
  app.get("*", (req, res) => {
    // res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });
}

// Binds and listens for connections on the specified host and port
app.listen(port, () => console.log(`Server running on port ${port}`));
