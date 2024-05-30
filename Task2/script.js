document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const categoryInput = document.getElementById('category');
    const addTaskButton = document.getElementById('add-task');
    const tasksList = document.getElementById('tasks');
    const modeToggle = document.getElementById('mode-toggle');

    addTaskButton.addEventListener('click', addTask);
    modeToggle.addEventListener('click', toggleMode);

    function addTask() {
        const taskText = taskInput.value.trim();
        const dueDate = dueDateInput.value;
        const category = categoryInput.value;

        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${taskText} (Due: ${dueDate}, Category: ${category})</span>
                <div class="actions">
                    <button onclick="completeTask(this)">&#10003;</button>
                    <button onclick="deleteTask(this)">&#10005;</button>
                </div>
            `;
            tasksList.appendChild(listItem);
            taskInput.value = '';
            dueDateInput.value = '';
            categoryInput.value = 'General';
        }
    }

    window.completeTask = function (button) {
        const listItem = button.parentElement.parentElement;
        listItem.classList.toggle('complete');
    };

    window.deleteTask = function (button) {
        const listItem = button.parentElement.parentElement;
        listItem.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            listItem.remove();
        }, 3000);
    };

    function toggleMode() {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
            modeToggle.textContent = 'Light Mode';
        } else {
            modeToggle.textContent = 'Dark Mode';
        }
    }
});







