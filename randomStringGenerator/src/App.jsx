import { useState, useCallback, useEffect, useRef } from "react";
import "./index.css";
function App() {
  const [string, setString] = useState("");
  const [length, setLength] = useState(6);
  const [numeric, isNumeric] = useState(false);
  const [char, isChar] = useState(false);
  const stringRef = useRef(null);
  const createString = useCallback(() => {
    let x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let y = "@#$%&*!()<>~";
    let z = "123456789";
    let temp = "";
    if (numeric === true) x += z;
    if (char === true) x += y;
    if (numeric === true && char === true) x += z + y;
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * x.length);
      temp += x[index];
    }
    setString(temp);
  }, [length, numeric, char]);

  useEffect(() => {
    createString();
  }, [length, numeric, char]);

  return (
    <div className="w-screen h-screen bg-purple-950 flex flex-col justify-center">
      <h2
        className="text-orange-300 text-4xl flex justify-center"
        style={{ fontFamily: "cursive" }}
      >
        Random String Generator
      </h2>
      <div className="flex justify-center mt-2 gap-8">
        <input
          type="text"
          placeholder="string"
          className="p-2 rounded-md"
          readOnly
          value={string}
          ref={stringRef}
        />
        <button
          className="bg-orange-300 rounded-md p-4"
          onClick={() => {
            navigator.clipboard.writeText(string);
            stringRef.current.select();
          }}
        >
          Copy
        </button>
        <button className="bg-orange-300 rounded-md p-4" onClick={createString}>
          New
        </button>
      </div>
      <div className="flex justify-center mt-2 ">
        <input
          type="range"
          min={1}
          max={99}
          value={length}
          onChange={(event) => setLength(parseInt(event.target.value))}
        />
        <div className="text-center p-3 text-orange-300">length: {length}</div>
        <input
          type="checkbox"
          name="Numerics"
          id=""
          onClick={() => isNumeric(!numeric)}
        />
        <div className="text-center p-3 text-orange-300">Numerics</div>
        <input
          type="checkbox"
          name="Characters"
          id=""
          onClick={() => isChar(!char)}
        />
        <div className="text-center p-3 text-orange-300">Characters</div>
      </div>
    </div>
  );
}

export default App;
