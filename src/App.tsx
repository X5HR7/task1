import { FC, useState } from 'react';
import './App.css';
import LoginButton from './components/buttons/LoginButton/LoginButton.tsx';
import Modal from './components/Modal/Modal.tsx';

const App: FC = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleLoginButtonClick = () => {
    setIsModalActive(true);
  }

  return (
    <div className={'app'}>
      <Modal isOpened={isModalActive} setIsOpened={setIsModalActive} />
      <LoginButton onClick={handleLoginButtonClick} />
    </div>
  );
};

export default App;
