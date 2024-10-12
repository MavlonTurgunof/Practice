import React, { useEffect, useRef } from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

function ToDo() {
  const [todos, setTodos] = useState([
    {
      text: "Doctor Appointment",
    },
    {
      text: "Meeting at School",
    },
  ]);

  const [text, setText] = useState("");
  const inputEl = useRef(null);

  useEffect(function () {
    inputEl.current.focus();
  }, []);

  function changeHandler(e) {
    return setText(e.target.value);
  }

  function addTask(text) {
    const newTodo = {
      text,
    };
    setTodos([...todos, newTodo]);
    setText("");
  }

  function deleteTodo(text) {
    setTodos(todos.filter((todo) => todo.text !== text));
  }

  return (
    <div className="bg-blue-900 h-screen ">
      <div className="max-w-7xl flex flex-col items-center bg-blue-600 container mx-auto h-[700px]">
        <div className="bg-blue-900 p-4 rounded-lg mb-8 h-auto mt-20">
          <h1 className="text-4xl font-bold">Hello this is the to-do list!</h1>
          <label className="mb-20">
            Enter todo:
            <input
              type="text"
              value={text}
              onChange={changeHandler}
              className="text-black ml-4 h-8 rounded-lg w-[400px]"
              ref={inputEl}
            />
            <button
              className="bg-blue-600 ml-4 px-4 py-2"
              onClick={() => addTask(text)}
            >
              Add
            </button>
          </label>
        </div>
        {todos.map((todo) => (
          <TodoItem text={todo.text} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
}

export default ToDo;
