import {useState} from 'react'
import './ExpenseItem.css';
import Card from "../UI/Card"
import ExpenseDate from './ExpenseDate';
const  ExpenseItem = (props) => {
 
  return (
    <li>
  <Card className='expense-item'>
      <ExpenseDate tempo={props.tempo}/>
      <div className='expense-item__description'>
      <h2>{props.nome}</h2>
      <div className='expense-item__price'>${props.preco}</div>
      </div>
  </Card>
  </li>);
}

export default ExpenseItem;
