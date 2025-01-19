import React, { useState } from 'react';
import { Layout } from '../../containers/layout/layout';
import { Section } from '../../containers/section/section';
import { Modal } from '../../containers/modal/modal';
import LoginForm from '../../screens/LoginForm/LoginForm';
import RegisterForm from '../../screens/RegisterForm/RegisterForm';
import { Button } from '../../components/action/action'; 

const MainPage: React.FC = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  const handleLoginSubmit = (email: string, password: string) => {
    console.log('Login:', { email, password });
    setLoginModalOpen(false); // Закрываем модалку после успешного логина
  };

  const handleRegisterSubmit = (name: string, email: string, password: string, confirmPassword: string) => {
    console.log('Register:', { name, email, password, confirmPassword });
    setRegisterModalOpen(false); // Закрываем модалку после успешной регистрации
  };

  return (
    <Layout>
      <Section>
        <Button label="Login" onClick={() => setLoginModalOpen(true)} />
        <Button label="Register" onClick={() => setRegisterModalOpen(true)} />

        {isLoginModalOpen && (
          <Modal onClose={() => setLoginModalOpen(false)}>
            <LoginForm onSubmit={handleLoginSubmit} />
          </Modal>
        )}

        {isRegisterModalOpen && (
          <Modal onClose={() => setRegisterModalOpen(false)}>
            <RegisterForm onSubmit={handleRegisterSubmit} />
          </Modal>
        )}
      </Section>
    </Layout>
  );
};

export default MainPage;


