import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { oauthCallback } from '../store/modules/auth/actions';

const providerMap = {
  vkontakte: 'VK',
  fb: 'Facebook',
  github: 'Github',
};

function OAuthCallback({token, oauthCallback, oauthCallbackAction, match, location}) {
  if (token) return <Redirect to="/" />;
  
  const params = new URLSearchParams(location.search);
  const provider = match.params.provider;
  
  useEffect(() => {
    if (params.get('error')) return;
    oauthCallbackAction({code: params.get('code'), provider});
  }, []);

  return (
    <main className="container">
      <div className="row login-form justify-content-center align-items-center">
        <div className="col col-md-6">
          <div className="text-center border border-light p-5">
            <p className="h4 mb-4">Логин через {providerMap[provider]}</p>
  
            {oauthCallback.error || params.get('error')
              ? <React.Fragment>
                <p className="text-danger">При выполнени операции произошла ошибка.</p>
                <p className="text-danger">{oauthCallback.error || ""}</p>
                <Link to="/">Вход</Link>
              </React.Fragment>
              : <React.Fragment>
                <p>Пожалуйста, подождите.</p>
                <div className="spinner-border" role="status">
                  <span className="sr-only">Загрузка...</span>
                </div>
              </React.Fragment>
            }
          </div>
        </div>
      </div>
    </main>
  );
}

function mapStateToProps(state) {
  return { oauthCallback: state.oauthCallback, token: state.token };
}

const mapDispatchToProps = { oauthCallbackAction: oauthCallback };

export default connect(mapStateToProps, mapDispatchToProps)(OAuthCallback);
