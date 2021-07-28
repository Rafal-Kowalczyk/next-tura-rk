import styled from "styled-components";
import theme from "../../styles/theme";

export const FormWrap = styled.div`
  padding: 2rem;
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
  margin-bottom: 3rem;
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
  background-color: transparent;
  outline: none;
  border: 0;
  border-bottom: 1px solid ${theme.colors.icon};
  padding-bottom: 1rem;
`;
