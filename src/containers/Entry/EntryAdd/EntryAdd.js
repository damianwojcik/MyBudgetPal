import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import * as actions from '../../../store/actions/index';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import Header from '../../../components/Header';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../../axios-entries';
import { updateObject, checkValidity } from '../../../shared/utility';
import CategoryLabel from '../../../components/styles/CategoryLabel';
import TypeLabel from '../../../components/styles/TypeLabel';
import NavigationItems from '../../../components/Navigation/NavigationItems/NavigationItems';

import salaryIcon from '../../../assets/icons/salary.svg';
import rentIcon from '../../../assets/icons/rent.svg';
import transferIcon from '../../../assets/icons/transfer.svg';
import giftIcon from '../../../assets/icons/gift.svg';
import groceryIcon from '../../../assets/icons/grocery.svg';
import houseIcon from '../../../assets/icons/house.svg';
import travelIcon from '../../../assets/icons/travel.svg';
import transportIcon from '../../../assets/icons/transport.svg';
import joyIcon from '../../../assets/icons/joy.svg';

const Flex = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 18px;
`;

const CategoriesWrapper = styled.div`
  display: flex;
  background: #fff;
  justify-content: center;
  align-items: center;
  padding: 18px 20px 17px;
  border-bottom: 1px solid #c8c7cc;
`;

const FlexMenu = styled.div`
  display: flex;
  border-bottom: 1px solid #c8c7cc;
  background: #fff;
  button {
    width: 33.333%;
    font-size: 13px;
    line-height: 1;
    color: #a2aac8;
    padding: 10px 5px 9px;
    font-weight: 600;
    &.active {
      color: #152975;
    }
  }
