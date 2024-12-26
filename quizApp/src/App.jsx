import Quiz from "./components/Quiz";
function App() {
    return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-screen h-screen flex justify-center items-center">
      <div className="w-2/3 h-2/3 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-col rounded-lg text-2xl">
        <Quiz></Quiz>
      </div>
    </div>
  );
}

export default App;
