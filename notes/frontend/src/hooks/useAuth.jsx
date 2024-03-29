import { useState, useEffect } from "react";

function useAuth() {
  const accessToken = localStorage.getItem("accessToken");
  const [expired, setExpired] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const verifyToken = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/auth/home", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${accessToken}`,
          },
        });

        const parsedResponse = await response.json();
        if (parsedResponse.error) {
          localStorage.remove("accessToken");
          throw new Error(parsedResponse.error);
        }
      } catch (err) {
        setExpired(true);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  return { accessToken, expired, loading };
}

export default useAuth;
