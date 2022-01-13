import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
import {useState} from 'react'

function NewExpense (props) {

    const [condicao,setCondicao] = useState(false);

    const salvarDado = dado =>{
        const expenseData ={
            ...dado,
            id: Math.random().toString()
        }
        
        props.adicionarGasto(expenseData);
        cancelarEvento();
    }
    const cancelarEvento = () =>{
        setCondicao(false);
    }
    

return(
    <div className="new-expense">
       
        {condicao == false ?  <button onClick={() => {setCondicao(true)}}>Add expense</button>:(<ExpenseForm onSaveData={salvarDado} onCancelEvent={cancelarEvento}/>)}
        
    </div>
);}

export default NewExpense

