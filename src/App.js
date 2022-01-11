import Expense from "./components/Expenses/Expense";


const App = () => {
  
  const arr = [{ nome:"Carro", preco:2500, tempo: new Date(2020, 7, 14)},{ nome:"Compras", preco:200, tempo: new Date(2018, 2, 4)}];


  return (
    <div>
      <h1>Expense List</h1>
     <Expense arr = {arr}/>
    </div>
  );
}

export default App;
