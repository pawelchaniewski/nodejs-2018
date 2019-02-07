const uuidv4 = require("uuid/v4");
const axios = require("axios");

const API_KEY = "dyvwjzkp";

async function getTodoItems(category) {
    const response = await axios.get(
        `http://api.quuu.linuxpl.eu/todo/${API_KEY}`
    );
    todoItems = response.data.todoItems || [];

    if (category) {
        return todoItems.filter(todoItem => todoItem.category === category);
    } else {
        return todoItems;
    }
}

async function addTodoItem(title, category = "") {
    const todoItems = await getTodoItems();
    const todoItemId = uuidv4();
    const todoItem = {
        id: todoItemId,
        title,
        category,
        completed: false
    };

    todoItems.push(todoItem);

    try {
        await axios.post(`http://api.quuu.linuxpl.eu/todo/${API_KEY}`, {
            todoItems: todoItems
        });
        return todoItemId;
    } catch (err) {
        console.error(err);
        return;
    }
}

async function updateTodoItem(id, title, category, completed) {
    const todoItems = await getTodoItems();
    const todoItem = todoItems.find(todoItem => todoItem.id === id);

    if (!todoItem) {
        console.error(`todoItem not found! ${id}`);
        return;
    } else {
        todoItem.title = title ? title : todoItem.title;
        todoItem.category = category ? category : todoItem.category;
        todoItem.completed =
            completed === "true" || completed === "false"
                ? JSON.parse(completed)
                : todoItem.completed;

        await axios.post(`http://api.quuu.linuxpl.eu/todo/${API_KEY}`, {
            todoItems: todoItems
        });
    }
}

async function deleteTodoItem(id) {
    const todoItems = await getTodoItems();
    const todoItemIndex = todoItems.findIndex(todoItem => todoItem.id === id);

    if (todoItemIndex < 0) {
        console.error(`todoItem not found! ${id}`);
        return;
    } else {
        todoItems.splice(todoItemIndex, 1);

        await axios.post(`http://api.quuu.linuxpl.eu/todo/${API_KEY}`, {
            todoItems: todoItems
        });
    }
}

module.exports = {
    getTodoItems,
    addTodoItem,
    updateTodoItem,
    deleteTodoItem
};
