import styled from 'styled-components';

const StyledHeader = styled.div`
  background: #152975;
  position: relative;
  padding: 12px 15px;
  font-size: 17px;
  font-weight: 500;
  button,
  span {
    color: #fff;
    padding: 0 3px;
  }
  a {
    color: #fff;
  }
  .add,
  .logout {
    position: absolute;
    right: 15px;
    top: 14px;
    bottom: 0;
    margin: auto;
  }

  .logout {
    left: 15px;
    right: auto;
  }
`;

export default StyledHeader;
