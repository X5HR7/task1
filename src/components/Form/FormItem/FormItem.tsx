import React, { FC } from 'react';
import { Input } from '../Input/Input.tsx';
import { IFormItem } from '../interfaces/form-item.interface.ts';
import styles from './FormItem.module.css';

const FormItem: FC<IFormItem> = ({ titleText, errorMessage, input }) => {
  return (
    <div className={`${styles['form__input-group']}`}>
      <label htmlFor={input.id} className={`${styles['form__input-title']}`}>
        {titleText}
      </label>
      <Input {...input} />
      <p className={`${styles['form__input-field']}`}>{errorMessage}</p>
    </div>
  );
};

export { FormItem };
