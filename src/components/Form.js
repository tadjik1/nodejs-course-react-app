import React, { useState } from 'react';

export default function Form(props) {
  const [state, changeState] = useState({});
  
  function setValue(event) {
    changeState({
      ...state,
      [event.target.name]: event.target.value
    });
  }
  
  return (
    <div className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={(event) => props.onSubmit(event, state)}>
            {!!props.error &&
            <div className="alert alert-danger" role="alert">
              {props.error}
            </div>
            }
            <div className="jumbotron jumbotron-light jumbotron-form">
              
              {props.fields.map(field => {
                return (
                  <div className="form-group" key={field.id}>
                    <label htmlFor={field.id}>{field.label}</label>
                    <input type={field.type} className="form-control" id={field.id}
                           placeholder={field.placeholder}
                           name={field.name}
                           value={state[field.name] || ""} onChange={setValue} required />
                  </div>
                );
              })}
              
              <button disabled={props.disabled} type="submit" className="btn btn-primary btn-lg">
                {props.submitButton}
              </button>
              
              <div className="form-footer mt-4">
                <props.Footer />
              </div>
            </div>
          </form>
          <div
            className="h4 text-center font-weight-normal text-uppercase my-5 d-none d-lg-block">или
          </div>
          <div className="socials mb-5">
            <a href="#" className="btn btn-primary btn-social -fb">
              <img src="/assets/icons/icon-facebook.svg" alt="" />
              Facebook
            </a>
            <a href="#" className="btn btn-primary btn-social -vk">
              <img src="/assets/icons/icon-vk.svg" alt="" />
              Vkontakte
            </a>
            <a href="#" className="btn btn-primary btn-social -twitter">
              <img src="/assets/icons/icon-twitter.svg" alt="" />
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
