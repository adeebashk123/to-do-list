document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskList = document.getElementById('taskList');

    if (taskInput.value === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskInput.value} - ${taskDate.value}</span>
        <button onclick="markComplete(this)">✔️</button>
        <button onclick="editTask(this)">✏️</button>
        <button onclick="deleteTask(this)">❌</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
    taskDate.value = '';
}

function markComplete(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');
}

function editTask(button) {
    const li = button.parentElement;
    const taskText = li.querySelector('span').innerText.split(' - ')[0];
    const taskDate = li.querySelector('span').innerText.split(' - ')[1];

    const newTask = prompt('Edit your task:', taskText);
    const newDate = prompt('Edit your date and time:', taskDate);

    if (newTask !== null && newTask !== '') {
        li.querySelector('span').innerHTML = `${newTask} - ${newDate}`;
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}