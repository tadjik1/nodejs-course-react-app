import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Form from './Form';
import { login } from '../store/modules/auth/actions';

const fields = [
  {type: 'email', name: 'email', placeholder: 'email', icon: 'fa-at'},
  {type: 'password', name: 'password', placeholder: 'пароль', icon: 'fa-key'},
];

function Login({token, login, loginAction}) {
  if (token) return <Redirect to="/" />;
  
  function onSubmit(event, fields) {
    event.preventDefault();
    if (login.processing) return;
  
    loginAction(fields);
  }
  
  return (
    <Form
      disabled={login.processing}
      title="Вход"
      validated={login.errors}
      error={login.error}
      onSubmit={onSubmit}
      fields={fields}
      button="Войти"
      Footer={() => (
        <p>Еще нет аккаунта?&nbsp;
          <Link to="/register">Регистрация</Link>
        </p>
      )} />
  );
}

function mapStateToProps(state) {
  return { login: state.login, token: state.token };
}

const mapDispatchToProps = { loginAction: login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
