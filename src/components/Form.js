import React, { useState } from 'react';
import SocialButtons from './SocialButtons';

export default function Form(props) {
  const [state, changeState] = useState({});
  
  function setValue(event) {
    changeState({
      ...state,
      [event.target.name]: event.target.value
    });
  }
  
  return (
    <main className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col col-md-6">
          <form
            onSubmit={(event) => props.onSubmit(event, state)}
            className="text-center border border-light p-5"
            noValidate>
            
            <p className="h4 mb-4">{props.title}</p>
            
            {props.error && <p className="text-left text-danger">{props.error}</p>}
  
            {props.fields.map(field => {
              let inputClassname = "form-control";
              if (props.errors) {
                if (props.errors[field.name]) {
                  inputClassname += " is-invalid";
                } else {
                  inputClassname += " is-valid";
                }
              }
    
              return (
                <div className="form-row mb-4" key={field.name} >
                  <input
                    value={state[field.name] || ""}
                    onChange={setValue}
                    type={field.type}
                    name={field.name}
                    required
                    className={inputClassname}
                    disabled={props.disabled}
                    placeholder={field.placeholder} />
                  {(props.errors && props.errors[field.name]) && (
                    <div className="invalid-feedback text-left">
                      {props.errors[field.name]}
                    </div>
                  )}
                </div>
              );
            })}

            <button
              disabled={props.disabled}
              className="btn btn-info btn-block my-4"
              type="submit">{props.button}</button>

            <props.Footer />
          </form>

          <SocialButtons />
        </div>
      </div>
    </main>
  );
}
