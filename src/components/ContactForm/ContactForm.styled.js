import styled from 'styled-components';
import { ErrorMessage as FormikError, Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  width: 400px;
  padding: 8px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;

export const Button = styled.button`
  margin-bottom: 20px;
  border-radius: 4px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #188ce8;
  }
`;
