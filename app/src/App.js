import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Swal from 'sweetalert2';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email, password) => {
    // Autenticación simulada
    if (email === 'admin@gmail.com' && password === 'admin') {
      setIsAuthenticated(true);
      Swal.fire({
        title: "Hello!",
        text: "Bienvenido!",
        icon: "success"
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Introdusca las credenciales!",
        footer: '<a href="#">más información?</a>'
      });
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage onLogin={handleLogin} />}
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
