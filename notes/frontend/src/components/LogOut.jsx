import React, { useState } from "react";
import { CiLogout } from "react-icons/ci";
import "./styles/LogOut.css";

function LogOut() {
  const [loading, setLoading] = useState(false);
  const handleLogOut = () => {
    setLoading(true);
    localStorage.removeItem("accessToken");
  };

  return (
    <>
      <button className="log-out-btn" onClick={handleLogOut}>
      <CiLogout />
        Log out
      </button>
      {loading && (
        <div className="log-out__spinner">
          <div className="loadership_OWEWA3">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p>
            Logging out
          </p>
        </div>
      )}
    </>
  );
}

export default LogOut;
