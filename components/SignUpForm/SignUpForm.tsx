import * as React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Input from '../Input';
import Button from '../Button';
import {
  firstNameValidaitionOptions,
  lastNameValidationOptions,
  emailValidationOptions,
  passwordValidationOptions,
} from './signUpFormValidationOptions';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setValue('firstName', '');
    setValue('lastName', '');
    setValue('email', '');
    setValue('password', '');
  });
  console.log({ errors });
  return (
    <Form onSubmit={onSubmit} noValidate>
      <Input
        type={'text'}
        label={'First Name'}
        name={'firstName'}
        placeholder={'First Name'}
        error={errors?.firstName}
        validationOptions={firstNameValidaitionOptions}
        register={register}
      />
      <Input
        type='text'
        label='Last Name'
        name={'lastName'}
        placeholder='Last Name'
        aria-invalid={errors.lastName ? 'true' : 'false'}
        error={errors?.lastName}
        validationOptions={lastNameValidationOptions}
        register={register}
      />
      <Input
        type='email'
        label='Email'
        name={'email'}
        placeholder='Email'
        aria-invalid={errors.email ? 'true' : 'false'}
        error={errors?.email}
        validationOptions={emailValidationOptions}
        register={register}
      />
      <Input
        type='password'
        label='Password'
        name={'password'}
        placeholder='Password'
        aria-invalid={errors.password ? 'true' : 'false'}
        error={errors?.password}
        validationOptions={passwordValidationOptions}
        register={register}
      />
      <Button>Claim Your Free Trial</Button>
      <Disclaimer>
        By clicking the button, you are agreeing to our{' '}
        <a href='/termsofservice'>Terms of Service</a>
      </Disclaimer>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  background: white;
  box-shadow: var(--box-shadow-one);
  padding: 24px;
  border-radius: 8px;
  margin-bottom: var(--box-shadow-offset-one-y);
  display: flex;
  flex-direction: column;
  gap: 16px;

  button,
  input {
    width: 100%;
  }

  button {
    text-transform: uppercase;
    font-weight: var(--font-weight-semi-bold);
    letter-spacing: 1.1px;
  }
`;

const Disclaimer = styled.p`
  text-align: center;
  padding-left: 24px;
  padding-right: 24px;
  color: var(--color-neutral-grayish-blue);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-small);
  a {
    color: var(--color-primary-red);
    text-decoration: none;
    font-weight: var(--font-weight-bold);
  }
  a:hover {
    text-decoration: underline;
  }
  a:focus-visible {
    border-radius: 4px;
    outline: none;
    box-shadow: 0 0 0 4px var(--box-shadow-color-primary-red);
  }
`;

export default SignUpForm;
