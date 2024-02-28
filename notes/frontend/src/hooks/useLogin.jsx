import { useState } from "react";

function useLogin() {
  const accessToken = localStorage.getItem("accessToken");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const verifyFields = (data) => {
    if (user.password.length === 0 && user.email.length === 0) {
      setErrorEmail(true);
      setErrorPassword(true);
      throw new Error("Please complete this field");
    }

    if (user.email.length < 8) {
      setErrorEmail(true);
      throw new Error("Email must not be empty");
    } else if (data.message.includes("User non-existent")) {
      setErrorEmail(true);
      throw new Error("User non-existent");
    }

    if (user.password.length < 8) {
      setErrorPassword(true);
      throw new Error("Password must be longer than 8 characters");
    } else if (data.message.includes("Password is wrong")) {
      setErrorPassword(true);
      throw new Error("Incorrect password");
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrorEmail(null);
    setErrorPassword(null);
    try {
      const response = await fetch("http://localhost:4000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const parsedResponse = await response.json();
      console.log(parsedResponse.message);
      verifyFields(parsedResponse);
      if (!parsedResponse.token) {
        throw new Error(parsedResponse.message);
      }

      localStorage.setItem("accessToken", parsedResponse.token);

      setUser({
        email: "",
        password: "",
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  return {
    user,
    handleSubmit,
    handleChange,
    error,
    loading,
    accessToken,
    errorPassword,
    errorEmail,
  };
}

export default useLogin;
