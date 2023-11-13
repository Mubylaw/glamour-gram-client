import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import "../assets/styles/auth.css";
import Header from "./Header";

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      name: "",
      password: "",
      view: false,
      show: false,
      success: false,
      dashboard: false,
      tempErr: "",
    };
  }

  componentDidMount() {
    this.props.removeError();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      tempErr: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.view === false) {
      this.setState({ view: true });

      const authType = this.props.signUp ? "register" : "login";
      const { email, password, firstName, lastName, role, name } = this.state;

      this.props
        .onAuth(authType, {
          firstName,
          lastName,
          role,
          name,
          email,
          password,
        })
        .then(() => {
          this.setState({ dashboard: true });
        })
        .catch(() => {
          this.setState({ view: false });
          return;
        });
    }
    // setTimeout(() => {
    //   this.setState({
    //     tempErr:
    //       "Please wait while the server is restarting, free tier does this after periods of inactivity",
    //   });
    // }, 3000);
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleforgot = () => {
    this.props.forgot({ email: this.state.email }).then(() => {
      this.setState({
        success: true,
      });
    });
  };

  handleCancel = () => {
    this.setState({
      success: false,
    });
  };

  render() {
    const { email, tempErr, show, dashboard, firstName, lastName, role, name } =
      this.state;
    const { errors, reset, signUp } = this.props;

    return (
      <>
        <Header />
        <div className="auth-container">
          {dashboard && <Navigate to="/" replace={true} />}
          <div className="form">
            <div className="title">
              {signUp ? "Create" : "Log in to"} your account
            </div>
            <form action="" onSubmit={this.handleSubmit}>
              {!errors.message ? (
                ""
              ) : (
                <div className="alert-danger">{errors.message}</div>
              )}
              {!tempErr ? "" : <div className="alert-danger">{tempErr}</div>}
              {signUp && (
                <>
                  <div className="group">
                    <label
                      htmlFor="firstName"
                      className={`${reset ? "hide" : ""}`}
                    >
                      First Name
                    </label>
                    <input
                      className={`${reset ? "hide" : ""}`}
                      id="firstName"
                      name="firstName"
                      onChange={this.handleChange}
                      value={firstName}
                      type="text"
                      placeholder="Ex: Bella"
                    />
                  </div>
                  <div className="group">
                    <label
                      htmlFor="lastName"
                      className={`${reset ? "hide" : ""}`}
                    >
                      Last Name
                    </label>
                    <input
                      className={`${reset ? "hide" : ""}`}
                      id="lastName"
                      name="lastName"
                      onChange={this.handleChange}
                      value={lastName}
                      type="text"
                      placeholder="Ex: Bones"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="role" className={`${reset ? "hide" : ""}`}>
                      Role
                    </label>
                    <select
                      className={`${reset ? "hide" : ""}`}
                      id="role"
                      name="role"
                      onChange={this.handleChange}
                      value={role}
                      type="text"
                      placeholder="Ex: "
                    >
                      <option value="">--Please choose an option--</option>
                      <option value="user">User</option>
                      <option value="business">Business</option>
                    </select>
                  </div>
                  {role === "business" && (
                    <div className="group">
                      <label
                        htmlFor="name"
                        className={`${reset ? "hide" : ""}`}
                      >
                        Business Name
                      </label>
                      <input
                        className={`${reset ? "hide" : ""}`}
                        id="name"
                        name="name"
                        onChange={this.handleChange}
                        value={name}
                        type="text"
                        placeholder="Ex: Hair By XYZ"
                      />
                    </div>
                  )}
                </>
              )}
              <div className="group">
                <label htmlFor="email" className={`${reset ? "hide" : ""}`}>
                  Email
                </label>
                <input
                  className={`${reset ? "hide" : ""}`}
                  id="email"
                  name="email"
                  onChange={this.handleChange}
                  value={email}
                  type="text"
                  placeholder="Ex: JohnSnow@gmail.com"
                />
              </div>
              <div className="group">
                <label htmlFor="password">Password</label>
                <input
                  className={`${reset ? "reset" : ""}`}
                  id="password"
                  name="password"
                  onChange={this.handleChange}
                  type={`${show ? "text" : "password"}`}
                  placeholder="Ex: Mn3@lqw%5a"
                />
              </div>
              <p>Must be 6 characters at least</p>
              <div className="links">
                <button
                  type="submit"
                  className={`btn ${this.state.view ? "btn-load" : ""}`}
                >
                  <span className="btn_text">
                    {signUp ? "Sign Up" : "Log in"}
                  </span>
                </button>
              </div>
            </form>
            {/* <div className="trouble">
              Forgot your password?{" "}
              <span className="forgot" onClick={this.handleforgot}>
                Click here
              </span>
            </div> */}
            {signUp ? (
              <p className="create">
                Already have an account? <Link to="/signin">Log in</Link>
              </p>
            ) : (
              <p className="create">
                Don't have an account? <Link to="/signup">Create Account</Link>
              </p>
            )}
          </div>
        </div>
      </>
    );
  }
}
