document.addEventListener('DOMContentLoaded', () => {
    const entryPage = document.querySelector('.entry-page');
    const todoPage = document.querySelector('.todo-page');
    const enterButton = document.getElementById('enter-button');
    const themeToggle = document.getElementById('theme-toggle');
    const addTaskButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const taskCategory = document.getElementById('task-category');
    const taskList = document.getElementById('task-list');
    let darkMode = false;

    enterButton.addEventListener('click', () => {
        entryPage.classList.add('hide');
        setTimeout(() => {
            entryPage.style.display = 'none';
            todoPage.style.display = 'block';
        }, 1000);
    });

    themeToggle.addEventListener('click', () => {
        darkMode = !darkMode;
        if (darkMode) {
            todoPage.classList.add('dark-mode');
        } else {
            todoPage.classList.remove('dark-mode');
        }
    });

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value;
        const taskDueDate = taskDate.value;
        const taskCat = taskCategory.value;

        if (taskText) {
            const listItem = document.createElement('li');
            listItem.className = 'task-item';
            listItem.innerHTML = `
                <span>${taskText} - ${taskDueDate} - ${taskCat}</span>
                <div class="task-buttons">
                    <button class="complete">&#10003;</button>
                    <button class="delete">&#10005;</button>
                </div>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';
            taskDate.value = '';
            taskCategory.value = 'Work';

            listItem.querySelector('.complete').addEventListener('click', () => {
                listItem.classList.toggle('complete');
            });

            listItem.querySelector('.delete').addEventListener('click', () => {
                taskList.removeChild(listItem);
            });
        }
    });
});




