import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
// import "../assets/styles/auth.css";

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
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
    }
    const authType = this.props.signUp ? "register" : "login";
    const { email, password } = this.state;

    this.props
      .onAuth(authType, {
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
    const { email, tempErr, show, dashboard } = this.state;
    const { errors, reset } = this.props;

    return (
      <div className="auth-container">
        <div className="header">
          <img src="/assets/dark.png" alt="Haqadas Logo" />
        </div>
        {dashboard && <Navigate to="/" replace={true} />}
        <div className="form">
          <div className="top-nav sm">
            <Link to="/haqadas">
              <img src="/assets/logo-full.png" alt="Haqadas Logo" />
            </Link>
          </div>
          <div className="title">Sign in to your account</div>
          <form action="" onSubmit={this.handleSubmit}>
            {!errors.message ? (
              ""
            ) : (
              <div className="alert-danger">{errors.message}</div>
            )}
            {!tempErr ? "" : <div className="alert-danger">{tempErr}</div>}
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
                <span className="btn_text">Log in</span>
              </button>
            </div>
          </form>
          {/* <div className="trouble">
              Forgot your password?{" "}
              <span className="forgot" onClick={this.handleforgot}>
                Click here
              </span>
            </div> */}
          <p className="create">
            Don't have an account? <Link to="/onboarding">Create Account</Link>
          </p>
        </div>
      </div>
    );
  }
}
