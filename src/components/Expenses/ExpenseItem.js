import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__des'>
          <h2>{props.title}</h2>
          <div className='expense-item__p'>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
