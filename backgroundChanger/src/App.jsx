import { useState } from 'react'
import './index.css'
function App() {
  const [color, setColor] = useState("gray")
  return (
    <>
      <div
        className=" w-screen h-screen flex flex-col justify-around"
        style={{ backgroundColor: color }}
      >
        <h1
          className="text-center text-6xl font-extrabold font-mono"
          style={{ fontFamily: "cursive" }}
        >
          Background changer
        </h1>
        <div className="btn-container flex flex-row gap-3 justify-center">
          <button
            className="rounded-md bg-red-500 hover:bg-red-700 size-40 text-2xl"
            style={{ fontFamily: "cursive" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="rounded-md bg-blue-500 hover:bg-blue-700 size-40 text-2xl"
            style={{ fontFamily: "cursive" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="rounded-md bg-yellow-400 hover:bg-yellow-600 size-40 text-2xl"
            style={{ fontFamily: "cursive" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
        </div>
      </div>
    </>
  );
}
export default App
