const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

//connection to your db- mongo
const db =
  "mongodb+srv://AbuShree123:AbuShree123@practisecluster.9ueazjh.mongodb.net/?retryWrites=true&w=majority";

///This is an asynchronous function

mongoose
  .connect(db)
  .then(() => {
    console.log("Connected to the database");
    app.listen(process.env.PORT, () => {
      console.log("server is running");
    });
  })
  .catch((err) => console.log("Database connection error:", err));

require("dotenv").config();

app.use(cors());
app.use(express.json());
