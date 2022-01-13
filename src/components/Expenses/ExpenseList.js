
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';
const ExpenseList = props => {
    

    if (props.item.length === 0) 
    {
        return <h2 className="expenses-list__fallback"> Found no expenses </h2>

    }


    return(
        <ul className="expenses-list">
            {props.item.map(expense => <ExpenseItem key={expense.id} nome={expense.nome} preco={expense.preco} tempo={expense.tempo} />)}
        </ul>
    );
}

export default ExpenseList