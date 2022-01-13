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


    function yearFilter(arr) {
        return arr.tempo.getFullYear() == anoFiltrado;
    }

    console.log(props.arr)
    let arrayfiltrado = props.arr.filter(yearFilter)
    console.log(arrayfiltrado)


    return (
        <Card className="expenses">
        <ExpensesFilter gatilhoAnoFiltro={anoFiltro} ano={anoFiltrado}/>
        {arrayfiltrado.map(expense => <ExpenseItem key={expense.id} nome={expense.nome} preco={expense.preco} tempo={expense.tempo} />)}
        </Card>
    );

}
export default Expense