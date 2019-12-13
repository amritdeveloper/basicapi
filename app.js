const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

// middleware
app.use(cors());
app.use(bodyParser.json());

const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

app.get("/", (_req, res) => {
  res.send("We are on home");
});

// Connect to DB
mongoose.connect(
  "mongodb+srv://test:test123@test-wjsap.mongodb.net/test?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("DB is connected!");
  }
);

// port to list request
app.listen(9000);

//
