import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #fff;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: bold;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  display: block;
  font-size: 14px;
  color: #555;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Success = styled.p`
  color: green;
  font-size: 14px;
  margin-bottom: 10px;
`;
export const LoginText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`