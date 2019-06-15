import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Form from './Form';
import { register } from '../store/modules/auth/actions';

const fields = [
  {type: 'email', name: 'email', placeholder: 'email', icon: 'fa-at'},
  {type: 'text', name: 'displayName', placeholder: 'имя', icon: 'fa-user'},
  {type: 'password', name: 'password', placeholder: 'пароль', icon: 'fa-key'},
];

function Register({registration, registerAction}) {
  if (registration.complete) {
    return (
      <main className="container">
        <div className="row login-form justify-content-center align-items-center">
          <div className="col col-md-6">
            <div className="text-center border border-light p-5">
              <p className="h4 mb-4">Поздравляем, вы зарегистрированы!</p>
              
              <p>На указанную вами почту отправлено письмо.</p>
              <p>Для завершения регистрации, пожалуйста, перейдите по ссылке из этого письма.</p>
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  function onSubmit(event, fields) {
    event.preventDefault();
    if (registration.processing) return;
  
    registerAction(fields);
  }
  
  return (
    <Form
      disabled={registration.processing}
      title="Регистрация"
      validated={registration.errors}
      errors={registration.errors}
      onSubmit={onSubmit}
      fields={fields}
      button="Создать аккаунт"
      Footer={() => (
        <p>Уже есть аккаунт?&nbsp;
          <Link to="/login">Вход</Link>
        </p>
      )} />
  );
}

function mapStateToProps(state) {
  return { registration: state.registration };
}

const mapDispatchToProps = { registerAction: register };

export default connect(mapStateToProps, mapDispatchToProps)(Register);

