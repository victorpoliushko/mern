import React from "react";

import "./authPage.css";

export const AuthPage = () => {
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h2>Auth Page</h2>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
          <div className="card-action">
            <button className="btn yellow darken-4 login-btn">Login</button>
            <button className="btn grey lighten-4 black-text">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};
