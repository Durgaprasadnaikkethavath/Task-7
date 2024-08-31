const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/student_tasks")
  .then(() => console.log("server was connected"))
  .catch(() => console.log("server not connected"));
