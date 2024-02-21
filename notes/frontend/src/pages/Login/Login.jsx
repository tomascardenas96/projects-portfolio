import React from "react";
import useLogin from "../../hooks/useLogin";

function Login() {
  const { user, handleSubmit, handleChange, error, loading } = useLogin();

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          E-mail
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={user.email}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="text"
            name="password"
            onChange={handleChange}
            value={user.password}
          />
        </label>
        <input type="submit" value="Ingresar" />
      </form>
      {error && <h1>{error.message}</h1>}
      {loading && <h1>Cargando...</h1>}
    </section>
  );
}

export default Login;