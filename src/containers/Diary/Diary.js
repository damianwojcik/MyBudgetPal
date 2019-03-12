import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import axios from '../../axios-entries';
import Entry from '../../components/Entry';
import withErrorHandler from '../../components/HOC/withErrorHandler/withErrorHandler';
import classes from './Diary.module.css';

class Diary extends Component {
    componentDidMount() {
        this.props.onFetchEntries();
    }

    render() {
        return (
            <div className={classes.Diary}>
                <div>
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
                                    clicked={() => this.props.onRemoveEntry(entry.id)}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        entries: state.entries.entries
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchEntries: () => dispatch(actions.fetchEntries()),
        onRemoveEntry: id => dispatch(actions.removeEntry(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(Diary, axios));
