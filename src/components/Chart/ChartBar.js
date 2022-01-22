import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__in'>
        <div
          className='chart-bar__f'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__l'>{props.label}</div>
    </div>
  );
};

export default ChartBar;
