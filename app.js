const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

let tasks = [];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, idx) => {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.completed ? ' completed' : '');
    const span = document.createElement('span');
    span.textContent = task.text;
    span.onclick = () => toggleTask(idx);
    const delBtn = document.createElement('button');
    delBtn.textContent = '削除';
    delBtn.className = 'delete-btn';
    delBtn.onclick = () => deleteTask(idx);
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

function addTask(text) {
  tasks.push({ text, completed: false });
  renderTasks();
}

function toggleTask(idx) {
  tasks[idx].completed = !tasks[idx].completed;
  renderTasks();
}

function deleteTask(idx) {
  tasks.splice(idx, 1);
  renderTasks();
}

taskForm.onsubmit = function(e) {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (text) {
    addTask(text);
    taskInput.value = '';
  }
};

renderTasks();
