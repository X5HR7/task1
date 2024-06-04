import React, { FC } from 'react';
import styles from './styles.module.css';

interface ISubmitButton {
  disabled?: boolean;
}

const SubmitButton: FC<ISubmitButton> = ({disabled}) => {
  return (
    <button type={'submit'} className={styles.button} disabled={disabled}>Login</button>
  );
};

export default SubmitButton;
