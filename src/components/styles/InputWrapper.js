import styled, { css } from 'styled-components';

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 8px;
  .InputElement {
    outline: none;
    border: 1px solid #efefef;
    overflow: hidden;
    padding: 9px 0 7px 8px;
    text-overflow: ellipsis;
    background: #fafafa;
    border-radius: 3px;
    font: inherit;
    display: block;
    width: 100%;
    color: #999;
    font-size: 12px;
    height: 36px;
    left: 8px;
  }
  .InputElement:focus {
    outline: none;
    border: 1px solid #ccc;
  }
  .Invalid {
    border: 1px solid red;
  }
  .Amount {
    border: 0;
    background: transparent;
    text-align: center;
    font-size: 34px;
    font-weight: bold;
    height: auto;
    padding: 0;
    margin-bottom: 0;
  }
  .Amount:focus {
    border: 0;
  }
  .Amount:after {
    content: 'PLN';
    position: relative;
    display: inline-block;
  }
  .Amount.Invalid {
    color: red;
    text-decoration: line-through;
  }
  .income,
  .income::placeholder {
    color: #4cd964;
  }
  .expense,
  .expense::placeholder {
    color: #ff2d55;
  }
  .Notes {
    background: #fff;
    border: 0;
    height: calc(100vh - 378px);
  }
  .Notes:focus {
    border: 0;
  }
  ${props =>
    props.customClass === 'Amount' &&
    css`
      margin-bottom: 0;
      padding-bottom: 18px;
      border-bottom: 1px solid #c8c7cc;
    `}
`;

export default InputWrapper;
