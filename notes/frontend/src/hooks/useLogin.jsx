import { useState } from "react";

function useLogin() {
  const accessToken = localStorage.getItem('accessToken');

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const parsedResponse = await response.json();
      if (!parsedResponse.token) {
        throw new Error(parsedResponse.message);
      }

      localStorage.setItem("accessToken", parsedResponse.token);

      setUser({
        email: "",
        password: "",
      });
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false);
    }
  }
  
  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  return { user, handleSubmit, handleChange, error, loading, accessToken };
}

export default useLogin;
