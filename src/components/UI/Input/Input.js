import React from 'react';
import InputWrapper from '../../../components/styles/InputWrapper';

const Input = ({
  invalid,
  shouldValidate,
  touched,
  customClass,
  additionalClass,
  elementType,
  elementConfig,
  value,
  label,
  changed
}) => {
  let inputElement = null;
  const inputClasses = [`InputElement`];

  if (invalid && shouldValidate && touched) {
    inputClasses.push('Invalid');
  }

  if (customClass) {
    inputClasses.push(`${customClass}`);
  }

  if (additionalClass) {
    inputClasses.push(`${additionalClass}`);
  }

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={value}
          onChange={changed}
        >
          {elementConfig.options.map(option => (
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
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
  }

  return (
    <InputWrapper customClass={customClass}>
      <label className="Label">{label}</label>
      {inputElement}
    </InputWrapper>
  );
};

export default Input;
