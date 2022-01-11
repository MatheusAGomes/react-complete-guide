
import ExpenseItem from "./ExpenseItem";
import "./Expense.css"
import Card from "../UI/Card"
const Expense = (props) => {

    return (
        <Card className="expenses">
        <ExpenseItem nome={props.arr[0].nome} preco={props.arr[0].preco} tempo={props.arr[0].tempo}></ExpenseItem>
        <ExpenseItem nome={props.arr[1].nome} preco={props.arr[1].preco} tempo={props.arr[1].tempo}></ExpenseItem>     
        </Card>
    );

}
export default Expense