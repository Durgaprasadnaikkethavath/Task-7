document
  .getElementById("task-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const courseId = document.getElementById("courseId").value;
    const taskName = document.getElementById("taskName").value;
    const dueDate = document.getElementById("dueDate").value;
    const details = document.getElementById("details").value;

    const task = {
      courseId,
      taskName,
      dueDate,
      details,
    };

    try {
      await fetch("/courses/" + courseId + "/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      alert("Task added successfully");
      fetchTasks(courseId); // Update task list
    } catch (err) {
      console.error("Error:", err);
    }
  });

async function fetchTasks(courseId) {
  try {
    const response = await fetch("/courses/" + courseId + "/tasks");
    const tasks = await response.json();
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const taskItem = document.createElement("div");
      taskItem.textContent = `${task.taskName} - Due: ${new Date(
        task.dueDate
      ).toDateString()}`;
      taskList.appendChild(taskItem);
    });
  } catch (err) {
    console.error("Error:", err);
  }
}
