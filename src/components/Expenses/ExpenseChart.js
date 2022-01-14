import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { nome: 'Jan', preco: 0 },
    { nome: 'Feb', preco: 0 },
    { nome: 'Mar', preco: 0 },
    { nome: 'Apr', preco: 0 },
    { nome: 'May', preco: 0 },
    { nome: 'Jun', preco: 0 },
    { nome: 'Jul', preco: 0 },
    { nome: 'Aug', preco: 0 },
    { nome: 'Sep', preco: 0 },
    { nome: 'Oct', preco: 0 },
    { nome: 'Nov', preco: 0 },
    { nome: 'Dec', preco: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.tempo.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].preco += expense.preco;
    
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;