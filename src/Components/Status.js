import React from 'react';
import './Status.scss';

const Status = (props) => {
    return (
        <div className="status">
            <div className="status__col">
                <h3>{props.incomes}</h3>
                <h4>Incomes</h4>
            </div>
            <div className="status__col">
                <h3>{props.expenses}</h3>
                <h4>Expenses</h4>
            </div>
            <div className="status__col status__col--colored">
                <h3>{(props.incomes - props.expenses).toFixed(2)}</h3>
                <h4>Balance</h4>
            </div>
        </div>
    )
}

export default Status;