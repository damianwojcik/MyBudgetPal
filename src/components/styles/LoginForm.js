import styled from 'styled-components';

const LoginForm = styled.div`
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 1px;
  margin: 30px auto;
  padding: 40px 50px 20px;
  max-width: 350px;
  width: 100%;

  .caption {
    padding: 20px 50px;
  }
  .caption button {
    color: #3897f0;
  }
  .errorMessage {
    color: red;
    margin-bottom: 10px;
  }
`;

export default LoginForm;
