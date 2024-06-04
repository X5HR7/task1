import React, { FC, useCallback, useEffect, useState } from 'react';
import closeButtonIcon from '../../assets/images/close-btn.svg';
import userImageIcon from '../../assets/images/profile_photo_full.png';
import successIcon from '../../assets/images/success.png';
import Form from '../Form/Form.tsx';
import Stats from '../Stats/Stats.tsx';
import styles from './styles.module.css';
import { getDataFromLocalStorage } from '../../utils/localStorage.service.ts';

interface IModal {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
}

const Modal: FC<IModal> = ({ isOpened, setIsOpened }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [success, setSuccess] = useState<number>(0);
  const [failure, setFailure] = useState<number>(0);

  const handleCloseOnX = useCallback(
    (event: KeyboardEvent) => {
      if (event?.key === 'X') {
        setIsOpened(false);
      }
    },
    [setIsOpened]
  );

  useEffect(() => {
    if (isOpened) document.addEventListener('keydown', handleCloseOnX);
    else document.removeEventListener('keydown', handleCloseOnX);

    return () => {
      document.removeEventListener('keydown', handleCloseOnX);
    };
  }, [isOpened, handleCloseOnX]);

  useEffect(() => {
    if (isAuth) {
      setTimeout(closeModal, 3000);
    }
  }, [isAuth]);

  useEffect(() => {
    if (isOpened) setIsAuth(false);
    const data = getDataFromLocalStorage();
    setSuccess(data[0]);
    setFailure(data[1]);
  }, [isOpened]);

  const closeModal = () => {
    setIsOpened(false);
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  };

  return (
    <div className={`${styles.modal} ${isOpened ? styles.modal__opened : ''}`} onClick={closeModal}>
      <div className={styles.modal__container} onClick={handleModalClick}>
        <button className={styles.modal__button} type={'button'} onClick={closeModal}>
          <img src={closeButtonIcon} alt='Close' className={styles.modal__button} />
        </button>
        {isAuth ? (
          <img src={successIcon} alt={'Success'} className={styles.success} />
        ) : (
          <>
            <div className={styles.l_col}>
              <img src={userImageIcon} alt='User' className={styles.modal__image} />
            </div>
            <div className={styles.r_col}>
              <Form setIsAuth={setIsAuth} setSuccess={setSuccess} setFailure={setFailure} />
              <Stats success={success} failure={failure} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
