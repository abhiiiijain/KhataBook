import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__m'>{month}</div>
      <div className='expense-date__y'>{year}</div>
      <div className='expense-date__d'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
