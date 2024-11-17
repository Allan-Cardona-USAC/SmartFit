import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ onLogin }) => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <h1>Login</h1>
        <LoginForm onLogin={onLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
