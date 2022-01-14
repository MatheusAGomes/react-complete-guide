import {useState} from "react"
import ExpenseList from "./ExpenseList";
import "./Expense.css"
import Card from "../UI/Card"
import ExpenseChart from "./ExpenseChart";
import ExpensesFilter from "./ExpenseFilter";

const Expense = (props) => {
        const [anoFiltrado,setAnoFiltrado] = useState('2020');
    const anoFiltro = ano =>{
        setAnoFiltrado(ano);
    }


    function yearFilter(arr) {
        return arr.tempo.getFullYear().toString() === anoFiltrado;
    }
    let arrayfiltrado = props.arr.filter(yearFilter)
    
    

    return (
        <Card className="expenses">
        <ExpensesFilter gatilhoAnoFiltro={anoFiltro} ano={anoFiltrado}/>
        <ExpenseChart expenses={arrayfiltrado} />
        <ExpenseList item={arrayfiltrado} />
        </Card>
    );

}
export default Expense