import React, { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react';
import useForm from '../../hooks/useForm.ts';
import { checkDataCorrect } from '../../utils/checkData.ts';
import { addFailureAuth, addSuccessAuth } from '../../utils/localStorage.service.ts';
import SubmitButton from '../buttons/SubmitButton/SubmitButton.tsx';
import { FormItem } from './FormItem/FormItem.tsx';
import { ISchema } from './lib/form-schema.interface.ts';
import { formInitialValues } from './lib/formInitialValues.ts';
import styles from './styles.module.css';

interface IForm {
  setIsAuth: (value: boolean) => void;
  setSuccess: Dispatch<SetStateAction<number>>;
  setFailure: Dispatch<SetStateAction<number>>;
}

const Form: FC<IForm> = ({ setIsAuth, setFailure, setSuccess }) => {
  const { values, errors, isValid, setIsValid, handleChange, resetForm } =
    useForm<ISchema>(formInitialValues);
  const [isError, setIsError] = useState(false);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isCorrect = checkDataCorrect(values.email, values.password);

    if (isCorrect) {
      setSuccess(addSuccessAuth());
      setIsError(false);
      setIsAuth(true);
      resetForm();
    } else {
      setFailure(addFailureAuth());
      setIsValid(false);
      setIsError(true);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <FormItem
        titleText={'E-mail'}
        errorMessage={errors.email?.toString() || ''}
        input={{
          id: 'email',
          type: 'email',
          placeholder: 'Email',
          onChange: handleChange,
          value: values.email,
          required: true
        }}
      />
      <FormItem
        titleText={'Password'}
        errorMessage={errors.password?.toString() || ''}
        input={{
          id: 'password',
          type: 'password',
          placeholder: 'Пароль',
          onChange: handleChange,
          value: values.password,
          required: true,
          minLength: 5
        }}
      />
      <p className={`${styles.error} ${isError ? '' : styles.error_hidden}`}>
        Данные для входа не верны!
      </p>
      <SubmitButton disabled={!isValid} />
    </form>
  );
};

export default Form;
