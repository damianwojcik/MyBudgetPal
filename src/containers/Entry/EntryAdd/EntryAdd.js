import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import * as actions from '../../../store/actions/index';
import classes from './EntryAdd.module.css';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import withErrorHandler from '../../../components/HOC/withErrorHandler/withErrorHandler';
import axios from '../../../axios-entries';

class EntryAdd extends Component {
    state = {
        controls: {
            title: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Title'
                },
                value: '',
                validation: {
                    required: true
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
                    required: true
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
        },
        formIsValid: false
    };

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedcontrols = {
            ...this.state.controls
        };
        const updatedFormElement = {
            ...updatedcontrols[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedcontrols[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedcontrols) {
            formIsValid = updatedcontrols[inputIdentifier].valid && formIsValid;
        }
        this.setState({ controls: updatedcontrols, formIsValid: formIsValid });
    };

    submitHandler = event => {
        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in this.state.controls) {
            formData[formElementIdentifier] = this.state.controls[formElementIdentifier].value;
        }

        this.props.onAddEntry(this.props.userId, this.props.token, formData);
    };

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let afterActionRedirect = null;

        if (this.props.entryAction) {
            afterActionRedirect = <Redirect to="/dashboard" />;
        }

        let form = (
            <form onSubmit={this.submitHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={event => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <Button disabled={!this.state.formIsValid}>Add</Button>
            </form>
        );

        if (this.props.loading) {
            form = <Spinner />;
        }

        return (
            <>
                {afterActionRedirect}
                <div className={classes.EntryAdd}>
                    <h4>Enter your data</h4>
                    {form}
                </div>
                <Link to="/dashboard">Dashboard</Link>
            </>
        );
    }
}

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
)(withErrorHandler(EntryAdd, axios));
