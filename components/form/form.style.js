import styled from "styled-components";
import theme from "../../styles/theme";

export const FormWrap = styled.div`
  width: 100%;
  max-width: 40rem;
  text-align: center;
  padding: 3rem;
  background-color: transparent;
  border: 0;
  box-shadow: 0px 0px 20px 5px rgba(39, 39, 39, 0.7);
  -webkit-box-shadow: 0px 0px 20px 5px rgba(39, 39, 39, 0.7);
  -moz-box-shadow: 0px 0px 20px 5px rgba(39, 39, 39, 0.7);
`;

export const FormContent = styled.form`
  width: 100%;
`;

export const FormTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2rem;
`;

export const InputGroup = styled.div`
  position: relative;
  width: 100%auto;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  display: none;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 2rem;
  background-color: transparent;
  outline: none;
  border: 0;
  border-bottom: 1px solid ${theme.colors.icon};
  padding-bottom: 0.5rem;
  color: ${theme.colors.text};

  &::placeholder {
    font-size: 1.5rem;
    color: ${theme.colors.icon};
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  left: 1rem;
  bottom: -2rem;
  font-size: 1.2rem;
  font-weight: 300;
  color: ${theme.colors.orange};
`;
