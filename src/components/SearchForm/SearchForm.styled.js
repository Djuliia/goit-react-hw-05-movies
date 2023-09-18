import styled from 'styled-components';

export const Form = styled.form`
  display: inline-block;
  margin: 0 auto;
  padding: 24px;
`;

export const Input = styled.input`
  margin-top: 24px;
  padding: 0 12px;
  width: 400px;
  height: 40px;
  border: 2px solid #f6fa1c;
  border-radius: 4px 0 0 4px;
  outline: #030303;
  transform: box-shadow 0.3s ease;

  &:focus {
    background: linear-gradient(#333933, #222922);
    border-color: #f6fa1c;
    box-shadow: 0 0 5px rgba(0, 255, 0, 0.2), inset 0 0 5px rgba(0, 255, 0, 0.1),
      0 2px 0 #000;
    color: #efe;
    outline: none;
  }
`;

export const BtnSubmit = styled.button`
  height: 40px;
  padding: 0px 24px;
  border: 2px solid #f6fa1c;
  border-radius: 0 4px 4px 0;
  background-color: #030303;
  color: #f6fa1c;
`;
