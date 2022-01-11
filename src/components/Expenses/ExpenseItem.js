import {useState} from 'react'
import './ExpenseItem.css';
import Card from "../UI/Card"
import ExpenseDate from './ExpenseDate';
const  ExpenseItem = (props) => {

  const [titulo,trocarNome] = useState(props.nome);

  const clickBotao = () => {
    trocarNome("Updated");
  }
  return (
  <Card className='expense-item'>
      <ExpenseDate tempo={props.tempo}></ExpenseDate>
      <div className='expense-item__description'>
      <h2>{titulo}</h2>
      <div className='expense-item__price'>${props.preco}</div>
      <button onClick={clickBotao}>Trocar o nome</button>
      </div>
  </Card>);
}

export default ExpenseItem;
