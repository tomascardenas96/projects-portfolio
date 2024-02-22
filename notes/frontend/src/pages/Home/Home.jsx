import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import SessionExpired from "../../components/SessionExpired"

const Home = () => {
  const { accessToken, expired, loading } = useToken();
  const [token, setToken] = useState(accessToken);

  if(token === null) {
    <Navigate to="/"/>
  }

  return (
    <div>
      home
      {expired && <SessionExpired />}
      {loading && <h1>Loading...</h1>}
    </div>
  )
};

export default Home;
