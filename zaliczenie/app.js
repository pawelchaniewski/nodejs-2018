const api = require("./api");

(async () => {
    const todoItems = await api.getTodoItems();
    console.log(todoItems);

    // console.log("Adding: ", await addTodoItem("test"));
    console.log("Filter: ", await api.getTodoItems("dupa"));
    console.log("Filter WRONG: ", await api.getTodoItems("zyx"));
    console.log(
        "Update: ",
        await api.updateTodoItem(
            "30e6e31c-d8da-4a16-a539-fbe1aa84318c",
            "test_updated"
        )
    );
    console.log(
        "Delete: ",
        await api.deleteTodoItem("30e6e31c-d8da-4a16-a539-fbe1aa84318c")
    );
})();
