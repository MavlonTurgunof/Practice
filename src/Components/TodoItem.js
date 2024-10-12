import React from "react";

function TodoItem({ text, deleteTodo }) {
  return (
    <div className="max-w-2xl container mx-auto bg-blue-900 h-auto text-center mb-4 py-4 rounded-full flex justify-between">
      <p className="ml-20">{text}</p>
      <button onClick={() => deleteTodo(text)} className="mr-12">
        X
      </button>
    </div>
  );
}

export default TodoItem;
