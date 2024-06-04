import React, { FC } from 'react';
import { IInput } from '../interfaces/input.interface.ts';
import styles from './Input.module.css';

const Input: FC<IInput> = ({ type, value, ...props }) => {
  return (
    <input
      className={`${styles.form__input} ${type === 'email' ? styles.form__input_type_email : ''}`}
      required={true}
      type={type}
      {...{ ...props, value: value ? value : '' }}
    />
  );
};

export { Input };
