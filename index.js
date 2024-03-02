const express = require("express");
const cors = require("cors");
const path = require('path')
const app = express()
const port = process.env.PORT || 3000;

const courses = require("./data/courses.json")
const coursesCategory = require("./data/categories.json");

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) =>
{
  res.send("Hello")
})


app.listen(port, () =>
{
  console.log("app listening on port: ",port)
})