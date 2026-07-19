import { createTodo } from "../interfaces/Todo";
const newTodo = createTodo(text);

setTodos([...todos, newTodo]);