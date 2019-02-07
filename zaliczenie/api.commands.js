const {
    getTodoItems,
    addTodoItem,
    updateTodoItem,
    deleteTodoItem
} = require("./api");

const updateCommand = {
    command: "update <id> [title] [category] [completed]",
    describe: "Update to-do item",
    handler: async args => {
        try {
            await updateTodoItem(
                args.id,
                args.title,
                args.category,
                args.completed
            );
        } catch (error) {
            console.error(error.message);
        }
    }
};

const createCommand = {
    command: "add <title> [category]",
    describe: "Add new to-do item",
    handler: async args => {
        const result = await addTodoItem(args.title, args.category);
        console.log("to-do item id:", result);
    }
};

const deleteCommand = {
    command: "delete <id>",
    describe: "Delete to-do item",
    handler: async args => {
        try {
            await deleteTodoItem(args.id);
        } catch (error) {
            console.error(error.message);
        }
    }
};

const getCommand = {
    command: "get [category]",
    describe: "Get to-do items",
    handler: async args => {
        try {
            const result = await getTodoItems(args.category);
            console.table(result);
        } catch (error) {
            console.error(error.message);
        }
    }
};

module.exports = [updateCommand, getCommand, createCommand, deleteCommand];
