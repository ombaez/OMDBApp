import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="footer">
    <footer className="#4a148c purple darken-4">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">OMDB - Movie Searcher</h5>
            <p className="grey-text text-lighten-4">
              You can search your favourites movies.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul className="ulClassFooter">
              <li>
                <a href="https://ar.linkedin.com/in/omar-alejandro-baez-51731884">
                  <div className="linkedIcon" />
                </a>
              </li>
              <li>
                <a href="https://github.com/ombaez">
                  <div className="gitHubIcon" />
                </a>
              </li>
              <li>
                <a href="mailto:ombaez@gmail.com?Subject=%20Contacto%20">
                  <div className="gmailIcon" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/ombaez">
                  <div className="facebookIcon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright" id="footerCopy">
        <div className="container">© 2019 Copyright Text</div>
      </div>
    </footer>
  </div>
);
