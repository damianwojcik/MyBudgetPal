import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import * as actions from '../../../store/actions/index';
import classes from './EntryAdd.module.css';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../../axios-entries';
import { updateObject, checkValidity } from '../../../shared/utility';

const entryAdd = props => {
    const [controls, setControls] = useState({
        title: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Title'
            },
            value: '',
            validation: {
                required: true,
                minLength: 3
            },
            valid: false,
            touched: false
        },
        type: {
            elementType: 'input',
            elementConfig: {
                type: 'teXt',
                placeholder: 'Type'
            },
            value: '',
            validation: {
                required: true,
                minLength: 3
            },
            valid: false,
            touched: false
        },
        amount: {
            elementType: 'input',
            elementConfig: {
                type: 'teXt',
                placeholder: 'Amount'
            },
            value: '',
            validation: {
                required: true,
                isNumeric: true
            },
            valid: false,
            touched: false
        }
    });
    const [formIsValid, setFormIsValid] = useState(false);

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(controls[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, controls[inputIdentifier].validation),
            touched: true
        });

        const updatedcontrols = updateObject(controls, {
            [inputIdentifier]: updatedFormElement
        });

        let formIsValid = true;

        for (let inputIdentifier in updatedcontrols) {
            formIsValid = updatedcontrols[inputIdentifier].valid && formIsValid;
        }
        setControls(updatedcontrols);
        setFormIsValid(formIsValid);
    };

    const submitHandler = event => {
        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in controls) {
            formData[formElementIdentifier] = controls[formElementIdentifier].value;
        }

        props.onAddEntry(props.userId, props.token, formData);
    };

    const formElementsArray = [];
    for (let key in controls) {
        formElementsArray.push({
            id: key,
            config: controls[key]
        });
    }

    let afterActionRedirect = null;

    if (props.entryAction) {
        afterActionRedirect = <Redirect to="/dashboard" />;
    }

    let form = (
        <form onSubmit={submitHandler}>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={event => inputChangedHandler(event, formElement.id)}
                />
            ))}
            <Button disabled={!formIsValid}>Add</Button>
        </form>
    );

    if (props.loading) {
        form = <Spinner />;
    }

    return (
        <React.Fragment>
            {afterActionRedirect}
            <div className={classes.EntryAdd}>
                <h4>Enter your data</h4>
                {form}
            </div>
            <Link to="/dashboard">Dashboard</Link>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId,
        loading: state.entries.loading,
        entryAction: state.entries.entryAction,
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddEntry: (userId, token, formData) => dispatch(actions.addEntry(userId, token, formData))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(entryAdd, axios));
