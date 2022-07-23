import { useState } from "react";

import TodoSide from "Components/todolist/TodoSide";
import SiteMap from "Components/SiteMap";

const TodoList = () => {
    return <main id="todo-list">
        <TodoSide />
        <section></section>
        <SiteMap />
    </main>
}

export default TodoList;