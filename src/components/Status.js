import React from 'react';

import StyledStatus from '../components/styles/StyledStatus';

const Status = props => {
  const data = [...props.data];
  let status = {
    incomes: 0,
    expenses: 0
  };
  let costs = data.filter(item => item.type === 'expense');
  let profits = data.filter(item => item.type === 'income');

  costs.forEach(item => {
    status.expenses += parseInt(item.amount);
  });
  profits.forEach(item => {
    status.incomes += parseInt(item.amount);
  });

  let balance = status.incomes - status.expenses;

  return (
    <StyledStatus>
      <div className="col">
        <h3 className="amount">{status.incomes}</h3>
        <h4 className="name">Incomes</h4>
      </div>
      <div className="col">
        <h3 className="amount">{status.expenses}</h3>
        <h4 className="name">Expenses</h4>
      </div>
      <div className="col">
        <h3 className={'amount ' + (balance > 0 ? 'positive' : 'negative')}>
          {balance}
        </h3>
        <h4 className="name">Balance</h4>
      </div>
    </StyledStatus>
  );
};

export default Status;
