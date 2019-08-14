import React from "react";

export default ({ handleChange, handleSubmit }) => (
  <div className="container" id="loginContainer">
    <form onSubmit={handleSubmit} className="col s12">
      <strong> Login </strong>
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input
            onChange={handleChange}
            id="icon_prefix"
            type="text"
            name='email'
            className="validate"
          />
          <label htmlFor="icon_prefix">First Name</label>
        </div>
        <div className="input-field col s6">
          <input
            onChange={handleChange}
            id="password"
            type="password"
            name='password'
            className="validate"
          />
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <a
        onClick={(e) => handleSubmit(e)}
        className="waves-effect waves-light btn"
      >
        button
      </a>
    </form>
  </div>
);
