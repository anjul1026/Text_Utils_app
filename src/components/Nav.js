import React from "react";
import PropTypes from "prop-types";

export default function Nav(props) {
  return (
    <nav
      className={
        "navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}"
      }
    >
      <a className="navbar-brand" href="/">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              {props.aboutText}
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0"></form>
        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}
Nav.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Nav.defaultProps = {
  title: "Set title here",
  aboutText: "about text here",
};
