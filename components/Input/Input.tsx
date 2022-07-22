import * as React from 'react';
import styled from 'styled-components';
import VisuallyHidden from '../VisuallyHidden';
import ErrorIcon from '../../public/assets/icon-error.svg';

interface InputProps {
  error?: any;
  label: string;
  placeholder: string;
  name: string;
  register?: any;
  validationOptions?: any;
  type?: any;
}

const Input = ({
  error,
  label,
  placeholder,
  name,
  register,
  type,
  validationOptions,
}: InputProps) => {
  return (
    <Wrapper>
      <VisuallyHidden>
        <label htmlFor={name}>{label}</label>
      </VisuallyHidden>
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        error={error}
        {...register(name, validationOptions)}
      />
      {error && (
        <ErrorIconWrapper>
          <ErrorIcon />
        </ErrorIconWrapper>
      )}
      {error && <ErrorMessage>{error?.message}</ErrorMessage>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input<{ error: any }>`
  background: transparent;
  border: ${({ error }) => (error ? '2px' : '1px')} solid;
  border-color: ${({ error }) =>
    error ? 'var(--color-primary-red)' : 'var(--color-neutral-grayish-blue)'};
  border-radius: 8px;
  padding: 20px;
  font-weight: var(--font-weight-medium);
  caret-color: var(--color-accent-blue);
  color: var(--color-neutral-dark-blue);
  ::placeholder {
    color: ${({ error }) =>
      error ? 'var(--color-primary-red)' : 'var(--color-neutral-grayish-blue)'};
    font-weight: var(--font-weight-semi-bold);
    font-variant: normal;
  }
  &:focus-visible {
    border-color: ${({ error }) =>
      error ? 'var(--color-primary-red)' : 'var(--color-neutral-dark-blue)'};
    outline: none;
    box-shadow: 0 0 0 5px
      ${({ error }) =>
        error
          ? 'var(--box-shadow-color-primary-red)'
          : 'var(--box-shadow-color-accent-blue)'};
  }
`;
const ErrorIconWrapper = styled.div`
  position: absolute;
  top: 22px;
  right: 24px;
`;
const ErrorMessage = styled.p`
  margin-top: 4px;
  text-align: right;
  font-style: italic;
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary-red);
`;

export default Input;
