const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const port = 8000;

const Product = require("./models/Product");
const SignUp = require("./models/SignUp");
const SignIn = require("./models/SignIn");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/addproducts", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
    console.log("Data inserted");
  } catch (error) {
    res.send("Data not inserted");
  }
});

app.get("/getproducts", async (req, res) => {
  try {
    const product = await Product.find({});
    res.json(product);
    console.log("Data fetched");
  } catch (error) {
    res.send("Data not fetched");
  }
});

app.post("/signup", async (req, res) => {
  try {
    const signup = await SignUp.create(req.body);
    res.json(signup);
    console.log("User Created");
  } catch (error) {
    res.send("User not Created");
  }
});


app.post("/signin", async (req, res) => {
  try {
    const signin = await SignIn.create(req.body);
    res.json(signin);
    console.log("User LoggedIn");
  } catch (error) {
    res.send("User not LoggedIn");
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

mongoose
  .connect(
    "mongodb://localhost:27017/BackEnd-task2"
  )
  .then(() => {
    console.log("Connected to MongoDB Successfully");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });