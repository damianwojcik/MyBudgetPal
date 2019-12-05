import styled, { css } from 'styled-components';

const TypeLabel = styled.div`
  position: relative;
  display: inline-block;
  label {
    padding: 7px 25px;
    color: #c8c7cc;
    text-transform: uppercase;
    border-top: 1px solid #c8c7cc;
    border-bottom: 1px solid #c8c7cc;
    display: inline-block;
    font-size: 13px;
    line-height: 1;
    cursor: pointer;
  }
  [type='radio']:checked,
  [type='radio']:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  ${props =>
    props.income &&
    css`
      label {
        border-right: 1px solid #c8c7cc;
        border-left: 1px solid #c8c7cc;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
      }
      [type='radio']:checked + label {
        background: #4cd964;
        color: #fff;
      }
    `}
  ${props =>
    props.expense &&
    css`
      label {
        border-right: 1px solid #c8c7cc;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
      }
      [type='radio']:checked + label {
        background: #ff2d55;
        color: #fff;
      }
    `}
`;

export default TypeLabel;
