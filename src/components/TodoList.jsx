import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, updateTodo, toggleComplete }) {

    if (todos.length === 0) {

if (todos.length === 0) {

    return (

        <div className="bg-slate-50 border-2 border-dashed border-gray-300 rounded-lg p-10 text-center">

            <h2 className="text-xl font-semibold">
                📭
            </h2>

            <p className="text-gray-500 mt-3">
                Henüz görev eklenmedi.
            </p>

        </div>

    );

}

    }

    return (

        <div className="space-y-4">

            {
                todos.map((todo) => (

                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                        toggleComplete={toggleComplete}
                    />

                ))
            }

        </div>

    );

}

export default TodoList;