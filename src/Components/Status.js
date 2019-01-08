import React from 'react';
import './Status.scss';

const Status = (props) => {
    let balance = parseFloat(props.status.incomes) + parseFloat(props.status.expenses);
    let style = {};
    if (balance > 0) {
        style.color = '#4CD964'
    } else {
        style.color = '#FF2D55'
    }
    return (
        <div className="status">
            <div className="status__col">
                <h3>{props.status.incomes}</h3>
                <h4>Incomes</h4>
            </div>
            <div className="status__col">
                <h3>{props.status.expenses}</h3>
                <h4>Expenses</h4>
            </div>
            <div className="status__col status__col" style={style}>
                <h3>{balance}</h3>
                <h4>Balance</h4>
            </div>
        </div>
    )
}

export default Status;