import React,{ useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpenses/NewExpense";


const arr = [{id:'1', nome:"Carro", preco:2500, tempo: new Date(2020, 7, 14)},{id:'2', nome:"Compras", preco:200, tempo: new Date(2021, 2, 4)}];

const App = () => {
  
  const [objeto,setExpenses] = useState(arr);

  const addExpenseHandler = (expense) => {
    console.log(objeto)
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    
  };

  return (
    <div>
      <h1>Expense List</h1>
      <NewExpense adicionarGasto={addExpenseHandler} />
     <Expense arr = {objeto}/>
    </div>
  );
}

export default App;
