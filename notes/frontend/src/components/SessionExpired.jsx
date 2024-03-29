import React from "react";
import "./styles/SessionExpired.css";

function SessionExpired() {
  return (
    <div className="session-expired__modal">
      <div>
        <h1>Your session has expired</h1>
        <p>Please, login and try again</p>
        <div className="session-expired__modal-loader">
          <div className="loadership_OWEWA2">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SessionExpired;
