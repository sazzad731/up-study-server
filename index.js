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

// show all categories
app.get("/course-categories", (req, res) => {
  res.send(coursesCategory);
});

// for selected course
app.get('/course/:id', (req, res) =>
{
  const id = req.params.id;
  const selectedCourse = courses.find(course => course._id === id)
  res.send(selectedCourse);
})

// for categories
app.get('/category/:id', (req, res) =>
{
  const id = req.params.id;
  if (id === '0')
  {
    res.send(courses);
  } else
  {
    const selectedCategory = courses.filter(categories => categories.category_id === id);
    res.send(selectedCategory);
  }
})


app.listen(port, () =>
{
  console.log("app listening on port: ",port)
})