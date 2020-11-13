const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");


// Can use this instead of the global process nodejs gives you
// 
// const ENV_PARAMETERS = require("../nodemon.json");
// const MONGO_API = ENV_PARAMETERS.env.MONGO_ATLAS_PW;

const app = express();

mongoose.connect(
    "mongodb+srv://jovan:" +
     process.env.MONGO_ATLAS_PW +
     "@meanstackcluster.xbajk.mongodb.net/node-angular?retryWrites=true&w=majority"
    )
    .then(() => {
    console.log("Connected to database!");
    })
    .catch(() => {
    console.log("Connection failed!");
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);

app.use("/api/user", userRoutes);

module.exports = app;
