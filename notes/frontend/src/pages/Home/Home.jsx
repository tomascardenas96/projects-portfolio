import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SessionExpired from "../../components/SessionExpired";
import Loader from "../../components/Loader";
import "./Home.css";
import Notes from "../../components/Notes";
import NewNote from "../../components/NewNote";
import useAddNote from "../../hooks/useAddNote";

const Home = () => {
  const { accessToken, expired, loading } = useAuth();
  const [token, setToken] = useState(accessToken);

  if (!token) {
    <Navigate to="/" />;
  }

  return (
    <section>
      <NewNote />
      <Notes />
      {expired && <SessionExpired />}
      {loading && <Loader />}
    </section>
  );
};

export default Home;
