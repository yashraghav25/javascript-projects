import { useState } from "react";
function Todoinput() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function AddTodo(newTodo) {
    setTodos((x) => [...x, newTodo]);
  }
  return (
    <div className="w-3/5 h-3/6 rounded-xl">
      <h1 className="text-center text-4xl font-mono mb-3 shadow-md shadow-black">
        Todo-list
      </h1>
      <div className="flex flex-row justify-center items-center">
        <input
          type="text"
          className="w-full rounded-md bg-black text-white p-3 shadow-md shadow-black"
          placeholder="Enter your Task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="rounded-md bg-black text-white p-3 shadow-md shadow-black ml-2 hover:bg-white hover:text-black"
          onClick={() => {
            if (todo.length === 0) {
              alert("Donot leave empty");
              return;
            } else if (todos.includes(todo)) {
              alert("already exists");
              setTodo("");
              return;
            }
            AddTodo(todo);
            setTodo("");
          }}
        >
          Add
        </button>
      </div>
      <div>
        <ul>
          {todos.map((element, index) => (
            <li
              key={index}
              className={`text-white mt-4 flex   items-center w-full rounded-md bg-black p-3 shadow-md shadow-black hover:bg-gray-200 hover:text-black`}
            >
              <div className="w-full flex justify-between">
                  {element}


                <div className="flex justify-end gap-2 text-wrap text-left items-center">
                  <button
                    className="bg-green-600 rounded-md p-1 w-13 yo"
                    onClick={() => {
                      ToggleEvent(isDone);
                      setTodos((prev) => prev.filter((_, x) => x !== index));
                    }}
                  >
                    <span>Done</span>
                  </button>
                  <button
                    className="bg-red-500 rounded-md p-1 w-13"
                    onClick={() => {
                      setTodos((prev) => prev.filter((_, x) => x !== index));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todoinput;
