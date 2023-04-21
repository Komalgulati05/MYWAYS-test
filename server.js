const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();
const username = "Komal";
const password = "<password>";
const cluster = "cluster 0";
const dbname = "myways";

mongoose.connect(
  `mongodb+srv://${Tandarust}:${komal}@${cluster0}.mongodb.net/${myways}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);
app.use(express.json());