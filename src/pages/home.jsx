import { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function Home() {

    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
    
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    // Todo listesi değişince LocalStorage'a kaydet
    useEffect(() => {

        localStorage.setItem("todos", JSON.stringify(todos));

    }, [todos]);

    // Yeni görev ekle
    function addTodo(text) {

        if (text.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleString("tr-TR"),
        };

        setTodos([...todos, newTodo]);

    }
const completedCount = todos.filter(todo => todo.completed).length;
    // Görev sil
    function deleteTodo(id) {

        const updatedTodos = todos.filter((todo) => todo.id !== id);

        setTodos(updatedTodos);

    }

    // Görev güncelle
    function updateTodo(id, newText) {

        const updatedTodos = todos.map((todo) => {

            if (todo.id === id) {

                return {
                    ...todo,
                    text: newText,
                };

            }

            return todo;

        });

        setTodos(updatedTodos);

    }
    function toggleComplete(id) {

    const updatedTodos = todos.map((todo) => {

        if (todo.id === id) {

            return {
                ...todo,
                completed: !todo.completed,
            };

        }

        return todo;

    });

    setTodos(updatedTodos);

}
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-slate-200 py-10">

            <div className="max-w-2xl mx-auto">

                <div className="bg-white rounded-xl shadow-lg p-8">

                    <h1 className="text-4xl font-bold text-center text-blue-600">
                        📝 Todo App
                    </h1>

                    <p className="text-center text-gray-500 mt-2 mb-8">
                        Günlük görevlerini kolayca yönet.
                    </p>

                    <TodoForm addTodo={addTodo} />

                    <div className="flex justify-between items-center mb-4">

                        <h2 className="font-semibold text-gray-700">
                            Görevler
                        </h2>

                        <div className="flex gap-2">

    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
        Toplam: {todos.length}
    </span>

    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
        Tamamlanan: {completedCount}
    </span>

</div>

                    </div>

                    <TodoList
                        todos={todos}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                        toggleComplete={toggleComplete}
                    />

                </div>

            </div>

        </div>
    );

}

export default Home;