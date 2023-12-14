const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { router } = require("./routes/userRoutes");

const app = express();
require("dotenv").config();

// First, use the cors middleware
app.use(cors());

// Then, use the express.json middleware to parse JSON bodies
app.use(express.json());

// After setting up your middlewares, define your routes
app.use("/api/auth", router);

// Connection to your MongoDB database
const DB_URI =
  "mongodb+srv://AbuShree123:AbuShree123@practisecluster.9ueazjh.mongodb.net/chat-app?retryWrites=true&w=majority";
// PORT = 3000;

// This is an asynchronous function
require("dotenv").config();
const db = DB_URI;

mongoose
  .connect(db)
  .then(() => {
    console.log("Connected to the database");
    app.listen(5000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("Database connection error:", err));
