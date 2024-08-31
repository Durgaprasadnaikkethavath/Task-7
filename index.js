const express = require("express");
const app = express();
const port = 3100;

app.use(express.static("public"));

require("./db/conn");

const Task = require("./model/schema");

app.get("/", (req, res) => {
  res.send("<h1>Welcome to course and add task project build</h1>");
});

app.get("/courses/:courseId/tasks", async (req, res) => {
  const { courseId } = req.params;
  try {
    const tasks = await Task.find({ courseId });
    if (tasks.length === 0) {
      return res
        .status(404)
        .json({ message: "No tasks found for this course" });
    }
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

app.listen(port, (req, res) => {
  console.log(`server listening at port ${port}`);
});
