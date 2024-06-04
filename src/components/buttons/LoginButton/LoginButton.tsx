import { FC } from 'react';
import image from '../../../assets/images/profile_photo.png';
import styles from './styles.module.css';

interface ILoginButton {
  onClick?: () => void;
}

const LoginButton: FC<ILoginButton> = ({ onClick }) => {
  return (
    <button className={styles.button} type={'button'} onClick={onClick}>
      <img src={image} alt='User image' className={styles.button__image} />
      <p className={styles.button__text}>Login</p>
    </button>
  );
};

export default LoginButton;
