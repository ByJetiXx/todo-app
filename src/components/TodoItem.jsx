import { useState } from "react";

function TodoItem({ todo, deleteTodo, updateTodo, toggleComplete }) {

    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    function handleUpdate() {

        if (newText.trim() === "") {
            alert("Görev boş olamaz.");
            return;
        }

        updateTodo(todo.id, newText);
        setIsEditing(false);
    }

    return (
            <div className="bg-white border rounded-lg shadow-sm p-4 flex justify-between items-center hover:shadow-md transition">
                <input
    type="checkbox"
    checked={todo.completed}
    onChange={() => toggleComplete(todo.id)}
    className="w-5 h-5"
/>
            {
                isEditing ? (
                    
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        className="border rounded-lg p-2 flex-1 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                ) : (

                    <div className="flex-1 ml-4">
                        <p
                            className={`text-lg ${
                                todo.completed
                                    ? "line-through text-gray-400"
                                    : "text-gray-800"
                            }`}
                        >
                            {todo.text}
                        </p>
                        
                        <p className="text-sm text-gray-500 mt-1">
                            📅 {todo.createdAt}
                        </p>
                        
                    </div>

                )
            }

            <div className="flex gap-2">

                {
                    isEditing ? (

                        <button
                            onClick={handleUpdate}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                        >
                            Kaydet
                        </button>

                    ) : (

                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition"
                        >
                            Düzenle
                        </button>

                    )
                }

                <button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                >
                    Sil
                </button>

            </div>

        </div>
    );
}

export default TodoItem;