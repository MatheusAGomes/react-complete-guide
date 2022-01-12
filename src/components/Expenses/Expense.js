import {useState} from "react"
import ExpenseItem from "./ExpenseItem";
import "./Expense.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpenseFilter";
const Expense = (props) => {
        const [anoFiltrado,setAnoFiltrado] = useState('2020');
    const anoFiltro = ano =>{
        setAnoFiltrado(ano);
    }


    return (
        <Card className="expenses">
        <ExpensesFilter gatilhoAnoFiltro={anoFiltro} ano={anoFiltrado}/>
        <ExpenseItem nome={props.arr[0].nome} preco={props.arr[0].preco} tempo={props.arr[0].tempo}></ExpenseItem>
        <ExpenseItem nome={props.arr[1].nome} preco={props.arr[1].preco} tempo={props.arr[1].tempo}></ExpenseItem>     
        </Card>
    );

}
export default Expense