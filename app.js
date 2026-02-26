// 要素取得
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const priorityInput = document.getElementById('priority-input');
const deadlineInput = document.getElementById('deadline-input');
const taskList = document.getElementById('task-list');
const completedTaskList = document.getElementById('completed-task-list');
const taskCount = document.getElementById('task-count');
const taskActiveCount = document.getElementById('task-active-count');

let tasks = [];
let editIndex = null;

function renderTasks() {
  taskList.innerHTML = '';
  completedTaskList.innerHTML = '';
  let activeCount = 0;
  tasks.forEach((task, idx) => {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.completed ? ' completed' : '');
    const priority = document.createElement('span');
    priority.className = 'priority ' + task.priority;
    priority.textContent = task.priority;
    const deadline = document.createElement('span');
    deadline.className = 'deadline';
    deadline.textContent = task.deadline ? `期限: ${task.deadline}` : '';
    const span = document.createElement('span');
    span.textContent = task.text;
    span.onclick = () => toggleTask(idx);
    const editBtn = document.createElement('button');
    editBtn.textContent = '編集';
    editBtn.className = 'edit-btn';
    editBtn.onclick = () => editTask(idx);
    const delBtn = document.createElement('button');
    delBtn.textContent = '削除';
    delBtn.className = 'delete-btn';
    delBtn.onclick = () => deleteTask(idx);
    li.appendChild(priority);
    li.appendChild(deadline);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    if (task.completed) {
      completedTaskList.appendChild(li);
    } else {
      taskList.appendChild(li);
      activeCount++;
    }
  });
  taskCount.textContent = `タスク数: ${tasks.length}`;
  taskActiveCount.textContent = `未完了: ${activeCount}`;
}

function addTask(text, priority, deadline) {
  tasks.push({ text, priority, deadline, completed: false });
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

function editTask(idx) {
  editIndex = idx;
  taskInput.value = tasks[idx].text;
  priorityInput.value = tasks[idx].priority;
  deadlineInput.value = tasks[idx].deadline;
}

taskForm.onsubmit = function(e) {
  e.preventDefault();
  const text = taskInput.value.trim();
  const priority = priorityInput.value;
  const deadline = deadlineInput.value;
  if (!text) return;
  if (editIndex !== null) {
    tasks[editIndex].text = text;
    tasks[editIndex].priority = priority;
    tasks[editIndex].deadline = deadline;
    editIndex = null;
  } else {
    addTask(text, priority, deadline);
  }
  taskInput.value = '';
  priorityInput.value = '中';
  deadlineInput.value = '';
  renderTasks();
};

renderTasks();

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const priorityInput = document.getElementById('priority-input');
const deadlineInput = document.getElementById('deadline-input');
const taskList = document.getElementById('task-list');
const completedTaskList = document.getElementById('completed-task-list');
const taskCount = document.getElementById('task-count');
const taskActiveCount = document.getElementById('task-active-count');

let tasks = [];
let editIndex = null;

function renderTasks() {
  // 未完了タスク
  taskList.innerHTML = '';
  // 完了タスク
  completedTaskList.innerHTML = '';
  let activeCount = 0;
  tasks.forEach((task, idx) => {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.completed ? ' completed' : '');
    // 優先度
    const priority = document.createElement('span');
    priority.className = 'priority ' + task.priority;
    priority.textContent = task.priority;
    // 期限
    const deadline = document.createElement('span');
    deadline.className = 'deadline';
    deadline.textContent = task.deadline ? `期限: ${task.deadline}` : '';
    // タスク内容
    const span = document.createElement('span');
    span.textContent = task.text;
    span.onclick = () => toggleTask(idx);
    // 編集ボタン
    const editBtn = document.createElement('button');
    editBtn.textContent = '編集';
    editBtn.className = 'edit-btn';
    editBtn.onclick = () => editTask(idx);
    // 削除ボタン
    const delBtn = document.createElement('button');
    delBtn.textContent = '削除';
    delBtn.className = 'delete-btn';
    delBtn.onclick = () => deleteTask(idx);
    li.appendChild(priority);
    li.appendChild(deadline);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    if (task.completed) {
      completedTaskList.appendChild(li);
    } else {
      taskList.appendChild(li);
      activeCount++;
    }
  });
  taskCount.textContent = `タスク数: ${tasks.length}`;
  taskActiveCount.textContent = `未完了: ${activeCount}`;
}

function addTask(text, priority, deadline) {
  tasks.push({ text, priority, deadline, completed: false });
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

function editTask(idx) {
  editIndex = idx;
  taskInput.value = tasks[idx].text;
  priorityInput.value = tasks[idx].priority;
  deadlineInput.value = tasks[idx].deadline;
}

taskForm.onsubmit = function(e) {
  e.preventDefault();
  const text = taskInput.value.trim();
  const priority = priorityInput.value;
  const deadline = deadlineInput.value;
  if (!text) return;
  if (editIndex !== null) {
    tasks[editIndex].text = text;
    tasks[editIndex].priority = priority;
    tasks[editIndex].deadline = deadline;
    editIndex = null;
  } else {
    addTask(text, priority, deadline);
  }
  taskInput.value = '';
  priorityInput.value = '中';
  deadlineInput.value = '';
  renderTasks();
};

renderTasks();
