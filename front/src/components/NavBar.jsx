import React from "react";
import { Link } from "react-router-dom";
  
export default ({ handleChange, onSubmit, historyFunc, userCheck }) => {
  return (
    <div>
      <nav className="#4a148c purple darken-4">
        <div className="nav-wrapper">
          <div onClick={() => historyFunc()} className="brand-logo">
            <i className="material-icons">local_movies</i>OMDB
          </div>
          <ul className="right">
            <li className="searchField">
              <form className="col s12" onSubmit={onSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      onChange={handleChange}
                      placeholder="SearchMovies"
                      autoComplete="off"
                      id="textarea1"
                      className="materialize-textarea"
                    />
                  </div>
                </div>
              </form>
            </li>
            {userCheck.userlogged ? (
              <li>
                <i className="material-icons">accessibility</i>
              </li>
            ) : null}
            <li>
              <Link to="/user/listAllUsers">
                <i className="material-icons">filter_list</i>
              </Link>
            </li>
            {!userCheck.userlogged ? (
              <span>
                <li>
                  <Link to="/user/login">
                    <i className="material-icons">person</i>
                  </Link>
                </li>
                <li>
                  <Link to="/user/register">
                    <i className="material-icons">more_vert</i>
                  </Link>
                </li>
              </span>
            ) : null}
          </ul>
        </div>
      </nav>
    </div>
  );
};
