import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.preco);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.nome}
          preco={dataPoint.preco}
          maxPreco={totalMaximum}
          nome={dataPoint.nome}
        />
      ))}
    </div>
  );
};

export default Chart;