`;

const entryAdd = props => {
  const [controls, setControls] = useState({
    notes: {
      elementType: 'textarea',
      elementConfig: {
        type: 'textarea',
        placeholder: 'Notes'
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
        type: 'number',
        placeholder: 'Amount (PLN)'
      },
      value: '',
      validation: {
        required: true,
        isNumeric: true
      },
      valid: false,
      touched: false
    },
    category: {
      elementType: 'radio',
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    type: {
      elementType: 'radio',
      value: 'income',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    date: {
      value: '',
      valid: false,
      touched: false
    }
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(controls[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        controls[inputIdentifier].validation
      ),
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

  const categoryChangedHandler = event => {
    const updatedFormElement = updateObject(controls['category'], {
      value: event.target.value,
      valid: checkValidity(event.target.value, controls['category'].validation),
      touched: true
    });
    const updatedcontrols = updateObject(controls, {
      category: updatedFormElement
    });
    setControls(updatedcontrols);
  };

  const typeChangedHandler = event => {
    const updatedFormElement = updateObject(controls['type'], {
      value: event.target.value,
      valid: checkValidity(event.target.value, controls['type'].validation),
      touched: true
    });
    const updatedcontrols = updateObject(controls, {
      type: updatedFormElement
    });
    setControls(updatedcontrols);
  };

  const submitHandler = event => {
    event.preventDefault();

    const formData = {};
    for (let formElementIdentifier in controls) {
      formData[formElementIdentifier] = controls[formElementIdentifier].value;
    }

    props.onAddEntry(props.userId, props.token, formData);
  };

  let afterActionRedirect = null;

  if (props.entryAction) {
    afterActionRedirect = <Redirect to="/dashboard" />;
  }

  let categories = (
    <CategoriesWrapper>
      <CategoryLabel salary>
        <input
          type="radio"
          id="salary"
          name="radio-group2"
          value="salary"
          onChange={event => categoryChangedHandler(event)}
        />
        <label htmlFor="salary">
          <img src={salaryIcon} alt="Salary" />
        </label>
      </CategoryLabel>
      <CategoryLabel rent>
        <input
          type="radio"
          id="rent"
          name="radio-group2"
          value="rent"
          onChange={event => categoryChangedHandler(event)}
        />
        <label htmlFor="rent">
          <img src={rentIcon} alt="Rent" />
        </label>
      </CategoryLabel>
      <CategoryLabel transfer>
        <input
          type="radio"
          id="transfer"
          name="radio-group2"
          value="transfer"
          onChange={event => categoryChangedHandler(event)}
        />
        <label htmlFor="transfer">
          <img src={transferIcon} alt="Transfer" />
        </label>
      </CategoryLabel>
      <CategoryLabel gift>
        <input
          type="radio"
          id="gift"
          name="radio-group2"
          value="gift"
          onChange={event => categoryChangedHandler(event)}
        />
        <label htmlFor="gift">
          <img src={giftIcon} alt="Gift" />
        </label>
      </CategoryLabel>
    </CategoriesWrapper>
  );

  if (controls.type.value === 'expense') {
    categories = (
      <CategoriesWrapper>
        <CategoryLabel grocery>
          <input
            type="radio"
            id="grocery"
            name="radio-group2"
            value="grocery"
            onChange={event => categoryChangedHandler(event)}
          />
          <label htmlFor="grocery">
            <img src={groceryIcon} alt="Grocery" />
          </label>
        </CategoryLabel>
        <CategoryLabel house>
          <input
            type="radio"
            id="house"
            name="radio-group2"
            value="house"
            onChange={event => categoryChangedHandler(event)}
          />
          <label htmlFor="house">
            <img src={houseIcon} alt="House" />
          </label>
        </CategoryLabel>
        <CategoryLabel travel>
          <input
            type="radio"
            id="travel"
            name="radio-group2"
            value="travel"
            onChange={event => categoryChangedHandler(event)}
          />
          <label htmlFor="travel">
            <img src={travelIcon} alt="Travel" />
          </label>
        </CategoryLabel>
        <CategoryLabel transport>
          <input
            type="radio"
            id="transport"
            name="radio-group2"
            value="transport"
            onChange={event => categoryChangedHandler(event)}
          />
          <label htmlFor="transport">
            <img src={transportIcon} alt="Transport" />
          </label>
        </CategoryLabel>
        <CategoryLabel joy>
          <input
            type="radio"
            id="joy"
            name="radio-group2"
            value="joy"
            onChange={event => categoryChangedHandler(event)}
          />
          <label htmlFor="joy">
            <img src={joyIcon} alt="Joy" />
          </label>
        </CategoryLabel>
      </CategoriesWrapper>
    );
  }

  let form = (
    <form onSubmit={submitHandler} className="EntryAdd">
      <Flex>
        <TypeLabel income>
          <input
            type="radio"
            id="income"
            name="radio-group1"
            value="income"
            onChange={event => typeChangedHandler(event)}
            defaultChecked={true}
          />
          <label htmlFor="income">Income</label>
        </TypeLabel>
        <TypeLabel expense>
          <input
            type="radio"
            id="expense"
            name="radio-group1"
            value="expense"
            onChange={event => typeChangedHandler(event)}
          />
          <label htmlFor="expense">expense</label>
        </TypeLabel>
      </Flex>
      <Input
        customClass={`Amount`}
        additionalClass={controls.type.value ? controls.type.value : ''}
        elementType={controls.amount.elementType}
        elementConfig={controls.amount.elementConfig}
        value={controls.amount.value}
        invalid={!controls.amount.valid}
        shouldValidate={controls.amount.validation}
        touched={controls.amount.touched}
        changed={event => inputChangedHandler(event, 'amount')}
      />
      {categories}
      <FlexMenu>
        <button
          onClick={() =>
            setControls({
              ...controls,
              date: {
                value: Date.now(),
                valid: true,
                touched: true
              }
            })
          }
          className="active"
          type="button"
        >
          Today
        </button>
        <button
          type="button"
          onClick={() =>
            setControls({
              ...controls,
              date: {
                value: new Date(new Date().setDate(new Date().getDate() - 1)),
                valid: true,
                touched: true
              }
            })
          }
        >
          Yesterday
        </button>
        <button type="button">Select date</button>
      </FlexMenu>
      <Input
        customClass={`Notes`}
        elementType={controls.notes.elementType}
        elementConfig={controls.notes.elementConfig}
        value={controls.notes.value}
        invalid={!controls.notes.valid}
        shouldValidate={controls.notes.validation}
        touched={controls.notes.touched}
        changed={event => inputChangedHandler(event, 'notes')}
      />
      <Button disabled={!formIsValid}>Add</Button>
    </form>
  );

  if (props.loading) {
    form = <Spinner />;
  }

  return (
    <>
      {afterActionRedirect}
      <Header title="Add new" />
      {form}
      <NavigationItems />
    </>
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
    onAddEntry: (userId, token, formData) =>
      dispatch(actions.addEntry(userId, token, formData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(entryAdd, axios));
