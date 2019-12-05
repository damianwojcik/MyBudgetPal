import styled from 'styled-components';

const EntryItem = styled.li`
  background: #fff;
  padding: 7.5px 15px;
  border-bottom: 1px solid #c8c7cc;
  display: flex;
  font-size: 17px;
  line-height: 1;
  align-items: center;
  .title {
    margin-left: 15px;
    color: #222;
  }
  .price {
    margin-left: auto;
    color: #8f8e94;
  }
  button {
    display: none;
    background-color: red;
    padding: 0 5px;
    margin-left: 10px;
    color: #fff;
    font-size: 11px;
  }
  &:hover button {
    display: block;
  }
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    svg {
      height: 16px;
    }
  }
`;

export default EntryItem;
