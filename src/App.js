import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpenses/NewExpense";


const App = () => {
  
  const arr = [{id:1, nome:"Carro", preco:2500, tempo: new Date(2020, 7, 14)},{id:2, nome:"Compras", preco:200, tempo: new Date(2018, 2, 4)}];

  function gatilhoAdicionarGasto(expense){
    console.log(expense);
  }

  return (
    <div>
      <h1>Expense List</h1>
      <NewExpense adicionarGasto={gatilhoAdicionarGasto} />
     <Expense arr = {arr}/>
    </div>
  );
}

export default App;
