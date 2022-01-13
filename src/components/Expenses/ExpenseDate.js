import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {
    
  const month = props.tempo.toLocaleString('en-US', { month: 'long' });
  const day = props.tempo.toLocaleString('en-US', { day: '2-digit' });
  const year = props.tempo.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;