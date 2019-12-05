import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import axios from '../../axios-entries';
import Entry from '../../components/Entry';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import classes from './Diary.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';

const diary = props => {
  useEffect(() => {
    props.onFetchEntries(props.userId, props.token);
  }, []);

  let entries = <Spinner />;

  if (!props.loading) {
    entries = (
      <div className="wrap">
        <h5>Today</h5>
        <ul>
          {props.entries.map(entry => {
            return (
              <Entry
                key={entry.id}
                created={entry.created}
                type={entry.type}
                category={entry.category}
                notes={entry.notes}
                amount={entry.amount}
                clicked={() =>
                  props.onRemoveEntry(props.userId, props.token, entry.id)
                }
              />
            );
          })}
        </ul>
      </div>
    );
  }
  return <div className={classes.Diary}>{entries}</div>;
};

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
    onFetchEntries: (userId, token) =>
      dispatch(actions.fetchEntries(userId, token)),
    onRemoveEntry: (userId, token, entryId) =>
      dispatch(actions.removeEntry(userId, token, entryId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(diary, axios));
