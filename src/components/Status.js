import React from 'react';
import classes from './Status.module.css';

const Status = props => {
  const data = [...props.data];
  let status = {
    incomes: 0,
    expenses: 0,
  };

  let costs = data.filter(item => item.price < 0);
  let profits = data.filter(item => item.price > 0);
  costs.forEach(item => {
    status.expenses += item.price;
  });
  profits.forEach(item => {
    status.incomes += item.price;
  });
  status.incomes = status.incomes.toFixed(2);
  status.expenses = status.expenses.toFixed(2);

  let balance = parseFloat(status.incomes) + parseFloat(status.expenses);
  let style = {};
  if (balance > 0) {
    style.color = '#4CD964';
  } else {
    style.color = '#FF2D55';
  }
  return (
    <div className={classes.Status}>
      <div>
        <h3>{status.incomes}</h3>
        <h4>Incomes</h4>
      </div>
      <div>
        <h3>{status.expenses}</h3>
        <h4>Expenses</h4>
      </div>
      <div style={style}>
        <h3>{balance}</h3>
        <h4>Balance</h4>
      </div>
    </div>
  );
};

export default Status;
