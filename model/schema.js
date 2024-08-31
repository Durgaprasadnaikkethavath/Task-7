const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseId: String,
  courseName: String,
});

const taskSchema = new mongoose.Schema({
  courseId: String,
  taskName: String,
  dueDate: String,
  details: String,
});

const Course = mongoose.model("Course", courseSchema);
const Task = mongoose.model("Task", taskSchema);
