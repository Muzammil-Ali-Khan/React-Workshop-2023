import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { getFromLocalStorage, setLocalStorage } from "../utils/helpers";

const Todos = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = getFromLocalStorage("todos");
    if (data) {
      setTodos(data);
    }
  }, []);

  const handleAddTodo = (title, description) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), title, description, isCompleted: false },
    ];
    setTodos(newTodos);
    setLocalStorage("todos", newTodos);
  };
  const handleCompleteTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: true };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
    setLocalStorage("todos", newTodos);
  };
  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setLocalStorage("todos", newTodos);
  };

  return (
    <div className="todos">
      <h1 className="">My Todos</h1>

      {/* Add Todo Component */}
      <div className="add-todo">
        <div className="input-fields-box">
          <div className="input-box">
            <label id="title">Title</label>
            <input
              className="input-field"
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label id="description">Description</label>
            <input
              className="input-field"
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <button
          className="add-button button"
          onClick={() => handleAddTodo(title, description)}
        >
          Add Todo
        </button>
      </div>

      {/* Todo List Component */}
      <div className="todo-list">
        {todos.map((todo, index) => {
          return (
            <div className="todo">
              <div className="todo-data">
                {todo.isCompleted ? (
                  <h2
                    style={{
                      textDecoration: "line-through",
                      textDecorationColor: "black",
                    }}
                  >
                    {todo.title}
                  </h2>
                ) : (
                  <h2>{todo.title}</h2>
                )}
                <p>{todo.description}</p>
              </div>

              <div className="buttons-div">
                <BsCheckCircle
                  className="complete-button icon-button"
                  onClick={() => handleCompleteTodo(todo.id)}
                />
                <AiOutlineDelete
                  className="delete-button icon-button"
                  onClick={() => handleDeleteTodo(todo.id)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
