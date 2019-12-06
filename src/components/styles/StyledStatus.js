import styled from 'styled-components';

const StyledStatus = styled.div`
  display: flex;
  background: #fff;
  text-align: center;
  line-height: 1;

  .col {
    width: 33.333%;
    padding: 18px 0 12px;
  }
  .amount {
    font-size: 17px;
    margin-bottom: 5px;
    &.positive {
      color: #4cd964;
    }
    &.negative {
      color: #ff2d55;
    }
  }
  .name {
    font-size: 15px;
    color: #a2aac8;
    font-weight: 400;
  }
`;

export default StyledStatus;
