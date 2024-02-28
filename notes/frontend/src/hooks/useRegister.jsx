import { useState } from "react";

function useRegister() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const accessToken = localStorage.getItem("accessToken");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:4000/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(user),
        }
      );
      const parsedResponse = await response.json();
      if (parsedResponse.error) {
        throw new Error(parsedResponse.error);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
      setUser({
        email: "",
        username: "",
        password: "",
      });
    }
  };

  return { user, handleChange, handleSubmit };
}

export default useRegister;
