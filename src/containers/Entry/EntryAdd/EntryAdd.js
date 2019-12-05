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
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.98142 0.371163C8.61164 0.1911 9.2685 0.556025 9.44856 1.18625C9.47886 1.29227 9.49423 1.40201 9.49423 1.51228V2.50578H10.681C11.3364 2.50578 11.8678 3.03712 11.8678 3.69256V10.8132C11.8678 11.4687 11.3364 12 10.681 12H1.18678C0.531339 12 0 11.4687 0 10.8132H0.0158474C0.0053125 10.7494 0 10.6848 0 10.6199V3.54676C0 3.01688 0.351259 2.55121 0.860745 2.40564L7.98142 0.371163ZM4.83018 10.8132H10.681V6.06612H9.49423V8.58546C9.49423 9.11533 9.14297 9.58101 8.63348 9.72657L4.83018 10.8132ZM9.49423 3.69256H10.681V4.87934H9.49423V3.69256ZM1.18678 3.54674V10.6199L8.30745 8.58544V1.51226L1.18678 3.54674ZM7.12067 4.87934C7.12067 5.20706 6.855 5.47273 6.52728 5.47273C6.19956 5.47273 5.93389 5.20706 5.93389 4.87934C5.93389 4.55162 6.19956 4.28595 6.52728 4.28595C6.855 4.28595 7.12067 4.55162 7.12067 4.87934Z"
              fill="#8F8E94"
            />
          </svg>
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
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z" fill="#8F8E94" />
          </svg>
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
          <svg
            width="15"
            height="12"
            viewBox="0 0 15 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4545 0H1.21212C0.542685 0 0 0.596954 0 1.33333V9.33333C0 10.0697 0.542685 10.6667 1.21212 10.6667H8.66667V9.33333H1.33333V4.66667H13.3333V6.66667H14.6667V1.33333C14.6667 0.596954 14.124 0 13.4545 0ZM13.3333 3.33333V1.33333H1.33333V3.33333H13.3333ZM10.6667 10.6667V9.33333H12V8H13.3333V9.33333H14.6667V10.6667H13.3333V12H12V10.6667H10.6667Z"
              fill="#8F8E94"
            />
          </svg>
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
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.09822 3C1.9013 2.67803 1.8 2.28171 1.8 1.8C1.8 0.850251 2.51421 0 3.6 0C4.6872 0 5.56396 0.728176 6 1.8683C6.43604 0.728176 7.3128 0 8.4 0C9.48579 0 10.2 0.850251 10.2 1.8C10.2 2.28171 10.0987 2.67803 9.90178 3H10.8C11.4627 3 12 3.53726 12 4.2V5.4C12 6.06274 11.4627 6.6 10.8 6.6V10.8C10.8 11.4627 10.2627 12 9.6 12H2.4C1.73726 12 1.2 11.4627 1.2 10.8V6.6C0.537258 6.6 0 6.06274 0 5.4V4.2C0 3.53726 0.537258 3 1.2 3H2.09822ZM5.39992 4.20002H1.19992V5.40002H5.39992V4.20002ZM10.8 5.40002H6.59996V4.20002H10.8V5.40002ZM5.40004 10.8V6.59996H2.40004V10.8H5.40004ZM9.59996 10.8H6.59996V6.59996H9.59996V10.8ZM3.6 1.20002C3.22779 1.20002 3 1.4712 3 1.80002C3 2.55196 3.6102 2.90949 5.05765 2.98471C4.89678 1.86698 4.29731 1.20002 3.6 1.20002ZM6.90004 2.98471C7.06091 1.86698 7.66039 1.20002 8.35769 1.20002C8.72991 1.20002 8.95769 1.4712 8.95769 1.80002C8.95769 2.55196 8.34749 2.90949 6.90004 2.98471Z"
              fill="#8F8E94"
            />
          </svg>
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
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.6 9.6C2.94 9.6 2.406 10.14 2.406 10.8C2.406 11.46 2.94 12 3.6 12C4.26 12 4.8 11.46 4.8 10.8C4.8 10.14 4.26 9.6 3.6 9.6ZM0 0V1.2H1.2L3.36 5.754L2.55 7.224C2.454 7.392 2.4 7.59 2.4 7.8C2.4 8.46 2.94 9 3.6 9H10.8V7.8H3.852C3.768 7.8 3.702 7.734 3.702 7.65L3.72 7.578L4.26 6.6H8.73C9.18 6.6 9.576 6.354 9.78 5.982L11.928 2.088C11.976 2.004 12 1.902 12 1.8C12 1.47 11.73 1.2 11.4 1.2H2.526L1.962 0H0ZM9.6 9.6C8.94 9.6 8.406 10.14 8.406 10.8C8.406 11.46 8.94 12 9.6 12C10.26 12 10.8 11.46 10.8 10.8C10.8 10.14 10.26 9.6 9.6 9.6Z"
                fill="#8F8E94"
              />
            </svg>
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z"
                fill="#8F8E94"
              />
            </svg>
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
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 9.8V8.4L7.52632 4.9V1.05C7.52632 0.469 7.06789 0 6.5 0C5.93211 0 5.47368 0.469 5.47368 1.05V4.9L0 8.4V9.8L5.47368 8.05V11.9L4.10526 12.95V14L6.5 13.3L8.89474 14V12.95L7.52632 11.9V8.05L13 9.8Z"
                fill="#8F8E94"
              />
            </svg>
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
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3822 0.7575C12.2267 0.315 11.7911 0 11.2778 0H2.72222C2.20889 0 1.78111 0.315 1.61778 0.7575L0 5.25V11.25C0 11.6625 0.35 12 0.777778 12H1.55556C1.98333 12 2.33333 11.6625 2.33333 11.25V10.5H11.6667V11.25C11.6667 11.6625 12.0167 12 12.4444 12H13.2222C13.65 12 14 11.6625 14 11.25V5.25L12.3822 0.7575ZM2.72222 8.25C2.07667 8.25 1.55556 7.7475 1.55556 7.125C1.55556 6.5025 2.07667 6 2.72222 6C3.36778 6 3.88889 6.5025 3.88889 7.125C3.88889 7.7475 3.36778 8.25 2.72222 8.25ZM11.2778 8.25C10.6322 8.25 10.1111 7.7475 10.1111 7.125C10.1111 6.5025 10.6322 6 11.2778 6C11.9233 6 12.4444 6.5025 12.4444 7.125C12.4444 7.7475 11.9233 8.25 11.2778 8.25ZM1.55556 4.5L2.72222 1.125H11.2778L12.4444 4.5H1.55556Z"
                fill="#8F8E94"
              />
            </svg>
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
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.142 7.716L12 6.858L11.142 6L9 8.142L3.858 3L6 0.858L5.142 0L4.284 0.858L3.426 0L2.142 1.284L1.284 0.426L0.426 1.284L1.284 2.142L0 3.426L0.858 4.284L0 5.142L0.858 6L3 3.858L8.142 9L6 11.142L6.858 12L7.716 11.142L8.574 12L9.858 10.716L10.716 11.574L11.574 10.716L10.716 9.858L12 8.574L11.142 7.716Z"
                fill="#8F8E94"
              />
            </svg>
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
        class={`Amount`}
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
        <button className="active">Today</button>
        <button>Yesterday</button>
        <button>Select date</button>
      </FlexMenu>
      <Input
        class={`Notes`}
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
