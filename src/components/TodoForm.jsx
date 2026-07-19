import { useState } from "react";

function TodoForm({ addTodo }) {

    const [text, setText] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        if (text.trim() === "") {
            alert("Lütfen bir görev giriniz.");
            return;
        }

        addTodo(text);

        setText("");

    }

    return (

            <form
                onSubmit={handleSubmit}
                className="mb-8"
            >
                
                <input
                    type="text"
                    placeholder="Yeni görev giriniz..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            
                <button
                    type="submit"
                    className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    + Görev Ekle
                </button>
                
            </form>

    );

}

export default TodoForm;