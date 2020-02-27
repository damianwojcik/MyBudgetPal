import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Logo from '../../components/UI/Logo/Logo';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Auth.module.css';
import * as actions from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';

const auth = ({ loading, error, isAuthenticated, onAuth }) => {
  const [controls, setControls] = useState({
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Your email address'
      },
      value: '',
      validation: {
        required: true,
        isEmail: true
      },
      valid: false,
      touched: false
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Your password'
      },
      value: '',
      validation: {
        required: true,
        minLength: 6
      },
      valid: false,
      touched: false
    }
  });
  const [isSignup, setIsSignup] = useState(false);

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(controls, {
      [controlName]: updateObject(controls[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          controls[controlName].validation
        ),
        touched: true
      })
    });
    setControls(updatedControls);
  };

  const submitHandler = event => {
    event.preventDefault();
    onAuth(controls.email.value, controls.password.value, isSignup);
  };

  const switchAuthModeHandler = () => {
    setIsSignup(!isSignup);
  };

  const formElementsArray = [];
  for (let key in controls) {
    formElementsArray.push({
      id: key,
      config: controls[key]
    });
  }

  let form = formElementsArray.map(formElement => (
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
  ));

  if (loading) {
    form = <Spinner />;
  }

  let errorMessage = null;

  if (error) {
    errorMessage = <p>{error.message}</p>;
  }

  let caption = (
    <p>
      Don't have an account?{' '}
      <button onClick={switchAuthModeHandler}>Sign Up</button>
    </p>
  );

  let remindPassword = (
    <a className={classes.remindPassword} href="/">
      Forgot password?
    </a>
  );

  if (isSignup) {
    caption = (
      <p>
        Have an account? <button onClick={switchAuthModeHandler}>Log in</button>
      </p>
    );

    remindPassword = null;
  }

  let authRedirect = null;

  if (isAuthenticated) {
    authRedirect = <Redirect to="/dashboard" />;
  }

  return (
    <>
      <div className={classes.Auth}>
        {authRedirect}
        <Logo />
        {errorMessage}
        <form onSubmit={submitHandler}>
          {form}
          <Button btnType="fullWidth">{isSignup ? 'Sign Up' : 'Log In'}</Button>
        </form>
        {remindPassword}
      </div>
      <div className={[classes.Auth, classes.caption].join(' ')}>{caption}</div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(auth);
