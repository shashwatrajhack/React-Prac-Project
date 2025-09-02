import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  //let todos = ["Go to gym", "Eat food", "Do workOut"];

  const [todos, setTodos] = useState([]);
  const [editTodoValue, setEditTodoValue] = useState("");
  function handleAddTodos(newtodo) {
    const newTodoList = [...todos, newtodo];
    setTodos(newTodoList);
  }

  function deleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex != index;
    });
    setTodos(newTodoList);
  }

  function editTodo(index) {
    const valueTobeEdited = todos[index];
    setEditTodoValue(valueTobeEdited);
    deleteTodo(index);


  }

  return (
    <main>
      <TodoInput editTodo={editTodo} editTodoValue={editTodoValue} setEditTodoValue={setEditTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </main>
  );
}

export default App;
