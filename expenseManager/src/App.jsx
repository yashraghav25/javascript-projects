import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
function App() {
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [totalExpense, setTotalExpense] = useState(0);
  const addExpense = () => {
    if (expense && expenseName) {
      setExpenses([...expenses, { name: expenseName, amount: Number(expense) }]);
      setExpense("");
      setExpenseName("");
      setTotalExpense(totalExpense + Number(expense));
    } else if (!expenseName && expense) {
      alert("Please enter the expense name.");
    } else if (!expense && expenseName) {
      alert("Please enter the expense amount.");
    } else {
      alert("Please enter the expense name and amount.");
    }
  };


  const chartData = {
    labels: expenses.map((x) => x.name),
    datasets: [
      {
        label: "Expense Amount",
        data: expenses.map((x) => x.amount), 
        backgroundColor: "rgba(255, 99, 132, 0.5)", 
        borderColor: "rgba(255, 99, 132, 1)",  
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Expenses Overview",
      },
    },
  };

  return (
    <div className="w-screen h-screen flex flex-row gap-2 justify-center items-center bg-slate-900">
      <div className="bg-orange-700 rounded-2xl shadow-lg shadow-blue-800 p-4 mb-4">
        <div className="flex justify-between gap-2">
          <input
            type="text"
            placeholder="Title of expense"
            className="rounded-md bg-slate-900 text-white shadow-md shadow-black p-2"
            onChange={(e) => setExpenseName(e.target.value)}
            value={expenseName}
          />
          <input
            type="number"
            placeholder="Expense amount"
            className="rounded-md bg-slate-900 text-white shadow-md shadow-black p-2"
            onChange={(e) => setExpense(e.target.value)}
            value={expense}
          />
          <button
            className="rounded-md bg-slate-900 text-white p-3 shadow-md shadow-black hover:bg-orange-700"
            onClick={addExpense}
          >
            Add Expense
          </button>

        </div>
        <div className="mt-4">
          <ul className="flex flex-col gap-2">
            {expenses.map((x, index) => (
              <li
                key={index}
                className="bg-slate-900 text-white p-3 shadow-md shadow-black"
              >
                <div className="flex justify-between">
                  <div>{x.name}</div>
                  <div>${x.amount}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-white bg-slate-900 rounded-2xl shadow-lg shadow-blue-800 p-4 mt-4 text-center">
            Total Amount: {totalExpense}
          </div>
        </div>
      </div>
      <div className="w-full max-w-2xl bg-slate-900 rounded-2xl shadow-lg shadow-blue-800 p-4 ">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );}
export default App;
