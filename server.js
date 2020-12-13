//Entry point (file to be executed)

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

//app-create server
const app = express();

// database
mongoose
  .connect(process.env.DATEBASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log("DB CONNECTION SUCCESS"))
  .catch((err) => console.log("DB CONNECTION ERROR", err));

//middlewares- function running in between ie. when perfoming certain actions - use method is used

app.use(morgan("dev"));
// body-parser allows express read the post body and parse it to a json object
app.use(bodyParser.json({ limit: "2mb" }));
//cors - allows restricted resources on website to be resquested from another domain
app.use(cors);

//route
// takes 2 arguments(url, callback to access response and request)
app.get("/api", (res, req) => {
  res.json({
    data: "Node api",
  });
});

const port = process.env.PORT;
