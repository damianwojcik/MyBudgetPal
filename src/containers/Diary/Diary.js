import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import axios from '../../axios-entries';
import Entry from '../../components/Entry';
import withErrorHandler from '../../components/HOC/withErrorHandler/withErrorHandler';
import classes from './Diary.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';

export class Diary extends Component {
    componentDidMount() {
        this.props.onFetchEntries(this.props.userId, this.props.token);
    }

    render() {
        let entries = <Spinner />;

        if (!this.props.loading) {
            entries = (
                <div className="wrap">
                    <h5>Today</h5>
                    <ul>
                        {this.props.entries.map(entry => {
                            return (
                                <Entry
                                    key={entry.id}
                                    created={entry.created}
                                    icon={entry.type}
                                    title={entry.title}
                                    price={entry.price}
                                    clicked={() =>
                                        this.props.onRemoveEntry(this.props.userId, this.props.token, entry.id)
                                    }
                                />
                            );
                        })}
                    </ul>
                </div>
            );
        }
        return <div className={classes.Diary}>{entries}</div>;
    }
}

const mapStateToProps = state => {
    return {
        entries: state.entries.entries,
        token: state.auth.token,
        userId: state.auth.userId,
        loading: state.entries.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchEntries: (userId, token) => dispatch(actions.fetchEntries(userId, token)),
        onRemoveEntry: (userId, token, entryId) => dispatch(actions.removeEntry(userId, token, entryId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(Diary, axios));
