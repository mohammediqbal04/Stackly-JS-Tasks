// DOM Selection
const input = document.querySelector("#taskInput");
const button = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");

// Handling button click
button.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create list items
  const li = document.createElement("li");
  li.className = "task-item";

  // Task text
  const span = document.createElement("span");
  span.innerText = taskText;
  span.className = "task-text";

  // Delete functionality
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-trash delete-btn";

  deleteIcon.addEventListener("click", () => {
    li.remove();
  });

  // Append elements
  li.append(span, deleteIcon);
  list.append(li);

  // Clear input
  input.value = "";
});
