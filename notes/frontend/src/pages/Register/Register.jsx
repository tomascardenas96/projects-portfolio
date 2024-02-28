import React from "react";
import useRegister from "../../hooks/useRegister";
import { Navigate } from "react-router-dom";

const Register = () => {
  const {user, handleChange, handleSubmit} = useRegister();
  const accessToken = localStorage.getItem('accessToken');

  if(accessToken) {
    return <Navigate to="/home"/>
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email
          <input type="text" name="email" onChange={handleChange} value={user.email}/>
        </label>
        <label htmlFor="username">Name
          <input type="text" name="username" onChange={handleChange} value={user.username}/>
        </label>
        <label htmlFor="password">Password
          <input type="password" name="password" onChange={handleChange} value={user.password}/>
        </label>
        <label htmlFor="">Confirm password
          <input type="password"/>
        </label>
        <input type="submit" value="Registarse" />
      </form>
    </section>
  );
};

export default Register;
