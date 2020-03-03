import styled, { css } from 'styled-components';

const CategoryLabel = styled.div`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 0 7.5px;
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 12px;
    cursor: pointer;
    transform: translate(-50%, -50%);
  }
  [type='radio']:checked,
  [type='radio']:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  [type='radio']:checked + label:before,
  [type='radio']:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #efeff4;
    cursor: pointer;
  }
    ${props =>
      props.grocery &&
      css`
        [type='radio']:checked + label svg path {
          fill: #4cd964;
        }
        [type='radio']:checked + label:before {
          border: 1px solid #4cd964;
        }
      `}
    ${props =>
      props.house &&
      css`
        [type='radio']:checked + label svg path {
          fill: #ff9500;
        }
        [type='radio']:checked + label:before {
          border: 1px solid #ff9500;
        }
      `}
    ${props =>
      props.travel &&
      css`
        [type='radio']:checked + label svg path {
          fill: #5ac8fa;
        }
        [type='radio']:checked + label:before {
          border: 1px solid #5ac8fa;
        }
      `}
    ${props =>
      props.transport &&
      css`
        [type='radio']:checked + label svg path {
          fill: #007aff;
        }
        [type='radio']:checked + label:before {
          border: 1px solid #007aff;
        }
      `}
      ${props =>
        props.joy &&
        css`
          [type='radio']:checked + label svg path {
            fill: #30dabf;
          }
          [type='radio']:checked + label:before {
            border: 1px solid #30dabf;
          }
        `}
        ${props =>
          props.salary &&
          css`
            [type='radio']:checked + label svg path {
              fill: #4cd964;
            }
            [type='radio']:checked + label:before {
              border: 1px solid #4cd964;
            }
          `}
        ${props =>
          props.rent &&
          css`
            [type='radio']:checked + label svg path {
              fill: #ffcc00;
            }
            [type='radio']:checked + label:before {
              border: 1px solid #ffcc00;
            }
          `}
          ${props =>
            props.transfer &&
            css`
              [type='radio']:checked + label svg path {
                fill: #007aff;
              }
              [type='radio']:checked + label:before {
                border: 1px solid #007aff;
              }
            `}
            ${props =>
              props.gift &&
              css`
                [type='radio']:checked + label svg path {
                  fill: #ff3b30;
                }
                [type='radio']:checked + label:before {
                  border: 1px solid #ff3b30;
                }
              `}
`;

export default CategoryLabel;
