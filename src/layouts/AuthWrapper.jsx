import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './AuthWrapper.scss';

const AuthLayout = ({ children }) => {
  return (
    <main className="auth-wrapper">
      <nav className="navbar">
        <Link className="navbar-brand" to="/">
          Brand
        </Link>
      </nav>
      <section className="body">{children}</section>
    </main>
  );
};

export default AuthLayout;
