import React from "react";
import useLogin from "../../hooks/useLogin";
import { Navigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { PiWarningCircle } from "react-icons/pi";
import "./Login.css";

function Login() {
  const {
    user,
    handleSubmit,
    handleChange,
    error,
    loading,
    accessToken,
    errorPassword,
    errorEmail,
  } = useLogin();

  if (accessToken) {
    return <Navigate to="/home" />;
  }

  return (
    <section className="login-page__container">
      <div className="login-page_form-container">
        <div className="login-page_form">
          <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">
                E-mail
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={user.email}
                />
              {errorEmail && (
                <p>
                  <PiWarningCircle className="warning-icon"/>
                  {error.message}
                </p>
              )}
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={user.password}
                />
              {errorPassword && (
                <p>
                  <PiWarningCircle className="warning-icon"/>
                  {error.message}
                </p>
              )}
              </label>
              <input type="submit" value="Enter" />
            </form>
          </div>
          <p>
            <a href="/register">Create new account!</a>
          </p>
        </div>
      </div>
      {loading && <Loader />}
    </section>
  );
}

export default Login;
