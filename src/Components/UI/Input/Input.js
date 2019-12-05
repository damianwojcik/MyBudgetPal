import React from 'react';

import InputWrapper from '../../../components/styles/InputWrapper';

const input = props => {
  let inputElement = null;
  const inputClasses = [`InputElement`];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push('Invalid');
  }

  if (props.class) {
    inputClasses.push(`${props.class}`);
  }

  if (props.additionalClass) {
    inputClasses.push(`${props.additionalClass}`);
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <InputWrapper customClass={props.class}>
      <label className="Label">{props.label}</label>
      {inputElement}
    </InputWrapper>
  );
};

export default input;
