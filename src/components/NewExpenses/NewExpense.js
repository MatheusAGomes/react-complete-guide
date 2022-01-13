import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

function NewExpense (props) {
    const salvarDado = dado =>{
        const expenseData ={
            ...dado,
            id: Math.random().toString()
        }
        
        props.adicionarGasto(expenseData);
    }

return(
    <div className="new-expense">
        <ExpenseForm onSaveData={salvarDado}/>
    </div>
);}

export default NewExpense

